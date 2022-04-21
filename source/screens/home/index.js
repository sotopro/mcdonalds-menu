import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import {
  Header,
  SliderProduct,
  HeaderProduct,
  ProductDetail,
  CustomModal,
} from "../../components/index";
import Logo from "../../../assets/images/logo-mcdonalds.png";
import { styles } from "./styles";
import { homeService } from "../../services/index";

const Home = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});
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
    setDetails(item);
    setModal(!modal);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <ScrollView style={styles.container}>
      <Header image={Logo} />
      {data?.length > 0
        ? data.map((item, index) => (
            <View key={`${item.name}-index`}>
              <HeaderProduct item={item} />
              <SliderProduct data={item.data} onPress={productDetail} />
            </View>
          ))
        : null}
      <CustomModal
        visible={modal}
        onRequestClose={handleModal}
        setModal={setModal}
      >
        <ProductDetail item={details} />
      </CustomModal>
    </ScrollView>
  );
};

export default Home;
