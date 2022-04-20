import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

const Header = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default Header;
