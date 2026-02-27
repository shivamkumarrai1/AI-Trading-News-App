import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  StyleSheet,
  StatusBar,
} from "react-native";
import NewsCard from "./components/NewsCard";
import SummaryModal from "./components/SummaryModal";
import { SafeAreaView } from "react-native-safe-area-context";

const API_KEY = "b19acd5fcd474fd794134345c620cb11";

export default function App() {
  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=business&pageSize=10&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchNews();
    setRefreshing(false);
  };

  const handleSummary = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>AI Trading News</Text>

      <FlatList
  style={{ flex: 1 }}
  data={news}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <NewsCard article={item} onSummary={() => handleSummary(item)} />
  )}
  refreshing={refreshing}
  onRefresh={onRefresh}
/>

      <SummaryModal
        visible={modalVisible}
        article={selectedArticle}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    padding: 16,
  },
});