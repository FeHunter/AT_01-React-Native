import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useEffect, useState } from 'react';
import { CommentCard } from '../../components/Cards/CommentCard';

export function ProductComentarios({ route }) {
  const { product } = route.params;
  const comentarios = product.comentarios;

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
        Comentários
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={{ width: '100%', height: 800 }}
          data={comentarios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <CommentCard item={item} />;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
