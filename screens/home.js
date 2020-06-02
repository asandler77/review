import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

export default function home({navigation}) {
  const [reviews, setReviews] = useState([
    {title: 'first title', rating: 5, body: 'boody 1', key: '1'},
    {title: 'second title', rating: 11, body: 'boody 2', key: '2'},
  ]);

  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ddd',
  },
});
