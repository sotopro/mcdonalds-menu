import React, { useEffect, useState } from "react";
import {
  View,
  SectionList,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Header } from "../../components/index";
import Logo from "../../../assets/images/logo-mcdonalds.png";
import { styles } from "./styles";
import { homeService } from "../../services/index";

const Home = () => {
  const [data, setData] = useState([]);
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

  return (
    <ScrollView style={styles.container}>
      <Header image={Logo} />
      {data?.length > 0 &&
        data.map((item, index) => (
          <View key={`${item.name}-index`}>
            <View style={{ marginHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
            </View>
            <FlatList
              horizontal
              data={item.data}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, section }) => (
                <View
                  style={{
                    width: 140,
                    height: 140,
                    borderColor: "#D8D8D8",
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 8,
                    marginLeft: 21,
                    marginTop: 20,
                  }}
                >
                  <Image
                    source={{ uri: item.url }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      marginHorizontal: 20,
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => `${item.name}-${index}`}
            />
          </View>
        ))}
    </ScrollView>
  );
};

export default Home;
