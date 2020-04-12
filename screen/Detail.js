import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, Text, View,  Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchAnimeDetail, clearAnimeAction } from "./../redux/action";


 class Detail extends Component {

  componentDidMount() {
    
    this.props.fetchAnimeDetail(this.props.route.params['name']);
  
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
            
                {/* { this.props.selAnimeDetail.map(data => {
                   return ( */}
                    
                    <View style={styles.menuBar1}>
                        <Text style={styles.txtLogo}>{this.props.route.params['name']}</Text>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                              uri: this.props.selAnimeDetail['image_url'],
                            }}
                          />
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                          <Text style={styles.txtLogo}>Score : {this.props.selAnimeDetail['score']}</Text>
                        <Text style={styles.txtLogo}>Episode : {this.props.selAnimeDetail['episodes']}</Text>
                          </View>
                        
                        <Text style={styles.txtLogo}>Sinopsis : </Text>
                        <Text style={styles.txtLogo}>{this.props.selAnimeDetail['synopsis']}</Text>
                    </View>
                    {/* );
                  }
                )
                } */}
                </ScrollView>
           </View>
      </View>
      <View style={[styles.wrapper, styles.footer]}>
      </View>
    
  </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#ff7657",
    flexDirection:'column',
    justifyContent: "center",
  },
  tinyLogo: {
    width: '100%',
    height: 350,
  },
  wrapper:{
    flex: 1
  },
  header:{
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-around",
    padding: 8,
    
  },
  menuBar1:{
    
    width: '100%',
    height: 400,
    marginTop:15,
    
  },
  menuBar2:{
    
    width: '40%',
    backgroundColor: "#ebebeb",
    textAlign:'center',
    padding: 8,
    
  },
  txtLogo:{
    fontSize: 20,
    fontStyle:'Bold',
    textAlign:'center',
  },
  menuBar3:{
    
    width: '30%',
    backgroundColor: "#ebebeb",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    
  },
  inner:{
    flex: 10,
    padding: 8,
  },
  content:{
    flex: 1,
    width: '100%',
    padding: 8,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    flexDirection:'column',
    justifyContent: "space-around",
    
  },
  footer:{
    flex: 0.5,
    backgroundColor: '#f9f9f9'
  }
  
});

const mapStateToProps = state => ({
  selAnimeDetail: state.selAnimeDetail.data
});
const mapDispatchToProps = dispatch => ({
  clearAnimeAction: () => dispatch(clearAnimeAction()),
  fetchAnimeDetail: (params) => dispatch(fetchAnimeDetail(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
