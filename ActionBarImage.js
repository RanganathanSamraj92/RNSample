import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
 
export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('./menu_cloud.png')}
        //   source={{
        //     uri:
        //       'http://webneel.net/image/logo/4-bird-transparent-logo-design-idea-by-ilya-schapko.gif',
        //   }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </View>
    );
  }
}