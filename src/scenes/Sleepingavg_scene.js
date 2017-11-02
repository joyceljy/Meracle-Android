import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Sleepingavg from '../containers/Sleepingavg_container';

const SleepingavgScene = () => {
    return (
        <View style={styles.container}>
            <Sleepingavg />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default SleepingavgScene;