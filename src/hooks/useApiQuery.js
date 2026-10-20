import { useQuery } from '@tanstack/react-query';
import { get } from '@/services/apiServices';

/**
 * Reusable hook for GET queries with built-in TanStack Query caching.
 *
 * @param {Array} queryKey - Unique cache key identifier (e.g. ['products', id])
 * @param {string} url - API endpoint to fetch
 * @param {Object} options - Additional TanStack useQuery options
 */
export const useApiQuery = (queryKey, url, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: () => get(url),
    enabled: !!url && (options.enabled !== undefined ? options.enabled : true),
    ...options,
  });
};

export default useApiQuery;
