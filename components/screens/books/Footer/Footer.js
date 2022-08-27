import { View, Text } from 'react-native'
import React from 'react'
import { styles } from "./Style";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcon.loadFont();


const Footer = () => {
  return (
    <View style={styles.footerContainer}>
        <View style={{marginTop:8,marginBottom:10}}>
      <MaterialCommunityIcon name="magnify" color="green" size={23} style={{textAlign:'center',marginLeft:12}}/>
      <Text style={{color:'green',marginLeft:15,fontSize:11}}>Discover</Text>
      </View>
        <View style={{marginTop:8}}>
      <MaterialCommunityIcon name="shopping-outline" color="rgb(152,152,152)" size={23} style={{textAlign:'center'}}/>
      <Text style={{color:'rgb(152,152,152)',fontSize:11}}>MY OFFERS</Text>
      </View>
        <View style={{marginTop:-25,alignItems:'center'}}>
      <MaterialCommunityIcon name="plus-circle" color="#00A36C" size={48} style={{textAlign:'center',position:'absolute',borderWidth:1,borderColor:'#00A36C',borderRadius:30,backgroundColor:'white',overflow:'hidden',}}/>
      </View>
        <View style={{marginTop:8}}>
      <MaterialCommunityIcon name="tag-outline" color="rgb(152,152,152)" size={23} style={{textAlign:'center'}}/>
      <Text style={{color:'rgb(152,152,152)',textAlign:'center',fontSize:11}}>MY ADS</Text>
      </View>
        <View style={{marginTop:8}}>
      <MaterialCommunityIcon name="file-document-outline" color="rgb(152,152,152)" size={23}style={{textAlign:'center',marginRight:15}}/>
      <Text style={{color:'rgb(152,152,152)',marginRight:15,fontSize:11}}>COMMUNITY</Text>
      </View>
    </View>
  )
}

export default Footer