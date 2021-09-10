import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions, Keyboard } from 'react-native';
import TaskItem from './components/TaskItem'
import KeyboardAvoidingComponent from './components/KeyboardAvoidInput'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  let [item, setItem] = React.useState(null);
  let [itemArray, setItemArray] = React.useState([]);
  let [completedTasks, setCompletedTasks] = React.useState(0)
  let [TasksLeft, setTasksLeft] = React.useState(0)
  let [TotalTasks, setTotalTasks] = React.useState(0)

  let addTaskHandler = () => {
    Keyboard.dismiss

    let tt = TotalTasks + 1
    setTotalTasks(tt)

    let tl = TasksLeft + 1
    setTasksLeft(tl)

    item != null ? setItemArray([...itemArray, item]) : null
    setItem(null)

  }
  let deleteTaskHandle = (index) => {
    let ct = completedTasks + 1
    let tl = TasksLeft - 1
    let taskArrayCopy = [...itemArray]
    taskArrayCopy.splice(index, 1);
    setItemArray(taskArrayCopy)
    setCompletedTasks(ct);
    setTasksLeft(tl)
  }
  return (

    <View style={styles.container}>
      <View style={styles.pageTitleWrapper}>
        <View style={styles.statisticWraper}>
          <Text style={styles.completedTasks}>Number of completed Tasks : {completedTasks}</Text>
          <Text style={styles.completedTasks}>Number of Tasks left : {TasksLeft}</Text>
          <Text style={styles.completedTasks}>Number of Total Tasks : {TotalTasks}</Text>

        </View>
        <Text style={styles.pageTitle}>List of all tasks</Text>

      </View>
      <View style={styles.pageTitleAddedStyle}></View>
      <View style={{ height: windowHeight - 270 }}>
        <ScrollView>
          <View style={styles.itemsWrapper}>
            {itemArray.map((item, index) => {
              return <TaskItem key = {index}  content={item} deleteTaskHandle={deleteTaskHandle} index={index} />
            })
            }
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingComponent typedContent={item} setItem={setItem} addTaskHandler={addTaskHandler} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    height: windowHeight,
  },
  pageTitleAddedStyle: {
    width: "10%",
    height: 30,
    backgroundColor: '#D4F4EC',
    borderBottomRightRadius: 60,
  },
  pageTitleWrapper: {
    backgroundColor: '#D4F4EC',
    borderBottomRightRadius: 60,
    paddingVertical: "10%"
  },
  statisticWraper: {
    position: "relative",
    top: 20,
    left: "35%"
  },
  completedTasks: {
    fontSize: 15,
    color:"#C0C0C0",
    fontWeight: "bold"

  },
  pageTitle: {
    fontSize: 28,
    marginLeft: 30,
    marginTop: 50,
    fontWeight: "bold"
  },
  itemsWrapper: {
    alignItems: 'center',
  }

});
