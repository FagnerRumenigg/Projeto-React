import React, {Component} from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import ModalClass from '../components/ModalClass'

export default class SecondTask extends React.Component {

constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  loadUsers = () =>{
    fetch("https://reqres.in/api/users?page=1").then( res => res.json()).then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  componentDidMount(){
    this.loadUsers();
  }
  render(){
    return(
        <FlatList        
        data={this.state.data}
          renderItem={({item}) => (
        
        <View style={styles.item}>
          <Text style={styles.usuario}>{item.first_name} {item.last_name}</Text>
          <ModalClass 
          avatar={item.avatar}
          id={item.id}
          email={item.email}/>
                
        </View> )}
          keyExtractor={ item => item.id}
        />             
    )  
  }
}

const styles = StyleSheet.create({
    usuario:{
            color:'white',
            fontWeight: 'bold',
            textAlign: 'left',
            margin: 5,
            fontSize: 25
    },
    
     item: {
          backgroundColor: '#494952',
          margin: 15,
          padding: 10
        },
  });
