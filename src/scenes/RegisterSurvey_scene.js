import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import RegisterSurvey from '../containers/RegisterSurvey_container';

const RegisterSurveyScene = () => {
    return (
        <View style={styles.container}>
            <RegisterSurvey />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default RegisterSurveyScene;