import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: 51,
    width: "100%",
    height: 213,
  },
  containerName: {
    marginTop: 28,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 28,
    paddingVertical: 7,
    paddingHorizontal: 25,
  },
  price: {
    color: "#000000",
    fontSize: 16,
  },
  containerDescription: {
    marginTop: 28,
    marginHorizontal: 30,
  },
  description: {
    fontSize: 16,
    color: "#000000",
    lineHeight: 21.5,
    textAlign: "center",
  },
});
