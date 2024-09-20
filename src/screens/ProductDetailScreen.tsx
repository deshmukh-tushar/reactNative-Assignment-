import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';


type Props = {
    route: RouteProp<RootStackParamList, 'ProductDetail'>; // Type the route prop
  };

const ProductDetailScreen: React.FC = ({ route }: any) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    Alert.alert('Success', 'Product added to cart');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} color="#FF6347" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9F9F9', 
        alignItems: 'center',
      },
      image: {
        width: '100%', 
        height: 300, 
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#EAEAEA', 
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333', 
      },
      price: {
        fontSize: 20,
        color: '#FF6347', 
         marginBottom: 10,
      },
      description: {
        fontSize: 16,
        color: '#666', 
        marginBottom: 20,
        textAlign: 'center', 
     },
});

export default ProductDetailScreen;