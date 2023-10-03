import { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "./form/Button";
import IconButton from "./form/IconButton";

import FooterModal from "./ui/FooterModal";

const Settings = ({ goBack }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onOpenModal = useCallback(() => setModalVisible(true), []);
  const onCloseModal = useCallback(() => setModalVisible(false), []);

  const onGoBack = useCallback(() => {
    goBack();
    onCloseModal();
  }, [goBack]);

  const onAddOff = useCallback(() => {
    onCloseModal();
  }, []);

  const onRate = useCallback(() => {
    onCloseModal();
  }, []);

  return (
    <>
      <IconButton
        onPress={onOpenModal}
        icon="settings"
        size={28}
        variant="text"
      />
      <FooterModal isVisible={modalVisible} onClose={onCloseModal}>
        <View style={styles.container}>
          {goBack && <Button title="Volver al inicio" onPress={onGoBack} />}
          <Button title="Desactivar publicidad" onPress={onAddOff} />
          <Button title="Califícanos" onPress={onRate} />
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
