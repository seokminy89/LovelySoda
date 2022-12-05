import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <>
      <StatusBar backgroundColor="black" />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {year}년{month}월{day}일
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: 'black',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
