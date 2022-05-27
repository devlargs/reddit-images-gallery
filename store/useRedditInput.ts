import create from 'zustand';

const useRedditSearch = create<{
  searchText: string;
  setSearchText: (e: string) => void;
}>((set) => ({
  searchText: 'memes',
  setSearchText: (searchText: string): void => set(() => ({ searchText })),
}));

export default useRedditSearch;
