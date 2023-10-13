import { useQuery } from 'react-query';
import { getSearchedStore } from '../apis/search';

export function useSearchStore(searchString: string) {
  return useQuery({
    queryKey: ['searchStore', { searchString }],
    queryFn: async () => getSearchedStore(searchString),
  });
}
