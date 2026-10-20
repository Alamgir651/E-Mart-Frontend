import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from '@/utils/toast';

/**
 * Reusable hook for POST, PUT, PATCH, DELETE mutations with cache invalidation.
 *
 * @param {Function} mutationFn - Async mutation function (e.g. (data) => post('/api/item', data))
 * @param {Object} options - Options including invalidateKey, successMessage, onSuccess, onError
 */
export const useApiMutation = (mutationFn, options = {}) => {
  const queryClient = useQueryClient();
  const { invalidateKey, successMessage, onSuccess, onError, ...rest } = options;

  return useMutation({
    mutationFn,
    onSuccess: (data, variables, context) => {
      // Invalidate relevant cache so TanStack Query auto-refetches fresh data
      if (invalidateKey) {
        queryClient.invalidateQueries({ queryKey: invalidateKey });
      }

      if (successMessage) {
        toast.success(
          typeof successMessage === 'function' ? successMessage(data) : successMessage
        );
      }

      if (onSuccess) {
        onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (onError) {
        onError(error, variables, context);
      }
    },
    ...rest,
  });
};

export default useApiMutation;
