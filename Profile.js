import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground ,StatusBar} from "react-native";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile",
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#263238',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };
  state = {
    editing: false,
  };
  render() {
    const { editing } = this.state;
    return (
      <View>
      <StatusBar backgroundColor="#000a12" barStyle="light-content"/>

      <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600'}}
    style={styles.image}
  >
      <Text
        style={styles.paragraph}
      >
        TITLE
      </Text>
  </ImageBackground>
      <TouchableOpacity onPress={() => this.setState({ editing: !editing })}>
          <Text>Toggle Editing {editing ? "Off" : "On"} </Text>
        </TouchableOpacity>
      
       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flexGrow:1,
      height:600,
      alignItems: 'center',
      justifyContent:'center',
    },
    paragraph: {
        marginTop:35,
      textAlign: 'center',
      color : 'red',
      fontSize:26,
    },
});

export default ProfileScreen;