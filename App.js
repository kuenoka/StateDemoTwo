import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [value, onChangeText] = useState('');
  const [valueTwo, onChangeTextTwo] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder = 'Enter Username'
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder = 'Enter Password'
        onChangeText={text => onChangeTextTwo(text)}
        value={valueTwo}
      />
      <Button 
        title = 'Login'
        onPress = {()=> {
          onChangeText('')
          onChangeTextTwo('')
        }}
      />
      <StatusBar style="auto" />
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
  textInputStyle: {
    height: 40,
    width: 200,
    textAlign: 'center'
  }
});
