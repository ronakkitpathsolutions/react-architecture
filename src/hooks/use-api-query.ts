import {
  useQuery,
  type UseQueryOptions,
  type QueryKey,
  keepPreviousData,
} from '@tanstack/react-query';

/**
 * Generic API query hook built on top of TanStack React Query.
 *
 * ✅ Supports string or array query keys
 * ✅ Automatically appends params to queryKey (if provided)
 * ✅ Keeps previous data for smooth UX (pagination / filters)
 * ✅ Safe defaults with override support
 *
 * ------------------------------------------------------
 * USAGE EXAMPLES
 * ------------------------------------------------------
 *
 * 1️⃣ Simple query (no params)
 *
 * useApiQuery({
 *   queryKey: 'users',
 *   queryFn: getUsers,
 * });
 *
 * ------------------------------------------------------
 *
 * 2️⃣ Query with params (ID-based)
 *
 * useApiQuery({
 *   queryKey: 'user',
 *   params: userId,
 *   queryFn: (id) => getUserById(id),
 *   options: {
 *     enabled: !!userId, // prevent API call until ID exists
 *   },
 * });
 *
 * ------------------------------------------------------
 *
 * 3️⃣ Pagination / filters
 *
 * useApiQuery({
 *   queryKey: ['users', 'list'],
 *   params: { page, limit, search },
 *   queryFn: (params) => fetchUsers(params),
 *   options: {
 *     staleTime: 5 * 60 * 1000, // 5 minutes
 *   },
 * });
 */

interface ApiQueryConfig<TResponse, TParams = undefined> {
  queryKey: QueryKey | string;
  queryFn: (params: TParams) => Promise<TResponse>;
  params?: TParams;
  options?: Omit<
    UseQueryOptions<TResponse, Error, TResponse, QueryKey>,
    'queryKey' | 'queryFn'
  >;
}

export function useApiQuery<TResponse, TParams = undefined>({
  queryKey,
  queryFn,
  params,
  options,
}: ApiQueryConfig<TResponse, TParams>) {
  const normalizedKey: QueryKey = Array.isArray(queryKey)
    ? queryKey
    : [queryKey];

  return useQuery({
    queryKey: params !== undefined ? [...normalizedKey, params] : normalizedKey,
    queryFn: () => queryFn(params as TParams),
    placeholderData: keepPreviousData,
    enabled:
      options?.enabled ?? (params === undefined ? true : Boolean(params)),
    ...options,
  });
}
