import React from "react";
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    cardContainer:{
        width:'45%',
        borderRadius:10,
        marginTop:17,
        height:'25%',
        backgroundColor:'white',
        flexDirection:'column',
       position:'relative'
    },
    produceType:{
        fontWeight:'bold',
        fontSize:15
    },
    bookTitle:{
        marginLeft:17,
        marginTop:4,
        fontSize:15,
        fontWeight:'bold',
        color: 'rgb(80,80,80)',
        maxHeight:25,
        maxWidth:150
    },
    bookLocation:{
        flexDirection:'row',
        marginLeft:13,
        
    },
    category:{
        marginTop:'8%',
        width:100,
        backgroundColor:'#AFE1AF',
        position:'absolute',
        bottom:0,
        left:0,
        height:17,
        borderTopRightRadius:20
    }
    });
    
    export { styles }