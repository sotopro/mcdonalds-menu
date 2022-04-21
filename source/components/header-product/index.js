import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const HeaderProduct = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};
export default HeaderProduct;
