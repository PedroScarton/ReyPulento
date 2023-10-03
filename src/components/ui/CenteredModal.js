import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../constants/colors";

const CenteredModal = ({ children, isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.25}
      style={styles.modal}
    >
      <View style={styles.modalContent}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-start",
    margin: 0,
    marginTop: 150,
    paddingHorizontal: 16,
  },
  modalContent: {
    backgroundColor: colors.gray,
    borderRadius: 16,
    padding: 16,
  },
});

export default CenteredModal;
