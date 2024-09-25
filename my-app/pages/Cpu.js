import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageButton from './../components/ImageButton';
export default function Cpu({ navigation }) {

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sistemas Básicos, Arquitectura y Procesamiento - CPU
      </Text>
      <View style={styles.imageContainer}>
        {/* Navigate to the Alu component */}
        <ImageButton
          onPress={() => navigation.navigate("Alu")}
          imageStyle={styles.icon}
          source={require("./../assets/Alu.webp")}
        />
        {/* Add other buttons for navigation */}
        <ImageButton
          onPress={() => navigation.navigate("Con")}
          imageStyle={styles.icon}
          source={require("./../assets/control.jpg")}
        />
        <ImageButton
          onPress={() => navigation.navigate("Reg")}
          imageStyle={styles.icon}
          source={require("./../assets/registros.jpg")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    width: 200,
    height: 200,
  },
});
