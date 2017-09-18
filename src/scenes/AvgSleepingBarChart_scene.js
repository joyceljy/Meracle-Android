import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import AvgSleepingBarChart from '../containers/AvgSleepingBarChart_container';

const AvgSleepingBarChartScene = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage}>
               
                     <AvgSleepingBarChart />
               
            </Image>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
})

export default AvgSleepingBarChartScene;
