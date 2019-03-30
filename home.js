import React, {
    Component
} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    StatusBar,ImageBackground
} from 'react-native';

import ActionBarImage from './ActionBarImage';
import { RectButton } from 'react-native-gesture-handler';

const props = {}
class HomeScreen extends Component {
    state = {}
    static navigationOptions = {
        title: "Home",
        headerLeft: <ActionBarImage /> ,
    };
    _handlePress(event) {
        console.log('Pressed!');
        
      }
      moveToProfile(){
        props.navigation.navigate('Profile');
      }
    render() {
        return (             
            <View style={styles.container}>

              <StatusBar backgroundColor="#ff4081" barStyle="light-content"/>

                <Image
                //  source={require('./logo.png')}
                source={{
                    uri:
                    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad9b3376257879.5c643dddc53a9.png',
                }}
                style={styles.image}
                />
      
        
      <Button style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('Profile')}
         title="Press Me!">
      </Button>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        width: '100%',
        height: '40%',
      },
      paragraph: {
          marginTop:35,
        textAlign: 'center',
        color : 'blue',
        fontSize:26,
      },
      buttonContainer: {
        width: '50%',
        height: '20%',
        margin:125,      
      }
});

export default HomeScreen;