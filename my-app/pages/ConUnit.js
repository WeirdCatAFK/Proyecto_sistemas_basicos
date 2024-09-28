import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const ConUnit = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Unidad de Control de un Procesador</Text>
      <Text style={styles.text}>
        La Unidad de Control (Control Unit) es una parte fundamental de un
        procesador. Se encarga de dirigir el flujo de información entre los
        diferentes componentes del sistema y coordinar las operaciones que deben
        realizarse.
      </Text>
      <Text style={styles.text}>
        Funciona mediante la interpretación de las instrucciones almacenadas en
        la memoria, decodificándolas y enviando señales a las demás unidades,
        como la Unidad Aritmético Lógica (ALU), para que ejecuten las
        operaciones adecuadas. Estas señales controlan cuándo los datos se deben
        mover entre los registros, memoria y otros componentes.
      </Text>
      <Text style={styles.text}>
        En resumen, la Unidad de Control se encarga de:
      </Text>
      <Text style={styles.listItem}>
        • Decodificar instrucciones desde la memoria.
      </Text>
      <Text style={styles.listItem}>
        • Enviar señales de control a las otras partes del procesador.
      </Text>
      <Text style={styles.listItem}>
        • Coordinar el movimiento de datos entre registros y memoria.
      </Text>
      <Text style={styles.text}>
        Gracias a esta coordinación, el procesador puede ejecutar instrucciones
        de forma secuencial y eficiente.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
    lineHeight: 22,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
    marginLeft: 20,
  },
});

export default ConUnit;
