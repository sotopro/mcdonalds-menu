import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { Header, SliderProduct, HeaderProduct } from "../../components/index";
import Logo from "../../../assets/images/logo-mcdonalds.png";
import { styles } from "./styles";
import { homeService } from "../../services/index";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    homeService
      .getMenus()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const productDetail = (item) => {
    setSelectedProduct(item);
  };

  return (
    <ScrollView style={styles.container}>
      <Header image={Logo} />
      {data?.length > 0 &&
        data.map((item, index) => (
          <View key={`${item.name}-index`}>
            <HeaderProduct item={item} />
            <SliderProduct data={item.data} onPress={productDetail} />
          </View>
        ))}
    </ScrollView>
  );
};

export default Home;
