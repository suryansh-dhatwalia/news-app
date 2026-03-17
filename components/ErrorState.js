import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function ErrorState({ message }) {
  return (
    <SafeAreaView style={styles.center}>
      <Text>{message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});