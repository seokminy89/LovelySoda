import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ToDoItem({id, text, done, onToggle, onRemove}) {
  const remove = () => {
    Alert.alert(
      '일정 삭제',
      '정말 삭제할거에요?',
      [
        {
          text: '취소',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={{flexDirection: 'row', flex: 9}}
        onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Icon name="check" size={16} color="white" />
            // <Image
            //   source={require('../../assets/icons/check_white/check_white.png')}
            // />
          )}
        </View>
        <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      </TouchableOpacity>
      {done ? (
        <TouchableOpacity
          style={{flex: 1, alignItems: 'center'}}
          onPress={remove}>
          <Icon name="delete" size={32} color="#DE5C4E" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#1B1B1B',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    // padding: 16,
    padding: 20,
    alignItems: 'center',
  },
  circle: {
    alignSelf: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00C842',
  },
  text: {
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default ToDoItem;
