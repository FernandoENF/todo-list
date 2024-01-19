import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    gap: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  checkbox: {
    borderColor: "#4EA8DE",
    borderRadius: 999,
    height: 17.5,
    width: 17.5,
  },
  text: {
    flex: 1,
    color: "#F2F2F2",
  },
  textChecked: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  button: {
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
});
