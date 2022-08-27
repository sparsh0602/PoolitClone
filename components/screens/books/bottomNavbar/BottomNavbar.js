import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { Searchbar } from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcon.loadFont();

const BottomNavbar = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{marginBottom:10,height:'17%'}}> 
        
            <View>
                <Searchbar
                    placeholder=""
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.Searchbar}
                />
            </View>

            <View style={styles.locationHeadingConatiner}>
                <Text style={styles.locationHeading}>By locations</Text>
                <MaterialCommunityIcon name="plus-circle-outline" color="rgb(80,80,80)" size={18} style={{ marginLeft: '2%', marginTop: '0.5%' }} />
                <Text style={styles.locationHeadingAddlocation}>Add location</Text>
            </View>

            <View style={styles.locationInfoContainer}>
                <View style={styles.locationInfo}><Text style={styles.locationValue}>KarmaCircles</Text></View>
                <View style={styles.locationInfo2}><Text style={styles.locationValue}>New Delhi</Text></View>
                <View style={styles.locationInfo2}><Text style={styles.locationValue}>Delhi</Text></View>
            </View>

            
        </View>
    )
}

export default BottomNavbar

