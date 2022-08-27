
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Classified from '../screens/classified/Classified';
import Books from '../screens/books/Books';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer/CustomDrawer';
import {Dimensions} from 'react-native';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();



const Routes = () => {
  return (

    <NavigationContainer>
      <Drawer.Navigator 
     screenOptions={{
      drawerStyle: {
      width: '60%',
      },
      }}
       drawerContent={props => <CustomDrawer{...props} /> }>
        <Drawer.Screen name="Classified" component={Classified} options={{headerShown: false}}/>
        <Drawer.Screen name="Books" component={Books} options={{headerShown: false}}/>
      </Drawer.Navigator>

    </NavigationContainer>




  )
}

export default Routes