import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { Video } from "expo-av";
import * as Print from "expo-print";
import { Asset } from "expo-asset";

const DisSalida = () => {
  const [videoVisible, setVideoVisible] = useState(false); // Estado para controlar la visibilidad del video

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./../assets/sound.mp3") // Cambia este archivo a tu sonido
    );
    await sound.playAsync();
  };

  const showVideo = () => {
    setVideoVisible(true); // Mostrar video cuando se presiona el botón
  };

  const printPdf = async () => {
    const pdfAsset = Asset.fromModule(require("./../assets/sample.pdf")); // Cambia este archivo a tu PDF
    await Print.printAsync({
      uri: pdfAsset.localUri || pdfAsset.uri,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispositivos de Salida</Text>

      <Button title="Reproducir Sonido" onPress={playSound} />

      <View style={styles.videoContainer}>
        <Button title="Reproducir Video" onPress={showVideo} />
        {videoVisible && (
          <Video
            source={require("./../assets/video.mp4")} // Cambia este archivo a tu video
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={{ width: 300, height: 200 }}
          />
        )}
      </View>

      <Button title="Imprimir PDF" onPress={printPdf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  videoContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default DisSalida;
