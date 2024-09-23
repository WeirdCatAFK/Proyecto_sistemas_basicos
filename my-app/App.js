import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistemas Básicos, Arquitectura y Procesamiento</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Button 1" 
            onPress={() => alert('Button 1 pressed')} 
            icon={<Image source={'assets/inOut.pnh'} style={styles.icon} />}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Button 2" 
            onPress={() => alert('Button 2 pressed')} 
            icon={<Image source={'assets/mem.webp'} style={styles.icon} />}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Button 3" 
            onPress={() => alert('Button 3 pressed')} 
            icon={<Image source={'assets/cpu.webp'} style={styles.icon} />}
          />
        </View>
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
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
