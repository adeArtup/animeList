import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";

export default class Home extends React.Component {
  state = { nickname: "", err: "Harus diisi" };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wrapper, styles.inner]}>
          <Image
            source={require("../assets/kaneki.jpg")}
            style={styles.backgroundImage}
          />
          <View style={styles.content}>
            <View style={styles.conS}>
              <View style={styles.vCen}>
                <Text style={{ width: "100%", fontSize: 18 }}>
                  Anda bosan dengan seringnya WFH?
                </Text>
                <Text style={{ width: "100%", fontSize: 16 }}>
                  Disini kalian bisa mencari anime genre action untuk ditonton
                  ketika WFH
                </Text>
              </View>
              <View style={styles.vCol}>
                <Input
                  name="nickname"
                  onChangeText={(nickname) => this.setState({ nickname })}
                  placeholder="Tuliskan nama panggilanmu"
                />
                {!!this.state.err && (
                  <Text name="nickname" style={{ color: "red" }}>
                    {this.state.err}
                  </Text>
                )}
              </View>
              <View style={styles.vRow}>
                <View style={styles.conBtn}>
                  <Button
                    color="#222"
                    title="Ikimashou"
                    onPress={() =>
                      this.props.navigation.navigate("List Action Anime", {
                        nickname: this.state.nickname,
                      })
                    }
                  ></Button>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.wrapper, styles.footer]}>
          <View>
          <Text >Powered By AdeArtup</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // or 'stretch'
  },
  container: {
    flex: 1,
    backgroundColor: "#ff7657",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 2,
  },
  menuBar1: {
    width: "100%",
    height: 370,
    marginTop: 1,
  },
  inner: {
    flex: 10,
    padding: 8,
    justifyContent: "flex-end",
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 8,
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
  },
  conS: {
    flex: 1,
    width: "95%",
    padding: 8,
    flexDirection: "column",
    backgroundColor: "#ff7657",
    justifyContent: "center",
    marginLeft:18,
    marginBottom:18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  footer: {
    flex: 0.5,
    backgroundColor: "#ff7657",
    flexDirection:"row",
    justifyContent: "center",
  },
  vRow: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  vCol: {
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  vCen: {
    width: "100%",
  },
  conBtn: {
    width: "50%",
    // flexDirection: "row",
    justifyContent: "center",
  },
});
