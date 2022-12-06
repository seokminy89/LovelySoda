import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceHolder, {height: top}]} />
      <StatusBar backgroundColor="#282828" barStyle={'light-content'} />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {year}년{month}월{day}일
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceHolder: {
    backgroundColor: '#282828',
  },
  block: {
    padding: 16,
    backgroundColor: '#282828',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
