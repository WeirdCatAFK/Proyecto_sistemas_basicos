import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageButton from "./../components/ImageButton";

export default function InOut({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sistemas Básicos, Arquitectura y Procesamiento - Dispositivos de entrada
        y de salida
      </Text>
      <View style={styles.imageContainer}>
        {/* Navigate to the Entrada component */}
        <Text>Dispositivos de Entrada</Text>
        <ImageButton
          onPress={() => navigation.navigate("DisEntrada")}
          imageStyle={styles.icon}
          source={require("./../assets/DisEntrada.png")}
        />
        {/* Navigate to the Salida component */}
        <Text>Dispositivos de Salida</Text>
        <ImageButton
          onPress={() => navigation.navigate("DisSalida")}
          imageStyle={styles.icon}
          source={require("./../assets/DisSalida.png")}
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
