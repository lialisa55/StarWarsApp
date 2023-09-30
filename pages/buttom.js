import {Button, Text, View, StyleSheet} from 'react-native';

export default function Imperio(props){
  return(
    <View style={styles.container}>
        <Text style={styles.titulo}> Minhas lindas fotos </Text>
    

    <Button 
    title="Jogo Star Wars"
    onPress={() => props.navigation.navigate('Jogo')}
    />

    <Button 
    title="Filme Yoda"
    onPress={() => props.navigation.navigate('Filme')}
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
  }
})