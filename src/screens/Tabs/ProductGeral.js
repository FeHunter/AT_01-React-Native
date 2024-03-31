import { View, Text, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import Routes from '../../assets/Routes';
import { useEffect, useState } from 'react';

export function ProductGeral({ route }) {
  const { product } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Orientação da tela
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? true : false);
    };
    Dimensions.addEventListener('change', updateOrientation);
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  // Orientação da tela
  const [orientation, setOrientation] = useState();
  useEffect(() => {}, []);

  const style = orientation ? styleHorizontal : styleVertical;

  return (
    <View style={style.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={style.card}>
          <View style={style.header}>
            <Text style={style.title}>{product.name}</Text>
          </View>
          <View style={style.body}>
            <Image source={{ uri: product.image }} style={style.imagem} />
            <Text style={style.descricao}>{product.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styleHorizontal = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    height: '90%',
    justifyContent: 'space-around',
  },
  imagem: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: '1.2em',
    textAlign: 'center',
  },
});

const styleVertical = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    height: '90%',
    justifyContent: 'space-around',
  },
  imagem: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: '1.2em',
    textAlign: 'center',
  },
});

