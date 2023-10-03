import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet, Keyboard } from "react-native";

import Button from "../components/form/Button";
import TextField from "../components/form/TextField";
import IconButton from "../components/form/IconButton";

import Divider from "../components/ui/Divider";
import Wrapper from "../components/layout/Wrapper";

import Nicknames from "../components/Nicknames";

import { defaultStyles } from "../constants/default-styles";
import Chip from "../components/form/Chip";

const Start = () => {
  const [players, setPlayers] = useState(["Honersito", "Tu mamita"]);
  const [player, setPlayer] = useState("");
  const onAdd = useCallback(() => {
    setPlayers((prev) => [...prev, player]);
    setPlayer("");
    Keyboard.dismiss();
  }, [player]);
  const onRemove = (ply) => {
    setPlayers((prev) => prev.filter((player) => player !== ply));
  };
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
      <Nicknames setNames={setPlayers}/>
      <Divider />
      <Button
        title={"COMENZAR EL JUEGO"}
        onPress={() => console.log("start")}
      />
      <Text style={styles.header}>GENTE PULENTA</Text>
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
