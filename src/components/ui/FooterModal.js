import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const FooterModal = ({ children, isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={["down"]}
      onSwipeComplete={onClose}
      propagateSwipe
      style={styles.modal}
      backdropOpacity={0.25}
    >
      <View style={styles.modalContent}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 16,
    paddingBottom: 64
  },
});

export default FooterModal;
