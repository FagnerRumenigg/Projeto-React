import React, {Component} from 'react';
import {StyleSheet, Text,View, Image  } from "react-native";

export default class FirstTask extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {id: '', email: '', first_name: '', last_name: '', avatar: ''
        };
    }
    
    componentDidMount(){
      this.fetchJSON();
    }
    
    fetchJSON(){
      fetch("https://reqres.in/api/users/6")
      .then(response => response.json())
      .then((responseJson)=> {
    
        var id = responseJson['data']['id']
        var email = responseJson['data']['email']
        var first_name = responseJson['data']['first_name']
        var last_name = responseJson['data']['last_name']
        var avatar = responseJson['data']['avatar']
        
        this.setState({id: id,
             email: email,
             first_name: first_name,
             last_name: last_name,
             avatar:avatar})
    
      })
      .catch(error=>console.log(error))
    }
    
    render(){
        return(
            <View style={styles.item} >
              <Text style={styles.usuario}> {this.state.first_name} {this.state.last_name}</Text >
              <Image
                source={{uri:this.state.avatar}}
                style={styles.imagem}/>
              <Text style={{color: "white" }}>E-mail: {this.state.email}</Text>
            </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
        item: {
          backgroundColor: '#494952',
          marginTop:30,
          margin: 15,
          padding: 10
        },
        usuario:{
            color:'white',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 5,
            fontSize: 25
        },
        imagem:{
            width: 50,
            height: 50,
            resizeMode:'contain',
            justifyContent:'flex-start',
            marginBottom: 5}
      });