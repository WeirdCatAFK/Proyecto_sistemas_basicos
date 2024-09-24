import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import ImageButton from './components/ImageButton';

export default function App() {
  const handleClick = () => {
    alert('Image clicked!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistemas Básicos, Arquitectura y Procesamiento</Text>
      <View style={styles.imageContainer}>
        <ImageButton 
          onPress={() => console.log("Button as component")} 
          imageStyle={styles.icon} 
          source={require("./assets/cpu.jpg")}
        />
        <ImageButton 
          onPress={() => console.log("Button as component")} 
          imageStyle={styles.icon} 
          source={require("./assets/inOut.webp")}
        />
        <ImageButton 
          onPress={() => console.log("Button as component")} 
          imageStyle={styles.icon} 
          source={require("./assets/mem.webp")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icon: {
    width: 200,
    height: 200,
  },
});
