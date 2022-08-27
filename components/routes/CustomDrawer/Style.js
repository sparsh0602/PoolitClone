import React from "react";
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
header:{
    flexDirection:'row',
    marginTop:'5%',
    justifyContent:'space-between'
},
text:{
    fontWeight:'bold',
    fontSize:15,
    color:'rgb(80,80,80)',
    marginLeft:'5%',
    marginTop:'5%'
},
button:{
    width:'85%',
    height:'20%',
    flexDirection:'row',
    marginLeft:'7.5%',
    marginTop:'10%',
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgray',
    justifyContent:'space-between',
    backgroundColor:'#e6ffe6'
},
button2:{
    width:'85%',
    height:'20%',
    flexDirection:'row',
    marginLeft:'7.5%',
    marginTop:'10%',
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgray',
    justifyContent:'space-between'
},
logo: {
    
    width:'35%',
    height:'45%',
    overflow:'visible',
    marginLeft:'5%',
   
    
  },
logo2: {
    
    width:'45%',
    height:'45%',
    overflow:'visible',
    marginLeft:'5%'
    
  },

    });
    
    export { styles }