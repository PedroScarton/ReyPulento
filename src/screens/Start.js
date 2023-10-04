import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/form/Button";
import TextField from "../components/form/TextField";
import IconButton from "../components/form/IconButton";

import Divider from "../components/ui/Divider";
import Wrapper from "../components/layout/Wrapper";

import Nicknames from "../components/Nicknames";
import Chip from "../components/form/Chip";

import { defaultStyles } from "../constants/default-styles";

const Start = () => {
  const navigation = useNavigation();
  
  const [players, setPlayers] = useState(["Honersito", "Tu mamita"]);
  const [player, setPlayer] = useState("");

  const onAdd = useCallback(() => {
    Keyboard.dismiss();
    if (player.trim().length === 0) return;
    setPlayers((prev) => [...prev, player]);
    setPlayer("");
  }, [player]);

  const onRemove = (ply) => {
    setPlayers((prev) => prev.filter((player) => player !== ply));
  };

  const onStart = useCallback(() => {
    navigation.navigate("Game");
  }, [players]);

  return (
    <Wrapper>
      <View style={styles.input}>
        <TextField
          placeholder={"AGREGAR UN JUGADOR"}
          onChange={(value) => setPlayer(value)}
          value={player}
        />
        <IconButton icon="add" size={28} onPress={onAdd} />
      </View>
      <Nicknames setNames={setPlayers} />
      <Divider />
      <Button
        title={"COMENZAR EL JUEGO"}
        onPress={onStart}
        disabled={!players.length}
      />
      <Text style={styles.header}>GENTE PULENTA: {players.length}</Text>
      <View style={styles.players}>
        {players.map((ply) => (
          <Chip
            key={`${ply}_${Math.random()}`}
            onPress={() => onRemove(ply)}
            text={ply}
          />
        ))}
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    height: 45,
  },
  header: {
    ...defaultStyles.header,
    textAlign: "center",
  },
  players: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 8,
  },
});

export default Start;
