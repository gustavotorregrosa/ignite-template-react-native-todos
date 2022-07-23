import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask: Task = {
      id: new Date().getTime(),
      done: false,
      title: newTaskTitle
    }

    const newTasksArray = [
      ...tasks,
      newTask
    ] 

    setTasks(newTasksArray)
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists

    if(!tasks.find(t => t.id == id)){
      return
    }

    const newTask: Task = { 
      ...tasks.find(t => t.id == id)!,
      done: true
    }

    const newTasksArray = [
      ...tasks.filter(t => t.id != id),
      newTask
    ]

    setTasks(newTasksArray)



  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTasksArray = [
      ...tasks.filter(t => t.id != id),
    ]

    setTasks(newTasksArray)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})