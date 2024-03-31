import { View, Text, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import Routes from '../../assets/Routes';
import { useEffect, useState } from 'react';

export function ProductSpecifications({ route }) {
  const { product } = route.params;

  // Pega detalhes e passa para uma array que usando o map vai mostra as especificações, já que cada produto tem nomes diferetes para as especicações.
  const spec = Object.keys(product.technicalSpecifications);
  // console.log(spec);

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
            {
              spec.map((element, key) => (
                <Text key={key} style={style.text}>{product.technicalSpecifications[element]}</Text>
              ))
            }
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
  },
  card: {
    width: '80%',
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
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imagem: {
    width: 400,
    height: 300,
    resizeMode: 'contain'
  },
  title: {
    fontSize: '2em'
  },
  text: {
    fontSize: '1.3em',
    textAlign: 'left',
  }
});

const styleVertical = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  imagem: {
    width: 300,
    height: 200,
    resizeMode: 'center',
  },
  title: {
    fontSize: '2em'
  },
  text: {
    fontSize: '1.3em',
    textAlign: 'left',
  }
});
