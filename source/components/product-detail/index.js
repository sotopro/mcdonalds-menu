import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProductDetail = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <View style={styles.containerName}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.price}>${item.price}</Text>
      </TouchableOpacity>
      <View style={styles.containerDescription}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetail;
