import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { getBookmarks } from '../storage/bookmarks';

export default function BookmarksScreen() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getBookmarks();
      setBookmarks(data);
    };
    load();
  }, []);

  return (
    <FlatList
      data={bookmarks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      )}
    />
  );
}