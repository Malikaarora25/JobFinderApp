import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://testapi.getlokalapp.com/common/jobs?page=1')
      .then((response) => {
        setJobs(response.data?.data || []);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginBottom: 15, padding: 10, backgroundColor: '#f0f0f0' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.job_title}</Text>
            <Text>{item.company_name}</Text>
            <Text style={{ color: 'gray' }}>{item.job_location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}