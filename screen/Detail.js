import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchAnimeDetail, clearAnimeAction } from "./../redux/action";

class Detail extends Component {
  componentDidMount() {
    this.props.fetchAnimeDetail(this.props.route.params["name"]);
  }

  componentWillUnmount() {
    this.props.clearAnimeAction();
  }

  render() {
    // console.log();
    return (
      <View style={styles.container}>
        <View style={[styles.wrapper, styles.inner]}>
          <View style={styles.content}>
            <ScrollView>
            <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: this.props.selAnimeDetail["image_url"],
                  }}
                />
              <View style={styles.menuBar1}>
                <Text style={styles.txtLogo}>
                  {this.props.route.params["name"]}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    top: 20,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Text style={styles.txtLogoLeft}>
                      Score : {this.props.selAnimeDetail["score"]}
                    </Text>
                  </View>
                  <View style={{ position: "relative" }}>
                    <Text style={styles.txtLogoRight}>
                      Episode : {this.props.selAnimeDetail["episodes"]}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    top: 20,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Text style={styles.txtLogoLeft}>
                      Tipe : {this.props.selAnimeDetail["type"]}
                    </Text>
                  </View>
                  <View style={{ position: "relative" }}>
                    <Text style={styles.txtLogoRight}>
                      Members : {this.props.selAnimeDetail["members"]}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    top: 40,
                    width: "100%",
                  }}
                >
                  <Text style={styles.txtLogo}>Sinopsis : </Text>
                  <Text style={styles.txtLogo}>{this.props.selAnimeDetail["synopsis"]}</Text>
                </View>
              </View>
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
    height: 350,
    
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
    width: "100%",
    height: 400,
    marginTop: 15,
    backgroundColor: "#ff7657",
  },

  txtLogo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
  txtLogoLeft: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    
    padding: 8,
  },
  txtLogoRight: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#ff7657",
    padding: 8,
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
    flexDirection: "row",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  selAnimeDetail: state.selAnimeDetail.data,
});
const mapDispatchToProps = (dispatch) => ({
  clearAnimeAction: () => dispatch(clearAnimeAction()),
  fetchAnimeDetail: (params) => dispatch(fetchAnimeDetail(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
