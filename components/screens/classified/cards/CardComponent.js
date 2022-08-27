import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from "./style";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcon.loadFont();
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


function CardComponent(props){
    
    const navigation = useNavigation();
        return (
          
            <Card style={styles.cardContainer} onPress={()=>{(props.available===true)?navigation.navigate(props.title):alert("Page Under Development")}}>
                <Card.Cover source={{ uri: props.url }} style={{width:'100%',height:120,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                <Text style={styles.produceType}>{props.title}</Text>
                <Text style={styles.produceCount}>{props.quantity} Products</Text>
            </Card>
           

        )
    }


export default CardComponent