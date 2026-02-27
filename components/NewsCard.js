import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function NewsCard({ article, onSummary }) {
  return (
    <View style={styles.card}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}

      <Text style={styles.title}>{article.title}</Text>

      <Text style={styles.meta}>
        {article.source.name} • {new Date(article.publishedAt).toLocaleTimeString()}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onSummary}>
        <Text style={styles.buttonText}>AI Summary</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  meta: {
    color: "#aaa",
    fontSize: 12,
    marginVertical: 6,
  },
  button: {
    backgroundColor: "#2e86de",
    padding: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});