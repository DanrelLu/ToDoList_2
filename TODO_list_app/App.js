import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
