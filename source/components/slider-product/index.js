import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import Product from "../product/index";

const SliderProduct = ({ data, onPress }) => {
  const renderItem = ({ item }) => <Product item={item} onPress={onPress} />;

  const keyExtractor = (item, index) => `${item.name}-${index}`;

  const listEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No data</Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={listEmptyComponent}
    />
  );
};

export default SliderProduct;
