import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { FaqCard } from '../../components/Cards/FaqCard';

export function ProdcutFaq({ route }) {
  const { product } = route.params;
  const duvidas = product.questions;
  
  // Loading...
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 10 }}>
        Dúvidas
      </Text>
      { isLoading ? <ActivityIndicator size="large" color="#0000ff" />
        :
        <FlatList
        data={duvidas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <FaqCard item={item} />
        }}
      />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
