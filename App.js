
  import React, { Component } from 'react';
  import { StyleSheet, FlatList, View, Text, ScrollView } from "react-native";

  import FirstTask from './components/FirstTask'
  import SecondTask from './components/SecondTask'

  
  class App extends Component {

    render() {
      return (
        <ScrollView>
          <View style={{backgroundColor: "black" }}> 
            <FirstTask/>
            <Text style={styles.peopleStyle}> People List:</Text>
            <SecondTask/>
          </View>
        </ScrollView>
      )

    }

  }
  export default App

  const styles = StyleSheet.create({
    peopleStyle: {
      color:'white',
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 15,
      fontSize: 25
    }

  });