import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";

// Services
import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("pokemon?limit=10").then((response) => {
      setProjects(response.data.results);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="blue" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.name}
          renderItem={({ item: pokemon }) => (
            <Text style={styles.title}>{pokemon.name}</Text>
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
  },
});
