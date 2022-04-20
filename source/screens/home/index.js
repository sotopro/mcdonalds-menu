import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Header } from "../../components/index";
import Logo from "../../../assets/images/logo-mcdonalds.png";
import { styles } from "./styles";
import { homeService } from "../../services/index";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    homeService
      .getData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.warn("Home", data);
  return (
    <View style={styles.container}>
      <Header image={Logo} />
    </View>
  );
};

export default Home;
