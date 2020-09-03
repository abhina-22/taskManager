import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import SideMenu from "react-native-side-menu";

class Home extends React.Component {
  state = {
    users: [],
    loading: true
  };
  componentDidMount() {
    this.getUsers();
  }
  async getUsers() {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const { results } = await res.json();
    this.setState({ users: [...results], loading: false });
  }

  render() {
    const menu = <div navigator={navigator} />;
    return (
      <View>
        <SideMenu menu={menu} menuPosition="left">
          <Text>Welcome to React Native!</Text>
          <Text>To get started, edit index.ios.js</Text>
          <Text>LaLa</Text>
        </SideMenu>
        <ScrollView style={styles.container}>
          <View style={{ padding: "8%" }}>
            <div>Home</div>
            <div>Tasks Due Soon</div>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    width: "80%"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
