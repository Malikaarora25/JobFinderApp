import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARKS_KEY = 'BOOKMARKS';

export const saveBookmark = async (job) => {
  let bookmarks = await getBookmarks();
  bookmarks.push(job);
  await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
};

export const getBookmarks = async () => {
  const res = await AsyncStorage.getItem(BOOKMARKS_KEY);
  return res ? JSON.parse(res) : [];
};