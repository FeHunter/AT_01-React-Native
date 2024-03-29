import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Routes from '../../assets/Routes';
import { useEffect, useState } from 'react';

import ProductAux  from '../../assets/Products';

export function ProductSeller ({ route }) {
  const { product } = route.params;
  const AuxiliarVen = ProductAux;
  console.log(AuxiliarVen);

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
            <Text style={styles.title}>Cybersecurity Solutions</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.descricao}>(XX) XXXX-XXXX</Text>
            <Text style={styles.descricao}>sales@cybersecuritysolutions.com</Text>
            <Text style={styles.descricao}>4.9/5</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: '60%',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
  },
  descricao: {
    fontSize: 18,
    textAlign: 'center',
  },
});
