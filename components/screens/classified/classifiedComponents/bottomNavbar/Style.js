import React from "react";
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    headingName:{
        fontSize:24,
        fontWeight:'bold',
        color:'rgb(80,80,80)',
        paddingTop:'1%',
        paddingLeft:20
    },
    Searchbar:{
        backgroundColor:'rgb(220,220,220)',
        width:'90%',
  
        marginLeft:'5%',
        borderRadius:20,
        height:36,
        marginTop:10,
        color:'black'
    },
    locationHeadingConatiner:{
        flexDirection:'row',
        marginTop:20,
        color:'black'
        
    },
    locationHeading:{
        fontSize:15,
        fontWeight:'bold',
        color:'rgb(80,80,80)',
        marginLeft:20,
    },
    locationHeadingAddlocation:{
        fontSize:12,
        marginTop:'0.5%',
        marginLeft:'2%',
        color:'rgb(112,112,112)'
    },
    locationInfoContainer:{
        flexDirection:'row',
        marginTop:12,
        color:'black'
    },
    locationInfo:{
        borderWidth:1,
        borderColor:'rgb(169,169,169)',
        borderRadius:20,
        marginLeft:20,
        backgroundColor:'white',
        color:'black'
    },
    locationInfo2:{
        borderWidth:1,
        borderColor:'rgb(169,169,169)',
        borderRadius:20,
        marginLeft:10,
        backgroundColor:'white',
        color:'black'
    },
    locationValue:{
        padding:10,
        fontSize:13,
        color:'rgb(169,169,169)'
    },
    category:{
        marginLeft:20,
        marginTop:15,
        fontWeight:'bold',
        fontSize:18,
        color:'rgb(80,80,80)'
    }
    });
    
    export { styles }