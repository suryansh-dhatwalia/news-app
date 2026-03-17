import { ActivityIndicator, StyleSheet, Text, SafeAreaView } from "react-native";

export default function LoadingState() {
  return (
    <SafeAreaView style={styles.center}>
      <ActivityIndicator size="large" />
      <Text style={styles.smallText}>Loading...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  },
  smallText: {
    fontSize: 14,
    color: "#555"
  }
});