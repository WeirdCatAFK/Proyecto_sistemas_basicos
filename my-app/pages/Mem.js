import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";

export default function Mem() {
  // Función para mostrar una alerta al presionar los elementos
  const handlePress = (item) => {
    Alert.alert(
      `Estás accediendo a la ${item}!`,
      `Esta es una sección de la memoria.`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>La Unidad de Memoria</Text>
      <Text style={styles.subtitle}>
        Imagina que la memoria de un computador es como un gran almacén lleno de
        cajas. Cada caja guarda un fragmento de información importante.
      </Text>

      {/* Imágenes con botones simulando las diferentes "cajas de memoria" */}
      <View style={styles.memoryGrid}>
        <Pressable onPress={() => handlePress("Memoria RAM")}>
          <Image
            style={styles.memoryImage}
            source={require("./../assets/ram.png")}
          />

          <Text style={styles.memoryLabel}>RAM</Text>
        </Pressable>

        <Pressable onPress={() => handlePress("Memoria Caché")}>
          <Image
            style={styles.memoryImage}
            source={require("./../assets/cache.png")}
          />
          <Text style={styles.memoryLabel}>Caché</Text>
        </Pressable>

        <Pressable onPress={() => handlePress("Memoria Secundaria")}>
          <Image
            style={styles.memoryImage}
            source={require("./../assets/secondary.png")}
          />
          <Text style={styles.memoryLabel}>Disco Duro</Text>
        </Pressable>

        <Pressable onPress={() => handlePress("Registro")}>
          <Image
            style={styles.memoryImage}
            source={require("./../assets/register.jpg")}
          />
          <Text style={styles.memoryLabel}>Registro</Text>
        </Pressable>
      </View>

      <Text style={styles.explanation}>
        Cada tipo de memoria en el almacén tiene una función especial. Algunas
        cajas son muy rápidas pero pequeñas (como la RAM y los Registros),
        mientras que otras son grandes pero más lentas (como el Disco Duro).
        ¡Cada una tiene su propósito en el sistema!
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  memoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  memoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  memoryLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  explanation: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
