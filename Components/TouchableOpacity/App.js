import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Card  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <TouchableOpacity
        style = {styles.topacity}
        onPress = {() => console.log("Kırmızı butona basıldı")}
        >
        <Text style = {{color: "#fff", fontSize: 25}}>GİRİŞ YAP</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style = {styles.topacity2}
        onPress = {() => console.log("Yeşil butona basıldı")}
        >
        <Text style = {{color: "#fff"}}>GİRİŞ YAP</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.topacity3}
        onPress = {() => console.log("Mor butona basıldı")}
        >

        <Text style = {{color: "#fff", fontWeight: "bold"}}>GİRİŞ YAP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topacity: {
    height: 50,
    width: "90%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems : "center",
    backgroundColor: "#f44336"
  },
  topacity2: {
    height: 50,
    width: "90%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems : "center",
    backgroundColor: "#4CAF50"
  },
  topacity3: {
    height: 50,
    width: "90%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems : "center",
    backgroundColor: "#3F51B5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
