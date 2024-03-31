import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Routes from '../../assets/Routes';
import { useEffect, useState } from 'react';

export function ProductSeller ({ route }) {
  const { product } = route.params;
  
  // Loading...
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <View style={{ width: '100%', height: '100%' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>{product.vendorData.name}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.descricao}>{product.vendorData.phone}</Text>
            <Text style={styles.descricao}>{product.vendorData.email}</Text>
            <Text style={styles.descricao}>Nota: {product.vendorData.rating}/5</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    flex: 3,
    justifyContent: 'space-around',
    paddingVertical: 10,
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
