import React, { useState } from 'react';
import { StyleSheet,View,TextInput,Button, Modal } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoal,setEnteredGoal] = useState('');


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('')
    }
    
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Course Goal"
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <View style={styles.buttonsContainer} >
                <View style={styles.buttons} >
                    <Button title="CANCEL" 
                        color="red"
                        onPress={props.cancelGoalAddition}
                    />
                </View>
                <View style={styles.buttons} >
                    <Button title="ADD" 
                        onPress={addGoalHandler}
                    />
                </View>
            </View>
        </View>
      </Modal>
    )

}

const styles= StyleSheet.create({
      inputContainer: {
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      input:{
        width: '80%', 
        borderWidth: 1,
        borderColor: 'black', 
        padding: 10 ,
        marginBottom:10
      },
      buttonsContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'80%'
      },
      buttons:{
          width:'30%'
      }
})

export default GoalInput;