import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import storeS from "./redux/store";
import ListA from "./screen/List";
import Home from "./screen/Home";
import Detail from "./screen/Detail";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    num: 0,
  };

  render() {
    const createHomeStack = () => (
      <Stack.Navigator>
        <Stack.Screen name="Home | All Action Anime" component={Home} />
        <Stack.Screen name="List Action Anime" component={ListA} />
        <Stack.Screen name="Detail Action Anime" component={Detail} />
      </Stack.Navigator>
    );

    return (
            <Provider store={storeS}>
              <NavigationContainer>
                <Drawer.Navigator>
                  <Drawer.Screen name="Anime" children={createHomeStack} />
                </Drawer.Navigator>
              </NavigationContainer>
              </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7657",
    flexDirection: "column",
  },
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
  },
  menuBar1: {
    width: "30%",
    backgroundColor: "#ebebeb",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  menuBar2: {
    width: "40%",
    backgroundColor: "#ebebeb",
    textAlign: "center",
    padding: 8,
  },
  txtLogo: {
    fontSize: 20,
    fontStyle: "Bold",
  },
  menuBar3: {
    width: "30%",
    backgroundColor: "#ebebeb",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  inner: {
    flex: 10,
    justifyContent: "space-around",
    padding: 8,
  },
  content: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  footer: {
    flex: 0.5,
    backgroundColor: "#f9f9f9",
  },
});
