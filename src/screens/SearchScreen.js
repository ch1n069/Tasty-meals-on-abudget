import React from "react";
import { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import "react-native-url-polyfill/auto";
import useResults from "../hooks/useResults"; //hooks
import ResultList from "../components/ResultList";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    //price === "$"
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onChange={setTerm}
        onEndEditing={() => {
          searchApi(term);
        }}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>{results.length}</Text>
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} title="Bit pricier" />
        <ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
