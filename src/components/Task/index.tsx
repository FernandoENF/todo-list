import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import TrashIcon from "../../../assets/trashIcon.svg";

export interface TaskType {
  done: boolean;
  text: string;
}

interface TaskProps {
  task: TaskType;
  onRemove: () => void;
  onCheck: () => void;
}

export function Task({ task, onRemove, onCheck }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={task.done}
        onValueChange={onCheck}
        color={task.done ? "#5E60CE" : undefined}
      />
      <Text style={task.done ? styles.textChecked : styles.text}>
        {task.text}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
}
