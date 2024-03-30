import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../assets/Routes';

// Tabs Screens
import { ProductSpecifications } from './Tabs/ProductSpecifications';
import { ProductGeral } from './Tabs/ProductGeral';
import { ProductComentarios } from './Tabs/ProductComentarios';
import { ProdcutFaq } from './Tabs/ProductFaq';
import { ProductSeller } from './Tabs/ProductSeller';

export function ProductDetails({ route }) {
  const { product } = route.params;

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={Routes.productGeral}
          component={ProductGeral}
          initialParams={{ product: product }}
        />
        <Tab.Screen
          name={Routes.specifications}
          component={ProductSpecifications}
          initialParams={{ product: product }}
        />
        <Tab.Screen
          name={Routes.seller}
          component={ProductSeller}
          initialParams={{ product: product }}
        />
        <Tab.Screen
          name={Routes.comments}
          component={ProductComentarios}
          initialParams={{ product: product }}
        />
        <Tab.Screen
          name={Routes.faq}
          component={ProdcutFaq}
          initialParams={{ product: product }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
