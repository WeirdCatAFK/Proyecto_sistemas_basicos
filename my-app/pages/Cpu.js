import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageButton from "./../components/ImageButton";
export default function Cpu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sistemas Básicos, Arquitectura y Procesamiento - CPU
      </Text>
      <View style={styles.imageContainer}>
        {/* Navigate to the Alu component */}
        <Text>ALU</Text>
        <ImageButton
          onPress={() => navigation.navigate("Alu")}
          imageStyle={styles.icon}
          source={require("./../assets/Alu.webp")}
        />
        <Text>Unidad de control</Text>
        <ImageButton
          onPress={() => navigation.navigate("ConUnit")}
          imageStyle={styles.icon}
          source={require("./../assets/control.jpg")}
        />
        <Text>Registros del CPU</Text>
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
