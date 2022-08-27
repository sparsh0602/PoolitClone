import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./Style";
import { useNavigation,DrawerActions } from '@react-navigation/native';



const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View >
      <View style={styles.header}>
        <Text style={styles.text}>Switch to:</Text>
        <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.closeDrawer())}}>
          <MaterialCommunityIcon name="close" color="rgb(80,80,80)" size={15}  style={{marginRight:'5%',marginTop:14}}/>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
     <Image
        style={styles.logo}
        source={{
          uri: 'https://www.poolit.org/wp-content/uploads/2021/01/Group-1235.png',
        }}
      />
  
      <View style={{marginLeft:'43%'}}>
      <MaterialCommunityIcon name="chevron-right" color="green" size={30} />
        </View>
        </View>

      </View>
      <View style={styles.button2}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
     <Image
        style={styles.logo2}
        source={{
          uri: 'https://www.poolit.org/wp-content/uploads/2019/12/Group-969.png',
        }}
      />
  
      <View style={{marginLeft:'32%'}}>
      <MaterialCommunityIcon name="chevron-right" color="blue" size={30} />
        </View>
        </View>

      </View>
    </View>
  )
}

export default CustomDrawer