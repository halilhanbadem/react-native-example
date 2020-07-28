import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder = "Bir değer giriniz..."
        style = {styles.textinput}
        />

      <TextInput
        placeholder = "Bir değer giriniz..."
        style = {styles.textinput2}
        />

      <TextInput
        placeholder = "Bir değer giriniz..."
        style = {styles.textinput3}
        />

      <TextInput
        placeholder = "Bir şifre giriniz..."
        style = {styles.textinput4}
        secureTextEntry = {true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    width: "90%",
    backgroundColor: "#F5F5F5",
    paddingStart: 10,
    padding: 8,
    fontSize: 15,
    color: "#37474F",
    marginBottom: 15,
  },
  textinput2: {
    width: "90%",
    backgroundColor: "#66BB6A",
    paddingStart: 10,
    padding: 8,
    fontSize: 15,
    color: "#37474F",
    marginBottom: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textinput3: {
    width: "90%",
    backgroundColor: "#ef5350",
    paddingStart: 10,
    padding: 8,
    fontSize: 15,
    color: "#37474F",
    marginBottom: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textinput4: {
    width: "90%",
    backgroundColor: "#F5F5F5",
    paddingStart: 10,
    padding: 8,
    fontSize: 15,
    color: "#37474F",
    marginBottom: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  }
});
