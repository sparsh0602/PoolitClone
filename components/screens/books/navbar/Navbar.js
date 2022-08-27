import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./style";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

         
MaterialCommunityIcon.loadFont();


const MyComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBarConatiner}>

      <View style={styles.topNavbar}>

        <View style={styles.topNavbarLeft}>
          <MaterialCommunityIcon name="arrow-left" color="#rgb(80,80,80)" size={25} style={{ paddingTop: '6%', paddingLeft: 15, paddingBottom: 10 }} onPress={()=>{navigation.navigate('Classified')}}/>
          <Text style={styles.topNavbarText}>Books</Text>
          <MaterialCommunityIcon name="chevron-down" color="#23a455" size={30} style={{ paddingTop: '4.5%',paddingBottom: 20 }} />
        </View>

        <View style={styles.topNavbarRight}>
          <MaterialCommunityIcon name="message-outline" color="rgb(152,152,152)" size={27} style={{ paddingTop: '7%', paddingLeft: '7%', paddingBottom: 10 }} />
          <MaterialCommunityIcon name="account-outline" color="rgb(152,152,152)" size={32} style={{ paddingTop: '5.5%', paddingLeft: '7%', paddingBottom: 10,paddingRight:'3%' }} />
        </View>
      </View>

    </View>
  );
};

export default MyComponent;