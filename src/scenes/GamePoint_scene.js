import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import GamePoint from '../containers/GamePoint_container';

const GamePointScene = () => {
    return (
        <View style={styles.container}>
            {
                // <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage}>
                // </Image><View></View>
            }
            
                <GamePoint />
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
       
    },
})

export default GamePointScene;
