import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImageButton from "./components/ImageButton";
import Dispositivos from "./pages/InOut";
import Memoria from "./pages/Mem";
import Cpu from "./pages/Cpu";
import Alu from "./pages/Alu";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sistemas Básicos, Arquitectura y Procesamiento
      </Text>
      <View style={styles.imageContainer}>
        <ImageButton
          onPress={() => navigation.navigate("Cpu")}
          imageStyle={styles.icon}
          source={require("./assets/cpu.jpg")}
        />
        <ImageButton
          onPress={() => navigation.navigate("Dispositivos")}
          imageStyle={styles.icon}
          source={require("./assets/inOut.webp")}
        />
        <ImageButton
          onPress={() => navigation.navigate("Memoria")}
          imageStyle={styles.icon}
          source={require("./assets/mem.webp")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Definir pantallas, todas las paginas se definen aqui, incluso las que no cargan desde app.js como en Cpu.js */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cpu" component={Cpu} />
        <Stack.Screen name="Dispositivos" component={Dispositivos} />
        <Stack.Screen name="Memoria" component={Memoria} />
        <Stack.Screen name="Alu" component={Alu} />
      </Stack.Navigator>
    </NavigationContainer>
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
