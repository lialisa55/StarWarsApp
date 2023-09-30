import * as React from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';

export default function FotosEtec(props){
  return(
    <View style={styles.container}>
        <Text style={styles.titulo}> STAR WARS Jedi: Fallen Order</Text>
    
     
    <Image style={styles.img} source={require('../assets/starwars.png')}></Image>
    <Button 
    title="Back"
    onPress={() => props.navigation.navigate('Raiz')}
    />
    

    </View>
  );
}

const styles =  StyleSheet.create({
container:{
  flex: 1,
  justifyContent:'center',
  alignItems:'center'
},
titulo:{
  fontSize: 25,
  color: '#ff00ab'
  },
img:{
  height: 500,
  width: 500
}
})