import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

export function About() {
  // Orientação da tela
  const [orientation, setOrientation] = useState();
  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? true : false);
    };
    Dimensions.addEventListener('change', updateOrientation);
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  const style = orientation ? styleHorizontal : styleVertical;

  return (
    <View style={style.container}>
      <View style={style.card}>
        <Text style={style.text}>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem{' '}
        </Text>
        <Text style={style.text}>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem
        </Text>
        <Text style={style.text}>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        </Text>
        <Text style={style.text}>
          AT_01 - React Native, by Felipe Rodrigues
        </Text>
      </View>
    </View>
  );
}

const styleHorizontal = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '60%',
    height: '100%',
  },
  text: {
    marginVertical: 10,
    fontSize: 18,
  },
});

const styleVertical = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
  },
  card: {
    width: '100%'
  },
  text: {
    marginVertical: 10,
    fontSize: 18,
  },
});
