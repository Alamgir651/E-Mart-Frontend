# E-Mart Frontend - System Design & Engineering Architecture

This document defines the production-grade frontend architecture, multi-portal system design patterns (Storefront, Vendor Dashboard, Admin Dashboard), coding constraints, and development guidelines for the E-Mart application.

---

## 1. Core Engineering Principles

### 1.1 Maximum 200 Lines Per File
- **Hard Limit:** No source file may exceed **200 lines of code**.
- **Decomposition Strategy:**
  - Break UI components into atomic sub-components (e.g., `VendorOrderTable` → `OrderRow`, `OrderStatusBadge`, `OrderActionsMenu`).
  - Extract component business logic into custom hooks (e.g., `useVendorStats`, `useAdminApprovals`).
  - Isolate constants, configuration objects, navigation trees, and types into standalone files.

### 1.2 Zero Massive/Noisy Comments (Clean Code Standard)
- **Self-Documenting Code:** Code must express intent through descriptive naming (variables, functions, components) rather than paragraphs of comments.
- **Strict Rules:**
  - ❌ **No massive commentary blocks**, narrative explanations, or conversational notes.
  - ❌ **No commented-out dead code** (rely on git history).
  - ❌ **No redundant comments** explaining self-evident operations.
  - ✔️ **Permitted:** Brief JSDoc annotations for complex domain logic or non-obvious business formulas when strictly necessary.

### 1.3 Centralized Motion & Animations
- **Location:** `src/animation/animations.js`
- **Rule:** Never define inline Framer Motion / Motion variants directly inside JSX components.
- **Exported Primitives:**
  - Standardized transition presets (`springEase`, `smoothEase`, `modalTransition`, `sidebarTransition`).
  - Reusable animation variants (`fadeIn`, `slideUp`, `staggerContainer`, `scaleUp`, `cardHover`).
  - Dynamic helper functions (e.g., `getStaggerDelay(index)`).

### 1.4 Centralized Icon System (`lucide-animated`)
- **Location:** `src/icons/` (Barrel file: `src/icons/index.js`)
- **Rule:** Do not import directly from `lucide-animated` across arbitrary component files.
- **Convention:**
  - `lucide-animated` requires the `Icon` suffix (`HeartIcon`, `CircleCheckIcon`, `CartIcon`, `LayoutDashboardIcon`).
  - Import, customize, and export all icons through `src/icons/index.js` to guarantee consistent icon sizing, strokes, and default animation behaviors.

### 1.5 Mockup Data Layer
- **Location:** `src/mock/`
- **Structure:** Segregated by domain portals:
  - `src/mock/store/` – Catalog, categories, carts, customer orders
  - `src/mock/vendor/` – Vendor products, sales metrics, fulfillment orders, payouts
  - `src/mock/admin/` – Platform users, vendor KYC verifications, platform revenues, audit logs
- **Standard:** Follow strict typed schemas mirroring target production backend REST/GraphQL response payloads to allow zero-effort API integration.

### 1.6 Password Field & Input Animation Standards
- **Show/Hide Password Standard:** Every password input field across all portals (Customer, Vendor, Admin) must include an interactive visibility toggle using `EyeIcon` and `EyeOffIcon` from `@/icons`.
- **Autofill Overrides:** Browser autofill must never turn input backgrounds blue; normalized via `:-webkit-autofill` in `src/index.css`.
- **Container Hover Animation:** Animated icons embedded in input fields or feature cards must trigger their motion animation when hovering anywhere over the parent container (`group`), not solely on the icon boundary.

### 1.7 Strict Input Field Validation & Sanitization Standard
- **Centralized Helper Location:** `src/utils/validators.js`
- **Real-Time Character Sanitization (Mandatory on `onChange`):**
  - **Name Fields (Full Name, Contact, Owner):** Only letters and spaces permitted (`/[^a-zA-Z\s]/g`). Numbers and special symbols must be strictly blocked as the user types.
  - **Phone Number Fields:** Only numeric digits permitted (`/\D/g`). Letters, symbols, and excess spaces are stripped out immediately.
  - **CNIC / National ID Fields:** Only digits and hyphens permitted, formatted automatically (`XXXXX-XXXXXXX-X`).
  - **Email Fields:** Disallow whitespace and validate standard RFC structure (`user@domain.com`).
- **Rule for Future Development:** Every new input field across the application must strictly adhere to these real-time sanitizers to ensure data cleanliness and eliminate invalid inputs at the source.

---

## 2. Multi-Portal System Design Architecture

The E-Mart application operates **3 distinct portals** within a unified frontend codebase:
1. **Customer Storefront:** Public marketplace, product discovery, wishlist, cart, customer account.
2. **Vendor Dashboard:** Merchant portal for inventory control, order fulfillment, payout tracking, and sales analytics.
3. **Admin Dashboard:** Platform governance, vendor onboarding & KYC approval, commission rates, and audit logs.

### 2.1 High-Level Architecture Diagram

```mermaid
graph TD
    subgraph Client_App["E-Mart Single Page Application"]
        Router["React Router v6 / RBAC Gate"]
        
        subgraph Portals["Three Distinct Portals"]
            StoreLayout["Storefront Layout\n(Header, MegaMenu, Footer)"]
            VendorLayout["Vendor Dashboard Layout\n(VendorSidebar, MerchantHeader)"]
            AdminLayout["Admin Dashboard Layout\n(AdminSidebar, SystemHeader)"]
        end
        
        subgraph Route_Guards["Role-Based Route Guards"]
            PublicGuard["Public Access"]
            VendorGuard["RoleGuard: role == 'vendor'"]
            AdminGuard["RoleGuard: role == 'admin'"]
        end
        
        subgraph Core_Shared["Shared Enterprise Foundation"]
            SharedUI["Shared UI Primitives (Button, Modal, Input, Table)"]
            CentralIcons["Centralized lucide-animated (src/icons)"]
            CentralMotion["Central Motion Engine (src/animation/animations.js)"]
            GlobalState["Redux Toolkit Global Store"]
            API_Layer["Axios / Fetch API Client + Mock Adapters"]
        end
    end

    Router --> PublicGuard --> StoreLayout
    Router --> VendorGuard --> VendorLayout
    Router --> AdminGuard --> AdminLayout

    StoreLayout --> SharedUI
    VendorLayout --> SharedUI
    AdminLayout --> SharedUI

    SharedUI --> CentralIcons
    SharedUI --> CentralMotion
    Portals --> GlobalState
    GlobalState --> API_Layer
```

### 2.2 Portal Specifications & Access Matrix

| Portal | Base Route | Required Role | Layout Structure | Core Capabilities |
| :--- | :--- | :--- | :--- | :--- |
| **Storefront** | `/` | `guest` / `customer` | `StoreLayout` | Product catalog, cart, checkout, order history |
| **Vendor Portal** | `/vendor` | `vendor` | `VendorLayout` | Product listing/editing, inventory, fulfillment, payouts |
| **Admin Portal** | `/admin` | `admin` | `AdminLayout` | Platform analytics, vendor approval, dispute resolution, user bans |

---

## 3. Client-Side Data & Security Flow

### 3.1 Role-Based Access Control (RBAC) & Route Guard Flow

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Router as App Routes
    participant Guard as RoleGuard Component
    participant AuthState as Redux Auth Slice
    participant VendorView as Vendor Dashboard View
    participant Login as Login View

    User->>Router: Navigates to /vendor/products
    Router->>Guard: Evaluate route requirement (role: 'vendor')
    Guard->>AuthState: Query auth state (isAuthenticated, role)
    
    alt Not Authenticated
        AuthState-->>Guard: isAuthenticated = false
        Guard-->>User: Redirect to /login?redirect=/vendor/products
    else Authenticated as Customer (Unauthorized)
        AuthState-->>Guard: isAuthenticated = true, role = 'customer'
        Guard-->>User: Redirect to /403-unauthorized
    else Authenticated as Vendor (Authorized)
        AuthState-->>Guard: isAuthenticated = true, role = 'vendor'
        Guard->>VendorView: Mount VendorLayout & VendorProductsPage
        VendorView-->>User: Render Vendor Dashboard
    end
```

### 3.2 Optimistic Storefront Data Flow (Cart & Wishlist)

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Card as ProductCard Component
    participant Hook as useCart Hook
    participant Redux as Redux Cart Slice
    participant Storage as LocalStorage / Sync Service
    participant API as Backend API / Mock Layer

    User->>Card: Clicks "Add to Cart"
    Card->>Hook: dispatch addItem(product, qty)
    Hook->>Redux: Optimistic Update (state.items.push)
    Redux->>Storage: Sync persisted state (cart_items)
    Hook->>API: POST /api/cart/items (Background Sync)
    alt API Success
        API-->>Hook: 200 OK (Cart Total Confirmed)
    else API Failure
        API-->>Hook: Network Error / Out of Stock
        Hook->>Redux: Rollback item & trigger Toast error
    end
```

---

## 4. Multi-Dashboard Project Directory Structure

```text
E-Mart-Frontend/
├── public/
├── src/
│   ├── animation/                     # Centralized motion engine
│   │   └── animations.js              # Variants, transitions, animation helpers (< 200 lines)
│   │
│   ├── app/                           # Core Redux Store configuration
│   │   ├── store.js                   # configureStore setup
│   │   └── rootReducer.js             # Root reducer combining store, vendor, admin slices
│   │
│   ├── assets/                        # Shared static assets, logos
│   │
│   ├── components/                    # Reusable atomic & layout components
│   │   ├── common/                    # Button, Input, Modal, Drawer, Badge, Spinner
│   │   ├── feedback/                  # Toast, Skeleton, ErrorBoundary, EmptyState
│   │   ├── data-display/              # DataTable, Pagination, StatCard, MetricBadge
│   │   └── navigation/                # SidebarItem, Breadcrumb, Tabs
│   │
│   ├── features/                      # Domain-specific slices & business logic
│   │   ├── auth/                      # authSlice.js, authService.js, useAuth.js
│   │   ├── store/                     # Storefront features (cartSlice.js, wishlistSlice.js)
│   │   ├── vendor/                    # Vendor features (vendorProductSlice.js, vendorOrderSlice.js)
│   │   └── admin/                     # Admin features (adminVendorSlice.js, platformAnalyticsSlice.js)
│   │
│   ├── hooks/                         # Global shared custom hooks
│   │   ├── useDebounce.js             # Search input debounce
│   │   ├── useMediaQuery.js           # Responsive viewport listener
│   │   └── useRole.js                 # Role checks (isVendor, isAdmin, isCustomer)
│   │
│   ├── icons/                         # Centralized animated icons
│   │   └── index.js                   # Re-exported lucide-animated icons
│   │
│   ├── layouts/                       # Distinct portal shell layouts (< 200 lines each)
│   │   ├── StoreLayout.jsx            # Storefront header, search bar, footer
│   │   ├── VendorLayout.jsx           # Vendor collapsible sidebar, store switcher, notifications
│   │   └── AdminLayout.jsx            # Admin sidebar, system metrics header, audit panel
│   │
│   ├── mock/                          # Segregated mock data layers
│   │   ├── store/
│   │   │   ├── products.mock.js       # Customer catalog items
│   │   │   └── categories.mock.js     # Storefront category hierarchy
│   │   ├── vendor/
│   │   │   ├── vendorProducts.mock.js # Vendor inventory & SKU management
│   │   │   ├── vendorOrders.mock.js   # Vendor incoming orders & fulfillment states
│   │   │   └── vendorStats.mock.js    # Revenue, units sold, payout histories
│   │   └── admin/
│   │       ├── platformStats.mock.js  # Platform gross merchandise value (GMV), active users
│   │       ├── vendorApprovals.mock.js# Pending KYC submissions
│   │       └── auditLogs.mock.js      # System security & administrative changes
│   │
│   ├── pages/                         # Route-level views (< 200 lines each)
│   │   ├── store/                     # Storefront views
│   │   │   ├── Home/
│   │   │   ├── Shop/
│   │   │   ├── ProductDetail/
│   │   │   └── Checkout/
│   │   ├── vendor/                    # Vendor Dashboard views
│   │   │   ├── VendorOverview/        # KPI Cards, Recent orders, Low-stock alerts
│   │   │   ├── VendorProducts/        # Product inventory table, Add/Edit modal
│   │   │   ├── VendorOrders/          # Order management, status updater
│   │   │   └── VendorPayouts/         # Bank payout ledger, invoice history
│   │   └── admin/                     # Admin Dashboard views
│   │       ├── AdminOverview/         # Platform KPIs, GMV charts, active vendors
│   │       ├── AdminVendors/          # Vendor approval pipeline, commission settings
│   │       ├── AdminUsers/            # Customer & staff management
│   │       └── AdminSettings/         # Global payment & marketplace configuration
│   │
│   ├── routes/                        # Modular route configuration & guards
│   │   ├── AppRoutes.jsx              # Top-level route tree
│   │   ├── RoleGuard.jsx              # RBAC route protector
│   │   ├── store.routes.jsx           # Storefront route definitions
│   │   ├── vendor.routes.jsx          # Vendor dashboard route definitions
│   │   └── admin.routes.jsx           # Admin dashboard route definitions
│   │
│   ├── services/                      # API clients & network utilities
│   │   ├── api.js                     # Axios/Fetch client with interceptors
│   │   └── endpoints.js               # Route endpoints (store, vendor, admin)
│   │
│   ├── utils/                         # Pure helper functions
│   │   ├── formatCurrency.js          # Currency formatting
│   │   ├── formatDate.js              # Date & timestamp formatting
│   │   └── storage.js                 # LocalStorage wrapper
│   │
│   ├── App.jsx                        # Route providers & theme context
│   ├── index.css                      # Tailwind CSS & design tokens
│   └── main.jsx                       # React DOM root entry point
├── design.md                          # This architecture specification
├── package.json
└── vite.config.js
```

---

## 5. Performance, Rendering & Optimization Standards

### 5.1 Route Lazy Loading & Dynamic Imports
- **Dynamic Portal Splitting:** Every page route (Storefront, Vendor, Admin) must be loaded dynamically using `React.lazy()` to prevent admin/vendor bundles from bloating the customer storefront:
  ```jsx
  // Storefront
  const Home = lazy(() => import('@/pages/store/Home'));
  const Shop = lazy(() => import('@/pages/store/Shop'));

  // Vendor Portal
  const VendorOverview = lazy(() => import('@/pages/vendor/VendorOverview'));
  const VendorProducts = lazy(() => import('@/pages/vendor/VendorProducts'));

  // Admin Portal
  const AdminOverview = lazy(() => import('@/pages/admin/AdminOverview'));
  const AdminVendors = lazy(() => import('@/pages/admin/AdminVendors'));
  ```
- **Portal-Specific Suspense Skeletons:** Each portal layout must provide contextual skeletons (e.g., `<StorePageSkeleton />`, `<DashboardSkeleton />` with sidebar & table place-holders) to eliminate layout shift during bundle fetch.
- **Role-Based Chunk Preloading:** When an authenticated vendor logs in, proactively preload the vendor overview chunk in the background.

### 5.2 Re-render Prevention & Justified Memoization
- **State Colocation First:** Keep local state as close to the consuming component as possible. Lift state up only when siblings strictly require it. Avoid putting ephemeral UI state (e.g., input values, table filter dropdown states) into global Redux store.
- **Justified Memoization Rule:**
  - ❌ **Do not blindly wrap every component or function** in `React.memo`, `useMemo`, or `useCallback`. Premature memoization adds memory overhead and dependency array churn without performance benefits.
  - ✔️ **Use `useMemo` strictly when:**
    - Transforming, filtering, or sorting large datasets (e.g., searching/filtering 100+ inventory SKUs in Vendor Products table).
    - Preserving referential equality of complex objects/arrays passed as dependencies to custom hooks or `useEffect`.
  - ✔️ **Use `useCallback` strictly when:**
    - Passing callbacks to child components that are explicitly wrapped in `React.memo` (e.g., action buttons inside memoized table rows).
    - Supplying stable callback references required in hook dependency lists.
  - ✔️ **Use `React.memo` strictly when:**
    - A component renders frequently with unchanged props and contains expensive DOM subtrees (e.g., table rows, chart data points, dense product cards).

### 5.3 Asset & Image Optimization
- **Modern Formats:** Deliver images in **WebP** or **AVIF** formats for superior compression and high visual fidelity.
- **Loading Priorities:**
  - **Hero & Above-the-Fold Images:** Use `loading="eager"` and `fetchpriority="high"` to maximize Largest Contentful Paint (LCP) scores.
  - **Below-the-Fold & Dashboard Data Tables:** Enforce native lazy loading (`loading="lazy"`) and `decoding="async"` for vendor product thumbnails.
- **Cumulative Layout Shift (CLS) Prevention:** Always specify explicit `width`, `height`, or CSS aspect-ratio classes (`aspect-square`, `aspect-video`) so the browser reserves layout space before media finishes downloading.
- **Placeholder Fallbacks:** Display subtle skeleton loaders or blur-up placeholders while high-res images are being decoded.

### 5.4 Security, Resilience & Memory Management
- **Role Boundary Defense:** Client-side route guards are for UX convenience; ensure all API requests send auth tokens and that sensitive vendor/admin data is never exposed without server-side permission checks.
- **Granular Error Boundaries:** Isolate dashboard widgets (e.g., Vendor Revenue Chart, Admin Approval Feed) within independent Error Boundaries so a single component failure doesn't crash the entire dashboard.
- **Memory & Resource Cleanup:** Guarantee complete cleanup of chart instances, event listeners, intervals, debounced timers, and Motion animation controllers within `useEffect` return functions.
- **Client Security:** Sanitize dynamic inputs against XSS and never persist sensitive credentials or auth secrets in unencrypted browser storage.
