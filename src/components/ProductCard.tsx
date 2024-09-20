import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../features/productSlice';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignItems: 'center', 
      },
      image: {
        width: 100, 
        height: 100, 
        borderRadius: 10,
        marginRight: 10,
        resizeMode: 'contain', 
      },
      detailsContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },
      price: {
        fontSize: 14,
        color: '#FF6347',
      },
});

export default ProductCard;