import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImageButton from "./components/ImageButton";
import Dispositivos from "./pages/InOut";
import Memoria from "./pages/Mem";
import Cpu from "./pages/Cpu";
//Unidad de procesamiento
import Alu from "./pages/Alu";
import ConUnit from "./pages/ConUnit";
import Reg from "./pages/Reg";
//Dispositivos de entrada y salida
import DisEntrada from "./pages/DisEntrada";
import DisSalida from "./pages/DisSalida";


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sistemas Básicos, Arquitectura y Procesamiento
      </Text>
      <View style={styles.imageContainer}>
        <Text>Unidad de procesamiento</Text>
        <ImageButton
          onPress={() => navigation.navigate("Cpu")}
          imageStyle={styles.icon}
          source={require("./assets/cpu.jpg")}
        />
        <Text>Dispositivos de entrada y de salida</Text>

        <ImageButton
          onPress={() => navigation.navigate("Dispositivos")}
          imageStyle={styles.icon}
          source={require("./assets/inOut.webp")}
        />
        <Text>Unidad de memoria</Text>

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
        {/*CPU components */}
        <Stack.Screen name="Alu" component={Alu} />
        <Stack.Screen name="ConUnit" component={ConUnit} />
        <Stack.Screen name="Reg" component={Reg} />
        {/*Entrada y salida*/}
        <Stack.Screen name="DisEntrada" component={DisEntrada} />
        <Stack.Screen name="DisSalida" component={DisSalida} />
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
