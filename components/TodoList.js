import React from 'react';
import {FlatList, View, Text, StyleSheet, ImageBackground} from 'react-native';
import ToDoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        // blurRadius={5}
        source={require('../../assets/images/grey.jpeg')}
        resizeMode="cover"
        style={{flex: 1}}
        imageStyle={{opacity: 0.2}}>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.list}
          data={todos}
          renderItem={({item}) => (
            <ToDoItem
              id={item.id}
              text={item.text}
              done={item.done}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    opacity: 1,
  },
  separator: {
    // backgroundColor: '#e0e0e0',
    backgroundColor: '#aaaaaa',
    height: 1,
  },
});

export default TodoList;
