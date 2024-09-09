import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const LandingPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Button title="Entrada/salida" onPress={() => console.log('Entrada/salida button pressed')} />
            <Button title="Unidad de procesamiento" onPress={() => console.log('Unidad de procesamiento button pressed')} />
            <Button title="Unidad de memoria" onPress={() => console.log('Unidad de memoria button pressed')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LandingPage;