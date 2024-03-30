import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ProductCard } from '../components/Product/ProductCard';
import { SearchBar } from '../components/Search/SearchBar';

import ProductsList from '../assets/Products';

export function ProductList({ navigation }) {

  const [orientation, setOrientation] = useState(false);

  const [products, setProducts] = useState(ProductsList);
  const [searchTerm, setSearchTerm] = useState('');
  const [pickerFilter, setpickerFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  function getSearchTerm(term) {
    setSearchTerm(term);
  }

  function clearSearchTerm() {
    setSearchTerm('');
  }

  function getPickerFilter(term) {
    setpickerFilter(term);
  }

  function filter() {
    let updateList = [...products];
    // Pesquisa por name ou descrição
    updateList = updateList.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });
    // Ordem conforme o picker selection
    if (pickerFilter === 'Ordem Crescente') {
      updateList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (pickerFilter === 'Ordem Decrescente') {
      updateList.sort((a, b) => b.name.localeCompare(a.name));
    }
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={updateList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <ProductCard product={item} navigation={navigation} />;
        }}
        horizontal={orientation}
      />
    );
  }

  let showList =
    products.length > 0 &&
    searchTerm.length === 0 &&
    pickerFilter === 'Sem Filtro' ? (
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <ProductCard product={item} navigation={navigation} />;
        }}
        horizontal={orientation}
      />
    ) : (
      filter()
    );

  return (
    <View style={styles.container}>
      <SearchBar
        getSearchTerm={getSearchTerm}
        getPickerFilter={getPickerFilter}
        clearTerm={clearSearchTerm}
      />
      <View style={styles.listContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          showList
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  list: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

