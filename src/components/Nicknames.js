import { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "./form/Button";
import IconButton from "./form/IconButton";
import TextField from "./form/TextField";

import CenteredModal from "./ui/CenteredModal";

import { colors } from "../constants/colors";
import { defaultStyles } from "../constants/default-styles";

const Nicknames = ({ setNames }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [players, setPlayers] = useState("");

  const onClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onConfirm = () => {
    setNames(["a", "b", "c", "d"]);
    setModalVisible(false);
  };

  return (
    <>
      <Button
        onPress={() => setModalVisible(true)}
        title="Generar apodos pulentos"
      />
      <CenteredModal isVisible={modalVisible} onClose={onClose}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text}>Apodos Pulentos</Text>
            <IconButton
              icon="close"
              variant="text"
              color={colors.black}
              onPress={onClose}
              size={24}
            />
          </View>
          <View style={styles.input}>
            <TextField
              placeholder={"NÚMERO DE JUGADORES"}
              onChange={(value) => setPlayers(value)}
              value={players}
            />
          </View>
          <View style={styles.controls}>
            <View style={styles.btnContainer}>
              <Button
                title="Cancelar"
                onPress={onClose}
                variant="text"
                textColor={colors.black}
              />
            </View>
            <View style={styles.btnContainer}>
              <Button title="Ver anuncio" onPress={onConfirm} />
            </View>
          </View>
        </View>
      </CenteredModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  text: {
    ...defaultStyles.header,
    color: colors.black,
    flex: 1,
  },
  controls: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  btnContainer: {
    flex: 1,
  },
  input: {
    height: 45,
  },
});

export default Nicknames;
