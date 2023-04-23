import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.data.selectedProduct);
  const dispatch = useDispatch();

  // Get the Device Width and Height
  const { width } = useWindowDimensions();

  const addToCard = () => {
    dispatch(cartSlice.actions.addCartItem({product}));
  };
  
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to Card */}
      <Pressable style={styles.button} onPress={() => addToCard()}>
        <Text style={styles.buttonText}>Add to Card</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "black",
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
