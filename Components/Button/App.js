import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title = "Button Kırmızı"
        color = "#c62828"
        onPress = {() => console.log("Kırmızı butona basıldı!")}
        />

      <Button
        title = "Button Yeşil"
        color = "#1B5E20"
        onPress = {() => console.log("Yeşil butona basıldı!")}
        />

      <Button
        title = "Button Sarı"
        color = "#FFEB3B"
        onPress = {() => console.log("Sarı butona basıldı!")}
        />

      <Button
        title = "Button Siyah"
        color = "#212121"
        onPress = {() => console.log("Siyah butona basıldı")}
        />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
