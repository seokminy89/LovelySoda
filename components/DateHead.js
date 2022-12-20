import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceHolder, {height: top}]} />
      <StatusBar backgroundColor="#000000" barStyle={'light-content'} />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{alignSelf: 'center'}}>
          <Icon name="menu" size={32} color="#a0a0a0" />
        </View>
        <View style={styles.block}>
          <Text style={styles.dateText}>
            {year}년{month}월{day}일
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Icon name="search" size={32} color="#a0a0a0" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceHolder: {
    backgroundColor: '#000000',
  },
  block: {
    padding: 16,
    backgroundColor: '#000000',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
