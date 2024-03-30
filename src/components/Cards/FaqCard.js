import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

export function FaqCard({ item }) {
  const [orientation, setOrientation] = useState();

  useEffect(() => {
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

  const containerStyle = orientation ? styles.horizontal : styles.vertical;
  const cardStyle = orientation ? styles.cardH : styles.cardV;

  return (
    <View style={containerStyle}>
      <View style={cardStyle}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>
            Usuário: {item.user}
          </Text>
          <Text style={{ fontSize: 16, fontStyle: 'italic' }}>
            {item.date}
          </Text>
        </View>
        <View style={styles.body}>
          <View>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 16,
                color: 'gray',
              }}>
              Pergunta:
            </Text>
            <Text style={styles.text}>{item.question}</Text>
          </View>
          <View>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 16,
                color: 'gray',
              }}>
              Resposta:
            </Text>
            <Text style={styles.text}>{item.answer}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vertical: {
    width: '100%',
  },
  cardH: {
    width: '50%',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#fff',
  },
  cardV: {
    width: '100%',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#fff',
  },
  header: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    height: '80%',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
  },
});

