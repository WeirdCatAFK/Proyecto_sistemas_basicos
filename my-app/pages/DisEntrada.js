import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { PanResponder } from "react-native-web"; // Para manejar el puntero en entornos web

const DisEntrada = () => {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [textInput, setTextInput] = useState("");

  // Manejo del puntero (solo en plataformas compatibles)
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt) => {
      setPointerPosition({
        x: evt.nativeEvent.pageX,
        y: evt.nativeEvent.pageY,
      });
    },
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Text style={styles.title}>Dispositivos de Entrada</Text>

      {/* Visualizar el puntero */}
      <Text style={styles.pointer}>
        Posición del puntero: X: {pointerPosition.x}, Y: {pointerPosition.y}
      </Text>

      {/* Entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Escribe algo aquí..."
        value={textInput}
        onChangeText={setTextInput}
      />
      <Text style={styles.text}>Has escrito: {textInput}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pointer: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    width: "80%",
  },
  text: {
    fontSize: 16,
  },
});

export default DisEntrada;
