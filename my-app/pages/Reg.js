import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const CpuRegisters = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registros de la CPU</Text>

      <Text style={styles.subtitle}>PC (Program Counter)</Text>
      <Text style={styles.text}>
        El Contador de Programa (PC, Program Counter) es un registro que almacena la dirección de la próxima instrucción que debe ejecutarse en el procesador. Cada vez que se ejecuta una instrucción, el valor del PC se incrementa para apuntar a la siguiente instrucción en la secuencia.
      </Text>

      <Text style={styles.subtitle}>IR (Instruction Register)</Text>
      <Text style={styles.text}>
        El Registro de Instrucción (IR, Instruction Register) es el registro donde se almacena la instrucción actualmente en ejecución. Después de que el PC apunta a la dirección de la próxima instrucción, esta se carga en el IR para ser decodificada y ejecutada.
      </Text>

      <Text style={styles.subtitle}>MAR (Memory Address Register)</Text>
      <Text style={styles.text}>
        El Registro de Dirección de Memoria (MAR, Memory Address Register) contiene la dirección de memoria desde o hacia la cual se va a leer o escribir. Sirve como una especie de puntero que indica la ubicación de la memoria donde se realizará la operación.
      </Text>

      <Text style={styles.subtitle}>MDR (Memory Data Register)</Text>
      <Text style={styles.text}>
        El Registro de Datos de Memoria (MDR, Memory Data Register) almacena los datos que se van a transferir hacia o desde la memoria. Cuando se lee desde la memoria, los datos se cargan en el MDR antes de ser procesados. Cuando se escribe en la memoria, los datos se guardan temporalmente en el MDR antes de ser transferidos.
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
    marginBottom: 15,
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
    color: "#444",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
    lineHeight: 22,
  },
});

export default CpuRegisters;
