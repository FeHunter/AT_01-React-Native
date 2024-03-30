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
        <Text style={style.title}>
          TechMart - Sua Loja de Tecnologia Online
        </Text>
        <Text style={style.text}>
          TechMart é a sua loja de tecnologia online, oferecendo uma ampla variedade de produtos de última geração, desde smartphones e laptops até gadgets inteligentes e acessórios. Navegue em nosso catálogo diversificado, desfrute de ofertas exclusivas e receba seus produtos com conveniência na sua porta. Com políticas flexíveis de devolução e troca e suporte ao cliente dedicado, estamos aqui para tornar sua experiência de compra online simples e satisfatória.
        </Text>
        <Text style={style.footerText}>
          AT_01 - React Native, by Felipe Rodrigues
        </Text>
      </View>
    </View>
  );
}

const styleHorizontal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '80%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 24,
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

const styleVertical = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    width: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 24,
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});
