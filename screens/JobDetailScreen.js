import React from 'react';
import { View, Text, Button } from 'react-native';
import { saveBookmark } from '../storage/bookmarks';

export default function JobDetailScreen({ route }) {
  const { job } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{job.title}</Text>
      <Text>{job.description}</Text>
      <Text>Location: {job.location}</Text>
      <Text>Salary: {job.salary}</Text>
      <Text>Phone: {job.phone}</Text>
      <Button title="Bookmark" onPress={() => saveBookmark(job)} />
    </View>
  );
}