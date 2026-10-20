import { QueryClient } from '@tanstack/react-query';

/**
 * Production-ready TanStack Query Client with optimal caching strategy.
 *
 * - staleTime (5 mins): Data is considered fresh for 5 minutes. 
 *   Components reading this data will read instantly from cache with NO network request.
 * - gcTime (30 mins): Cached data stays in memory for 30 minutes after being unused.
 * - refetchOnWindowFocus (false): Prevents unexpected re-fetching on tab switching.
 * - retry (1): Retries failed network calls once before failing.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes fresh
      gcTime: 1000 * 60 * 30, // 30 minutes in cache
      refetchOnWindowFocus: false, // Don't refetch on window focus
      refetchOnMount: false, // Don't refetch if data is still fresh
      retry: 1, // Retry failed requests once
    },
    mutations: {
      retry: 0, // Never retry mutations automatically (e.g. POST, PUT, DELETE)
    },
  },
});

export default queryClient;
