import { Linking, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function NewsCard({ item }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => item.url && Linking.openURL(item.url)}
      activeOpacity={0.8}
    >
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.source}>{item.source?.name}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.date}>
            {new Date(item.publishedAt).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  placeholder: {
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#9CA3AF",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 24,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  source: {
    fontSize: 13,
    fontWeight: "700",
    color: "#2563EB",
  },
  dot: {
    marginHorizontal: 8,
    color: "#D1D5DB",
  },
  date: {
    fontSize: 12,
    color: "#6B7280",
  },
});