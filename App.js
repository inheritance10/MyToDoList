import React, {useState} from 'react';
 // Import

import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert 
} from 'react-native';

import {appStyles as styles} from './styles';

function App(){

  const [task, setTask] = useState(""); //ARRAY DÖNDÜRÜR

  const [taskArray, setTaskArray] = useState([]);

  const AddTaskPress = () => {
    setTaskArray([...taskArray, task]);
    setTask("");
  };

  const deleteConfirm = (index) => {

    Alert.alert(
      'Confirm to submit',
      'Are you sure to do this.',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => DeleteTaskPress(index) }
      ]
    );
  }

  const DeleteTaskPress = (index) => {
      const newTasks = [...taskArray];
      newTasks.splice(index, 1);//hangi indexteki elemanı ve kaç tane sileceğini söyler
      setTaskArray(newTasks);     
  };

  return(
     <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
          <Text style={styles.title}>
              My Tasks
          </Text>
          <Text style={styles.subtitle}>
            Enter your tasks in the textbox and press Add button
          </Text>

          <TextInput 
          value={task}
          onChangeText={setTask}

          style={styles.input} 
          placeholder='Enter your task name'
          
          />

          <TouchableOpacity 
          onPress={AddTaskPress}
          style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>
              Add Task
            </Text>

          </TouchableOpacity>

          <View style={styles.divider}/>

          <FlatList 
          data = {taskArray}
          renderItem= {({item, index}) =>
             <View style={styles.taskContainer}>
                 <Text style= {styles.taskText}>{item}</Text>
                 <TouchableOpacity 
                     style={styles.taskDeleteButton}
                     
                     onPress= { () => deleteConfirm(index)}
                    
                    
                    >
                    <Text style={styles.taskDeleteText}>X</Text>
                 </TouchableOpacity>
             </View>
          }
          keyExtractor={(item) => item + Date.now() + Math.random()}
          
          />
      </View>
     </SafeAreaView>
  )

}

export default App;
