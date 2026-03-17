import { FlatList, StyleSheet } from "react-native";
import NewsCard from "./NewsCard";

export default function NewsList({ news }) {
  return (
    <FlatList
      data={news}
      keyExtractor={(item, index) => item.url || String(index)}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <NewsCard item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 16,
    paddingBottom: 30,
  }
});