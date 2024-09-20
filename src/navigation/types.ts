
export type RootStackParamList = {
    ProductList: undefined; // No parameters for ProductList
    ProductDetail: { product: Product }; // Define parameters for ProductDetail
  };
  
  // Define your Product type if you haven't already
  export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    // Add any other fields you need
  }