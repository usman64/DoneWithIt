import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDelete from "../components/lists/ListItemDelete";

const initialMessages = [
  {
    id: 1,
    title: "Usman Tariq",
    description:
      "D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Usman Tariq",
    description: "D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);

    //Delete from server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.title)}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={(props) => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
