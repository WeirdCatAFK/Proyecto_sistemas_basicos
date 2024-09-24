import { Image, Pressable, StyleSheet } from 'react-native';

export default function ImageButton({ onPress, source, imageStyle }) {
  return (
      <Pressable
      onPress={onPress} 
      style={( { pressed } ) => {
        return [styles.row, pressed ? styles.pressed : styles.notPressed]
        }}>
        <Image style={imageStyle} source={source} />
      </Pressable>
  );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    },
    notPressed: {
        opacity: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});