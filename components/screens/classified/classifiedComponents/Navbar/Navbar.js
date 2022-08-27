import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./Style";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

MaterialCommunityIcon.loadFont();



const MyComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBarConatiner}>

      <View style={styles.topNavbar}>

        <View style={styles.topNavbarLeft}>
          <MaterialCommunityIcon name="swap-horizontal" color="#23a455" size={25} style={{ paddingTop: 20, paddingLeft: '4%', paddingBottom: 10 }} onPress={() => navigation.openDrawer()}/>
          <Text style={styles.topNavbarText}>Classifieds</Text>
        </View>

        <View style={styles.topNavbarRight}>
          <MaterialCommunityIcon name="message-outline" color="rgb(152,152,152)" size={27} style={{ paddingTop: 20, paddingLeft: '7%', paddingBottom: 10 }} />
          <MaterialCommunityIcon name="account-outline" color="rgb(152,152,152)" size={32} style={{ paddingTop: 15, paddingLeft: '7%',paddingRight:'5%' ,paddingBottom: 10 }} />
        </View>
      </View>

    </View>
  );
};

export default MyComponent;
  // <MaterialCommunityIcon name="rocket" color="red" size={20} />