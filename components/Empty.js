import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        //source={require('../../assets/images/black_moon.jpeg')}
        // source={require('../../assets/images/coco.jpeg')}
        //source={require('../../assets/images/young_and_happy.png')}
        source={require('../../assets/images/guam_beach.jpeg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.description}>아직 우리 소다의 일정이 없네요.</Text>
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
    width: 300,
    height: 400,
    borderRadius: 15,
    opacity: 0.8,
  },
});

export default Empty;
