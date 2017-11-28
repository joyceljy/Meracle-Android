import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import AllKidsAvgScore from '../containers/AllKidsAvgScoreADay_container';

const AllKidsAvgScoreScene = () => {
    return (
        <View style={styles.container}>
            <AllKidsAvgScore />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default AllKidsAvgScoreScene;