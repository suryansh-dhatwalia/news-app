import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ErrorState from "./components/ErrorState";
import Header from "./components/Header";
import LoadingState from "./components/LoadingState";
import NewsList from "./components/NewsList";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = process.env.NEWS_API;
  const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country&max=10&apikey=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("API Limit Reached or Error");
        return res.json();
      })
      .then((data) => {
        setNews(data.articles || []);
      })
      .catch((err) => {
        setError(err.message || "Could not load news");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <View style={styles.screen}>
      <Header />
      <SafeAreaView style={styles.container}>
        <NewsList news={news} />
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  container: {
    flex: 1,
  }
});