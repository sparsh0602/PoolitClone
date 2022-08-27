import React from "react";
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
topNavbarLeft:{
    backgroundColor:'white',
    flexDirection:'row'

}       ,
topNavbarRight:{
    backgroundColor:'white',
    flexDirection:'row',
    marginLeft:85

}  ,
topNavbarText:{
    color:'#23a455',
    fontSize:20,
    fontWeight:'bold',
    paddingTop:'5%',
   
    paddingLeft:'3%'
},
topNavbar:{
minHeight:'5%',
flexDirection:'row',
backgroundColor:'white',
justifyContent:'space-between',
},
navBarConatiner:{
    height:'7.5%',
    borderWidth:1,
    borderColor:'#D3D3D3',
    borderRadius:15,
    
}
    });
    
    export { styles }