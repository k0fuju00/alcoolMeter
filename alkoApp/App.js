import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      bottles: '',
      time: '',
      weight:'',
      gender: '',
   }

   setGender(event){
   this.setState({ gender: event.target.value })
 }

   handleBottles = (text) => {
      this.setState({ bottles: text })
   }
   handleTime = (text) => {
      this.setState({ time: text })
   }

   handleWeight = (text) => {
    this.setState({ weight: text })
 }



   calculateAlcohol = (bottles, time, weight, gender) => {
     
     if (this.state.gender == "MALE") { var transValue = weight*0.7; }
     else { var transValue = weight*0.6; }
    var gramms = bottles * 0.33 * 8 * 4.5;
    var burnedAlc = 0.15*time;
    var perMille = gramms/transValue;
    var PreResult = perMille - burnedAlc;
    var result = Math.round(PreResult*100)/100;
    if (result >= 0) {alert("Your blood alcohol concentration is " + result +" per mille")} else {alert(0)}
    console.log(this.state.gender)

   }


   render() {
      return (
         <View style = {styles.container}>



            <Text>weight in Kg</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "weight"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>

              <Text>number of bottles drunk</Text>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "bottles"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleBottles}/>

              <Text>time passed in hours</Text>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "time"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleTime}/>

<div onChange={this.setGender.bind(this)}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>

            
             
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculateAlcohol(this.state.bottles, this.state.time, this.state.weight, this.state.gender)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>


  
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})