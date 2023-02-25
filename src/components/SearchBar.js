import React from "react";
import { TextInput, View, Button, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChange, onEndEditing }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      {/* <Text>Search bar</Text> */}

      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newTerm) => onChange(newTerm)}
        onEndEditing={() => {
          onEndEditing();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "red",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
