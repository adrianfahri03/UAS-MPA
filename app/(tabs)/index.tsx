//JAWABAN NOMOR 1
// import React, { useState } from 'react';

// const App = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Belajar React Native', completed: false },
//     { id: 2, title: 'Mengerjakan tugas', completed: true },
//   ]);

//   return null; // Placeholder
// };
// export default App;

//JAWABAN NOMOR 2
// import React, { useState } from 'react';
// import { View, TextInput, Button, FlatList, Text } from 'react-native';

// const TodoApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Tambahkan tugas"
//         value={newTask}
//         onChangeText={setNewTask}
//         style={{ borderWidth: 1, marginBottom: 10 }}
//       />
//       <Button title="Tambah" onPress={addTask} />
//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <Text>{item.title}</Text>}
//       />
//     </View>
//   );
// };

// export default TodoApp;

//JAWABAN NOMOR 3
// // actions.js
// export const addTask = (task) => ({ type: 'ADD_TASK', payload: task });

// // reducer.js
// const initialState = { tasks: [] };

// export const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TASK':
//       return { ...state, tasks: [...state.tasks, action.payload] };
//     default:
//       return state;
//   }
// };

// // store.js
// import { createStore } from 'redux';
// import { taskReducer } from './reducer';
// export const store = createStore(taskReducer);


//JAWABAN NOMOR 4
// const deleteTask = async (taskId) => {
//     try {
//       await fetch(https://api.example.com/tasks/${taskId}, {
//         method: 'DELETE',
//       });
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };
  
//JAWABAN NOMOR 5
// import axios from 'axios';

// const addTaskToBackend = async (task) => {
//   try {
//     const response = await axios.post('https://api.example.com/tasks', task);
//     console.log('Task added:', response.data);
//   } catch (error) {
//     console.error('Error adding task:', error);
//   }
// };