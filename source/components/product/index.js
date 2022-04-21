import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";

const Product = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.containerProduct}
      onPress={() => onPress(item)}
    >
      <Image
        source={{ uri: item.url }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text numberOfLines={2} style={styles.text}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Product;
