import React from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CustomModal = ({ visible, onRequestClose, children, setModal }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => onRequestClose()}
    >
      <TouchableOpacity
        style={styles.content}
        onPress={() => setModal(!visible)}
      >
        {children}
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModal;
