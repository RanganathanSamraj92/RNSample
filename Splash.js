import React, {
    Component
} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    ImageBackground
} from 'react-native';
import { NavigationActions } from 'react-navigation';

class SplashScreen extends Component {
    state = {}
    static navigationOptions = { title: 'Welcome', header: null };

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            1500
          )
        )
      }
    
      async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
           
            this.props.navigation.replace('Home');
                 
          //this.props.navigation.navigate('Home');
        }
      }

   

    render() {
        return (             
            
            <View style={styles.container}>
                <StatusBar hidden/>

<Image
          //source={require('./logo.png')}
          source={{
            uri:
              'http://webneel.net/image/logo/4-bird-transparent-logo-design-idea-by-ilya-schapko.gif',
          }}
          style={{
              alignItems:"center",
            width: 180,
            height: 80,
            borderRadius: 40 / 2,
          }}
        />

<Image
          source={require('./logo.png')}
        //   source={{
        //     uri:
        //       'http://webneel.net/image/logo/4-bird-transparent-logo-design-idea-by-ilya-schapko.gif',
        //   }}
          style={{
              alignItems:"center",
            width: 180,
            height: 180,
            borderRadius: 40 / 2,
          }}
        />
     
  

            
           


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
        height:null,
        width:null,
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

export default SplashScreen;