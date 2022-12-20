import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddToDo({onInsert}) {
  const [text, setText] = useState('');

  const onPress = () => {
    if (text === '') {
      console.log('값이 없어요');
    } else {
      onInsert(text);
      setText('');
    }
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../../assets/icons/add_white/add_white.png')} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="여기에 소다와 함께할 일을 입력해줘요."
        placeholderTextColor="#797979"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType={'done'}
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableOpacity onPress={onPress}>{button}</TouchableOpacity>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#1B1B1B',
    height: 80,
    paddingHorizontal: 16,
    borderColor: '#797979',
    borderTopWidth: 0.3,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderStyle: 'solid',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#00C842',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddToDo;
