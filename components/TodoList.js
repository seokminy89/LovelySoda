import React from 'react';
import {FlatList, View, Text, StyleSheet, ImageBackground} from 'react-native';
import ToDoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <View
      style={{flex: 1, backgroundColor: '#000000', paddingHorizontal: 13.5}}>
      <FlatList
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
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    opacity: 1,
  },
});

export default TodoList;
