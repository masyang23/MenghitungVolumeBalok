/**
 * Resika
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              panjang =  {this.state.panjang} {"\n"}
              lebar =  {this.state.lebar} {"\n"}
              tinggi =  {this.state.tinggi} {"\n"}
              volume = {this.state.volume}
          </Text>
         </View>

   </View>

    );
  }

}






AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
