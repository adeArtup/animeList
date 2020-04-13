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
import { connect } from "react-redux";
import { fetchAnimeAction } from "./../redux/action";

class List extends Component {
  componentDidMount() {
    this.props.fetchAnimeAction();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wrapper, styles.header]}>
                <Text style={styles.txtLogo}>Hello, {this.props.route.params['nickname']}-san</Text>
        </View>
        <View style={[styles.wrapper, styles.inner]}>
          <View style={styles.content}>
            <ScrollView>
              {this.props.animeL.map((data) => {
                return (
                  <View style={styles.menuBar1}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: data["image_url"],
                      }}
                    />
                    <Text style={styles.txtLogo}>{data["title"]}</Text>
                    <View style={styles.btnView}>
                    <Button
                      title="View"
                      onPress={() =>
                        this.props.navigation.navigate("Detail Action Anime", {
                          name: data["title"],
                          nickname: this.props.route.params['nickname']
                        })
                      }
                      
                    ></Button>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View style={[styles.wrapper, styles.footer]}>
            <Text>Powered By AdeArtup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7657",
    flexDirection: "column",
    justifyContent: "center",
  },
  tinyLogo: {
    width: "100%",
    position: 'absolute',
    height: 350,
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
  txtLogo: {
    fontSize: 20,
    position: 'relative',
    fontWeight: "bold",
    textAlign: "center",
    color: "#f9f9f9",
    backgroundColor: "#ff7657",
    top:10,
    padding:6,
  },
  btnView: {
    width:'30%',
   position:'absolute',
   top:300,
   left:30,
  },
  inner: {
    flex: 10,
    padding: 8,
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 8,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  footer: {
    flex: 0.5,
    backgroundColor: "#ff7657",
    flexDirection:"row",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  animeL: state.animeL.data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAnimeAction: () => dispatch(fetchAnimeAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
