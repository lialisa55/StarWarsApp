import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,SafeAreaView, Image, StyleSheet } from 'react-native';
import estilo from '../components/estiloRebeldes';

const url = 'https://swapi.dev/api/people/';
const request = async (callback) => {
    const response = await fetch(url);
    const parsed = await response.json();
    callback(parsed.results);
  }
const imagens = {
  'Luke Skywalker': require('../assets/luke.png'),
  'C-3PO': require('../assets/c3po.jpeg'),
  'R2-D2': require('../assets/r2d2.png'),
  'Darth Vader': require('../assets/darth.png'),
  'Leia Organa': require('../assets/leia.png'),
  'Owen Lars': require('../assets/Owen.png'),
  'Beru Whitesun lars': require('../assets/beru.png'),
  'R5-D4': require('../assets/r5d4.png'),
  'Biggs Darklighter': require('../assets/biggs.png'),
  'Obi-Wan Kenobi': require('../assets/Obio.png'),
}

export default function Characters() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, [])

  const combineData = registros.map(item => ({
    ...item,
    img: imagens[item.name] || null
  }));

  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.superior}>
          StarWars
        </Text>
      </View>

      <FlatList
        data={combineData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) =>
          <View style={estilo.item}>
            <Text> Nome: {item.name}{'\n'}</Text>
            <Text> Peso: {item.mass}{'\n'}</Text>
            {item.img && <Image style={styles.img} source={item.img} />}
          </View>
        } />
    </SafeAreaView>
  );
}

const styles =  StyleSheet.create({
img:{
  resizeMode: 'cover',
  width: 250,
  height:100
}
})