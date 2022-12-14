import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        //source={require('../../assets/images/black_moon.jpeg')}
        // source={require('../../assets/images/coco.jpeg')}
        //source={require('../../assets/images/young_and_happy.png')}
        source={require('../../assets/images/soda.jpeg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.description}>소다 심심해요 일정 좀 잡아줘요.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    marginTop: 10,
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    opacity: 0.8,
  },
});

export default Empty;
