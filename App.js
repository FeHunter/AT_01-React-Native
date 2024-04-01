import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/assets/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Drawer menu
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Stack Screens
import { ProductList } from './src/screens/ProductList';

// Tab Screens
import { ProductDetails } from './src/screens/ProductDetails';

// Drawer
import { About } from './src/screens/About';

export default function App() {
  const Stack = createStackNavigator();

  const StackNav = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.products}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {height: 30},
          headerTitleStyle: { fontSize: '1.3em' }
          }}
        >
        <Stack.Screen name={Routes.products} component={ProductList} />
        <Stack.Screen name={Routes.details} component={ProductDetails} />
      </Stack.Navigator>
    );
  };

  const DrawerNav = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Drawer.Screen name="TechMart" component={StackNav} />
        <Drawer.Screen name="Sobré nós" component={About} />
      </Drawer.Navigator>
    );
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
