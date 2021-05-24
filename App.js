import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import { createBottomTabNavigator } from "react-navigation-tabs";
import{createAppContainer} from 'react-navigation'
import FaceBook from './Screens/face';
import InstaGram from './Screens/insta';
export default class App extends React.Component {
  render(){ 
     return (
    <View style={styles.container}>
<Header/>
<Appcontainer/>
    </View>
  );
     }
}
const navi=createBottomTabNavigator({
  FaceBook:FaceBook,
  Insta:InstaGram
})
const Appcontainer=createAppContainer(navi)
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
