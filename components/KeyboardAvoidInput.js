import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const KeyboardAvoidingComponent = (props) => {
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : "height"}
            style={styles.KeyboardAvoidingWrapper}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={styles.wrapper}>
                    <TextInput placeholder="Type a task" style={styles.textInput} value={props.typedContent} onChangeText={text=>props.setItem(text)} />
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>props.addTaskHandler()}>
                        <Text style={styles.addSign}>+</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    KeyboardAvoidingWrapper: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        width: windowWidth,
        
    },
    wrapper: {
        flexDirection: "row", 
        justifyContent: "space-around",
        alignItems:"center",
        height:100,
        backgroundColor:"white"
     },

    textInput: {
        backgroundColor: "#FFF5DB",
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 60,
        width: windowWidth - 90,
        height:55,
        elevation: 20,
        shadowColor: '#FFF5DB',
    },

    btnContainer: {
        width: 60,
        height: 60,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEA889",
        elevation: 20,
        shadowColor: '#FFF5DB',
    },
    addSign: {
        fontSize: 30,
        color: "gray",

    }
});

export default KeyboardAvoidingComponent;