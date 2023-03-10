import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      {/* ///images default behavior is to collapse itself unless given a width and heigh  */}
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} stars {ResultsDetail.review_count}Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  container: {
    marginLeft: 15,
  },
});

export default ResultsDetail;
