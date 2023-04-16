import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const shoppingHeader = () => (
  <View style={styles.headContainer}>
    <Text style={styles.headText}>Cart</Text>
  </View>
)

const shoppinFooter = () => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>SubTotal</Text>
      <Text style={styles.text}>410,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>410,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.total}>Total</Text>
      <Text style={styles.total}>410,00 US$</Text>
    </View>
  </View>
)

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppinFooter}
      />
      <Pressable style={styles.button} onPress={() => addToCard()}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  total: {
    fontSize: 18,
    fontWeight: '500'
  },
  button:{
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'black',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16
  },
  headContainer:{
    paddingTop: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  headText:{
    fontSize: 30,
    color: 'white',
    marginVertical: 10
    }
});

export default ShoppingCart;
