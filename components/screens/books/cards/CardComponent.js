import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from "./Style";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcon.loadFont();
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


function CardComponent(props) {
    const navigation = useNavigation();

    const handleINR = (amount) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginLeft: 17, fontSize: 15, color: 'rgb(80,80,80)',marginTop:10 }}>INR</Text>
                <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: 'bold', color: 'rgb(80,80,80)',marginTop:10 }}>{amount}</Text>
            </View>
        )
    }

    const handleGiveAway = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'rgb(80,80,80)',marginLeft: 17 ,marginTop:10}}>Giveaway</Text>
            </View>
        )
    }
    return (

        <Card style={styles.cardContainer} onPress={() => { (props.available === true) ? navigation.navigate(props.title) : alert("Page Under Development") }}>
            <Card.Cover source={{ uri: props.url }} style={{ minwidth: '100%',height:'50%', borderTopLeftRadius: 10, borderBottomRightRadius: 10, margin: "auto" }} />
            <Text style={styles.produceType}>{(props.INR) ? handleINR(props.INR) : handleGiveAway()}</Text>
            <Text style={styles.bookTitle} numberOfLines={1}>{props.title}</Text>

            <View style={styles.bookLocation}>  
            <MaterialCommunityIcon name="map-marker-outline" color="#899499" size={20} style={{marginTop:'2%'}}/> 
            <Text numberOfLines={1} style={{marginTop:'2%',color:'#899499',marginLeft:-4}}> {props.location} </Text>
            </View>

            <View style={styles.category}>
                <Text style={{textAlign:'center',marginTop:'5%',color:'black',fontSize:10}}>Books</Text>
                </View>
        </Card>


    )
}


export default CardComponent