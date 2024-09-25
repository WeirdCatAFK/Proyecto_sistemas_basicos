import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const ALUCalculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [carryIn, setCarryIn] = useState(0);
  const [result, setResult] = useState(null);
  const [carryOut, setCarryOut] = useState(0);

  const handleOperation = (operation) => {
    let res = 0;
    let carryOut = 0;

    switch (operation) {
      case "ADD":
        res = a + b;
        carryOut = res > 255 ? 1 : 0; // Assuming 8-bit numbers
        res = res & 0xff; // Limiting to 8 bits
        break;
      case "ADD_WITH_CARRY":
        res = a + b + carryIn;
        carryOut = res > 255 ? 1 : 0;
        res = res & 0xff;
        break;
      case "SUB":
        res = a - b;
        carryOut = res < 0 ? 1 : 0;
        res = res & 0xff;
        break;
      case "SUB_WITH_BORROW":
        res = a - b - carryIn;
        carryOut = res < 0 ? 1 : 0;
        res = res & 0xff;
        break;
      case "INCREMENT":
        res = a + 1;
        res = res & 0xff;
        break;
      case "DECREMENT":
        res = a - 1;
        res = res & 0xff;
        break;
      case "PASS_THROUGH_A":
        res = a;
        break;
      case "PASS_THROUGH_B":
        res = b;
        break;
      case "TWO'S_COMPLEMENT":
        res = (~a + 1) & 0xff;
        break;
      default:
        res = 0;
        break;
    }

    setResult(res);
    setCarryOut(carryOut);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALU Calculator</Text>

      <View style={styles.inputContainer}>
        <Text>A:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={a.toString()}
          onChangeText={(value) => setA(parseInt(value) || 0)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>B:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={b.toString()}
          onChangeText={(value) => setB(parseInt(value) || 0)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Carry In:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={carryIn.toString()}
          onChangeText={(value) => setCarryIn(parseInt(value) || 0)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => handleOperation("ADD")} />
        <Button title="Add with Carry" onPress={() => handleOperation("ADD_WITH_CARRY")} />
        <Button title="Subtract" onPress={() => handleOperation("SUB")} />
        <Button title="Subtract with Borrow" onPress={() => handleOperation("SUB_WITH_BORROW")} />
        <Button title="Increment" onPress={() => handleOperation("INCREMENT")} />
        <Button title="Decrement" onPress={() => handleOperation("DECREMENT")} />
        <Button title="Pass Through A" onPress={() => handleOperation("PASS_THROUGH_A")} />
        <Button title="Pass Through B" onPress={() => handleOperation("PASS_THROUGH_B")} />
        <Button title="Two's Complement" onPress={() => handleOperation("TWO'S_COMPLEMENT")} />
      </View>

      <Text style={styles.resultText}>Result: {result !== null ? result : "N/A"}</Text>
      <Text style={styles.resultText}>Carry Out: {carryOut}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 100,
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
});

export default ALUCalculator;
