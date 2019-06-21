import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import * as TodoActions from '~/store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerTodo: {
    flexDirection: 'row',
  },
  deleteTodo: {
    marginLeft: 10,
  },
});

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <View style={styles.containerTodo} key={todo.id}>
        <Text>{todo.text}</Text>
        <TouchableOpacity style={styles.deleteTodo} onPress={() => removeTodo(todo.id)}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    ))}
    <TouchableOpacity onPress={() => addTodo('Come Ovo!')}>
      <Text>Add ToDo</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispathToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(TodoList);
