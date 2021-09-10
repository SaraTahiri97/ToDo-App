import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TaskItem(props) {
    let {index, content,deleteTaskHandle}= props
    return (
        <View style={styles.taskWrapper} >
            <View style={styles.partOneWrapper}>
                <View style={styles.square}></View>
                <Text style={styles.content}>{content}</Text>
            </View>
            <TouchableOpacity style={styles.partTwoWrapper} onPress={()=>deleteTaskHandle(index)}>
                <Text style={styles.deleteX}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskWrapper:{
        width:"90%",
        backgroundColor:"#FFDBC5",
        padding:15,
        borderBottomRightRadius:30,
        borderTopLeftRadius:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        marginBottom:15
    },
    partOneWrapper:{
        flexDirection:'row',
        flexWrap:"wrap",
        alignItems:"center",
    },
    square:{
        width:24,
        height: 24,
        backgroundColor:"#7DD0C6",
        opacity:.5,
        marginRight:20,
    },
    content:{ 
        maxWidth:"80%",
        fontSize:15,
    },
    partTwoWrapper:{
        width:30,
        height: 30,
        borderRadius:30,
        borderColor:"#FFF5DB",
        borderBottomWidth:5,
        justifyContent:'center',
        alignItems:"center"
    },
    deleteX:{
        fontSize:15,
        color:"#FEA889"
    },
})

