import { StatusBar, StyleSheet, Text, View } from "react-native";
import Stack from "./Src/Routes/Stack";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
