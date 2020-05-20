import React, {Component} from 'react';
import {Text,View,StyleSheet,Modal,
  TouchableHighlight, Image} from 'react-native';

export default class ModalClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      modalVisible: false,
    }
  }

  modalChange(visibilidade){
    this.setState({modalVisible: visibilidade});
  }

  loadUsers = () =>{
    fetch("https://reqres.in/api/users?page=2").then( res => res.json()).then(res => {
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
        
      <View>
          <Modal
            animationType = {'slide'}
            transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose= {() => console.log('Modal closed')}
          >          
        <View style={styles.backgroundSecondTask}>
            <View style={styles.modal}>
        
          <Image
                source={{uri:this.props.avatar}}
                style={styles.imagem}
                />
          <Text style={{color:'white'}} >ID: {this.props.id}</Text>
          <Text style={{color :'white'}}>E-mail: {this.props.email}</Text>
            
            <TouchableHighlight
              onPress={
                ()=>{
                  this.modalChange(!this.state.modalVisible)
                }}>
                    <Text style={styles.button}>Exit</Text>
            </TouchableHighlight>
          </View>           
        </View>
        </Modal>


        <TouchableHighlight
          onPress={
            ()=>{
              this.modalChange(!this.state.modalVisible)
            }}>
          <Text style={styles.button}>More Info</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  backgroundSecondTask:{
    backgroundColor:'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    imagem:{
        width: 50,
        height: 50,
        resizeMode:'contain',
        justifyContent:'flex-start',
        margin: 5},
  button:{
    borderWidth: 1,
    color: 'white',
    fontSize: 20,
    backgroundColor: '#000',
    marginTop: 10,
    textAlign: 'center',
    padding: 5
    
  },
  modal: {
    backgroundColor:'#494952',
    fontSize: 20,
    marginTop: 200,
    padding: 20
  }
});