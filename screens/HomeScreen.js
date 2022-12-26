import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';


const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView style={tw `bg-white h-full `}>
      <Text style={tw `text-red-500`}>I am the homescreen</Text>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})