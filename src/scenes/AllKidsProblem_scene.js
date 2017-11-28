import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import AllKidsProblem from '../containers/AllKidsProblem_container';

const AllKidsProblemScene = () => {
    return (
        <View style={styles.container}>
            <AllKidsProblem />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default AllKidsProblemScene;