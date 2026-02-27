import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";

export default function SummaryModal({ visible, article, onClose }) {
  if (!article) return null;

  const mockSummary = `
• Market reacts to latest financial developments.
• Investors closely watching stock & crypto trends.
• Analysts predict short-term volatility.
  `;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>AI Summary</Text>
          <Text style={styles.summary}>{mockSummary}</Text>

          <TouchableOpacity style={styles.close} onPress={onClose}>
            <Text style={{ color: "#fff" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  summary: {
    color: "#ccc",
    marginBottom: 20,
  },
  close: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
});