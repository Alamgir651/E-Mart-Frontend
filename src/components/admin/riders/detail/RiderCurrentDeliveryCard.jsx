import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPinIcon, ClockIcon } from '@/icons';

export const RiderCurrentDeliveryCard = ({ delivery, riderAvatar }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const deliveryData = delivery || {
    orderId: '#EMT2458',
    status: 'In Progress',
    startedTime: 'Started 12 mins ago',
    pickupLocation: 'Fresh Mart - Gulberg',
    pickupTime: '10:25 AM',
    dropoffLocation: 'Customer - Ali Khan (DHA Phase 5)',
    dropoffTime: '10:38 AM',
    expectedDelivery: '11:00 AM',
    eta: '12 mins away',
    customerName: 'Ali Khan',
    customerPhone: '+92 321 5556677',
    address: 'House 142, Street 4, Phase 5, DHA, Lahore',
    totalAmount: '$34.50',
    items: [
      { name: 'Fresh Farm Milk (2L)', qty: 2, price: '$4.50' },
      { name: 'Brown Organic Eggs (Dozen)', qty: 1, price: '$3.20' },
      { name: 'Whole Wheat Bread', qty: 2, price: '$2.80' },
      { name: 'Imported Apples (1kg)', qty: 1, price: '$5.00' },
    ],
  };

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Lahore coordinates: Gulberg (31.5102, 74.3441) to DHA Phase 5 (31.4697, 74.3986)
    const pickupCoords = [31.5150, 74.3480];
    const dropoffCoords = [31.4720, 74.3940];
    const riderCoords = [31.4910, 74.3720];

    const map = L.map(mapContainerRef.current, {
      center: riderCoords,
      zoom: 12,
      zoomControl: false,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    // CartoDB Voyager tiles (modern, soft, clean)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CARTO',
      maxZoom: 19,
    }).addTo(map);

    // Route polyline with waypoint bends
    const routePoints = [
      pickupCoords,
      [31.5120, 74.3550],
      [31.5010, 74.3620],
      riderCoords,
      [31.4820, 74.3810],
      dropoffCoords,
    ];

    L.polyline(routePoints, {
      color: '#3b82f6',
      weight: 4,
      dashArray: '1, 8',
      lineCap: 'round',
    }).addTo(map);

    L.polyline(routePoints.slice(0, 4), {
      color: '#2563eb',
      weight: 4,
      lineCap: 'round',
    }).addTo(map);

    // Pickup Store Pin Icon
    const storeIcon = L.divIcon({
      className: 'store-pin',
      html: `
        <div style="background:#10b981; color:#fff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 8px rgba(0,0,0,0.25); border:2px solid #fff;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          </svg>
        </div>
      `,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    });
    L.marker(pickupCoords, { icon: storeIcon }).addTo(map);

    // Dropoff Pin Icon
    const customerIcon = L.divIcon({
      className: 'customer-pin',
      html: `
        <div style="background:#ef4444; color:#fff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 8px rgba(0,0,0,0.25); border:2px solid #fff;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3" fill="#ffffff"/>
          </svg>
        </div>
      `,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    });
    L.marker(dropoffCoords, { icon: customerIcon }).addTo(map);

    // Rider Live Location Pin with animated pulsing ring
    const riderDivIcon = L.divIcon({
      className: 'rider-live-pin',
      html: `
        <div style="position:relative; width:34px; height:34px; border-radius:50%; background:#f97316; border:2.5px solid #ffffff; box-shadow:0 4px 12px rgba(249,115,22,0.4); display:flex; align-items:center; justify-content:center; overflow:hidden;">
          <img src="${riderAvatar || ''}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'" />
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });
    L.marker(riderCoords, { icon: riderDivIcon }).addTo(map);

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      clearTimeout(timer);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [riderAvatar]);

  return (
    <>
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-5">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Current Delivery
            </h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200/80">
              {deliveryData.status}
            </span>
            <span className="text-xs font-bold text-slate-600">
              {deliveryData.orderId}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <ClockIcon size={13} />
            <span>{deliveryData.startedTime}</span>
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Timeline & Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="relative pl-6 space-y-6 text-xs sm:text-sm">
              {/* Vertical connector line */}
              <div className="absolute left-2.25 top-3 bottom-3 w-0.5 bg-slate-200 -translate-x-1/2" />

              {/* Step 1: Picked Up */}
              <div className="relative">
                <div className="absolute -left-6 top-0.5 w-4.5 h-4.5 rounded-full bg-emerald-500 border-3 border-white shadow-xs" />
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Picked Up from
                  </span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="font-bold text-slate-900">
                      {deliveryData.pickupLocation}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {deliveryData.pickupTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 2: Delivering to */}
              <div className="relative">
                <div className="absolute -left-6 top-0.5 w-4.5 h-4.5 rounded-full bg-emerald-500 border-3 border-white shadow-xs" />
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Delivering to
                  </span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="font-bold text-slate-900">
                      {deliveryData.dropoffLocation}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {deliveryData.dropoffTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3: Expected Delivery */}
              <div className="relative">
                <div className="absolute -left-6 top-0.5 w-4.5 h-4.5 rounded-full bg-white border-3 border-slate-300 shadow-xs" />
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Expected Delivery
                  </span>
                  <div className="mt-0.5">
                    <span className="font-bold text-slate-900 text-sm">
                      {deliveryData.expectedDelivery}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="w-full sm:flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer text-center"
              >
                View Order Details
              </button>
              <button
                type="button"
                onClick={() => {
                  if (mapInstanceRef.current) {
                    mapInstanceRef.current.setView([31.4910, 74.3720], 14, { animate: true });
                  }
                }}
                className="w-full sm:flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MapPinIcon size={15} />
                <span>Live Location</span>
              </button>
            </div>
          </div>

          {/* Right: Map Box with Route */}
          <div className="lg:col-span-6 relative w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 z-0">
            <div ref={mapContainerRef} className="w-full h-full" />

            {/* Floating Status Pill over Map (matches screenshot) */}
            <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-md border border-slate-200/80 flex items-center gap-2.5">
              <img
                src={riderAvatar}
                alt="Rider"
                className="w-6 h-6 rounded-full object-cover border border-orange-400"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';
                }}
              />
              <div className="text-left">
                <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                  On the Way
                </span>
                <span className="text-[10px] text-slate-400 block -mt-0.5">
                  {deliveryData.eta}
                </span>
              </div>
            </div>

            {/* Custom Map Zoom Controls */}
            <div className="absolute bottom-3 right-3 z-10 flex flex-col bg-white rounded-lg shadow-md border border-slate-200/80 overflow-hidden">
              <button
                type="button"
                onClick={() => mapInstanceRef.current?.zoomIn()}
                className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold text-sm border-b border-slate-100 cursor-pointer"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => mapInstanceRef.current?.zoomOut()}
                className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold text-sm cursor-pointer"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Order Details {deliveryData.orderId}
                </h3>
                <span className="text-xs text-slate-400">Fresh Mart &bull; Delivery in progress</span>
              </div>
              <button
                type="button"
                onClick={() => setShowOrderModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Customer:</span>
                  <span className="font-semibold text-slate-900">{deliveryData.customerName}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Phone:</span>
                  <span className="font-semibold text-slate-900">{deliveryData.customerPhone}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Address:</span>
                  <span className="font-semibold text-slate-900 text-right max-w-[200px]">{deliveryData.address}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-2">Order Items</h4>
                <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
                  {deliveryData.items.map((it, idx) => (
                    <div key={idx} className="p-2.5 flex items-center justify-between bg-white text-slate-700">
                      <span>{it.name} <span className="text-slate-400">x{it.qty}</span></span>
                      <span className="font-bold text-slate-900">{it.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-2 font-bold text-sm text-slate-900">
                <span>Total Amount:</span>
                <span className="text-orange-600">{deliveryData.totalAmount}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowOrderModal(false)}
              className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RiderCurrentDeliveryCard;
