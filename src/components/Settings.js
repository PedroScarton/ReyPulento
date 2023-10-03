import { useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "./form/Button";
import IconButton from "./form/IconButton";

import FooterModal from "./ui/FooterModal";

const Settings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <IconButton
        onPress={() => setModalVisible(true)}
        icon="settings"
        size={28}
        variant="text"
      />
      <FooterModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <View style={styles.container}>
          <Button
            title="Desactivar publicidad"
            onPress={() => console.log("desactivar publicidad")}
          />
          <Button
            title="Califícanos"
            onPress={() => console.log("calificar")}
          />
        </View>
      </FooterModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

export default Settings;
