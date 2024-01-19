import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },
  logo: {
    marginTop: 70,
    marginBottom: 70,
  },
  content: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
  },
  form: {
    flexDirection: "row",
    marginTop: -30,
    marginBottom: 32,
    gap: 4,
  },
  input: {
    backgroundColor: "#262626",
    borderRadius: 6,
    padding: 16,
    color: "#F2F2F2",
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoCounter: {
    backgroundColor: "#333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  infoCounterNumber: {
    fontWeight: "700",
    color: "#D9D9D9",
  },
  infoStat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tasksCreatedText: {
    fontWeight: "700",
    color: "#4EA8DE",
  },
  tasksDoneText: {
    fontWeight: "700",
    color: "#8284FA",
  },
  emptyComponent: {
    borderTopWidth: 1,
    borderTopColor: "#333",
    alignItems: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
    gap: 16,
  },
  emptyComponentTitle: {
    color: "#808080",
    fontWeight: "bold",
    textAlign: "center",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    textAlign: "center",
  },
});
