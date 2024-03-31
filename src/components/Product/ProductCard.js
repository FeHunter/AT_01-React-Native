import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Routes from '../../assets/Routes';

export function ProductCard({ product, navigation }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate(Routes.details, { product: product })}>
      <View style={styles.header}>
        <Text style={styles.title}>{product.name}</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: product.image }} style={styles.imagem} />
        <Text>{product.descricao}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 350,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    margin: 20,
  },
  header: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    height: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: '1.3em',
    fontWeight: 'bold',
  },
});

