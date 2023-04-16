import {
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from "../store/productSlice";

const ProductScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.data.products)

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productSlice.actions.setSelectedProdut(item.id))
            navigation.navigate('Product Details')
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    //Make width 100% and aspectRatio 1 make image as responsive
    width: "100%",
    aspectRatio: 1,
  },
  head: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProductScreen;
