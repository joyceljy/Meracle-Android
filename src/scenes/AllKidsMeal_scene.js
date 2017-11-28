import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import AllKidsMeal from '../containers/AllKidsMeal_container';

const AllKidsMealScene = () => {
    return (
        <View style={styles.container}>
            <AllKidsMeal />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default AllKidsMealScene;