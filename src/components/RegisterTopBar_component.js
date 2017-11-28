import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            RegisterStep: '1',
        })
    }
    componentWillReceiveProps(nextProps) {
        const { childRegStep: previous_childRegStep } = this.props;
        const { childRegStep } = nextProps;
        if (previous_childRegStep != childRegStep) {
            this.setState({ RegisterStep: childRegStep })
        }
    }


    render() {
        //第一步骤尚未完成
        if (this.state.RegisterStep == '1') {
            return (

                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => {
                        this.props.goMember();
                    }}>
                        <Image style={styles.backIcon}
                            source={require('../images/back.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.rectangle}></View>
                    <View style={styles.rectangle}></View>
                    <View style={styles.rectangle}></View>
                    <View style={styles.checkIconView}>
                        <Image style={styles.checkIcon}
                            onPress
                            source={require('../images/check.png')}
                        />
                    </View>
                </View>

            );
        }

        //步骤一完成
        else if (this.state.RegisterStep == '2') {
            return (

                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => {
                        this.props.changeRegisterStep('1');
                    }}>
                        <Image style={styles.backIcon}
                            source={require('../images/back.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.rectangleLight}></View>
                    <View style={styles.rectangle}></View>
                    <View style={styles.rectangle}></View>
                    <View style={styles.checkIconView}>
                        <Image style={styles.checkIcon}
                            source={require('../images/check.png')}
                        />
                    </View>
                </View>

            );
        }

        //步骤二完成
        else if (this.state.RegisterStep == '3') {
            return (

                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => {
                        this.props.changeRegisterStep('2');
                    }}>
                        <Image style={styles.backIcon}
                            source={require('../images/back.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.rectangleLight}></View>
                    <View style={styles.rectangleLight}></View>
                    <View style={styles.rectangle}></View>
                    <View style={styles.checkIconView}>
                        <Image style={styles.checkIcon}
                            source={require('../images/check.png')}
                        />
                    </View>
                </View>

            );
        }

        //步骤三完成
        else if (this.state.RegisterStep == '4') {
            return (

                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => {
                        this.props.changeRegisterStep('3');
                    }}>
                        <Image style={styles.backIcon}
                            source={require('../images/back.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.rectangleLight}></View>
                    <View style={styles.rectangleLight}></View>
                    <View style={styles.rectangleLight}></View>
                    <View style={styles.checkIconViewLight}>
                        <Image style={styles.checkIcon}
                            source={require('../images/check.png')}
                        />
                    </View>
                </View>

            );
        }


    }
}

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
    },
    backIcon: {
        marginLeft: width*0.041,
        marginTop: 16,
        marginRight: width*0.0625-width*0.0208,
        width: 24,
        height: 24,
    },
    checkIcon: {
        marginLeft: 2,
        marginTop: 2,
        width: 20,
        height: 20,
    },
    checkIconView: {
        marginLeft: 16,
        marginTop: 16,
        backgroundColor: 'rgba(255,255,255,0.50)',
        width: 24,
        height: 24,
        borderRadius: 100,
    },
    checkIconViewLight: {
        marginLeft: 16,
        marginTop: 16,
        backgroundColor: '#009688',
        width: 24,
        height: 24,
        borderRadius: 100,
    },
    rectangle: {
        width: 80,
        height: 8,
        marginLeft: width*0.0208,
        marginTop: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 100,
    },
    rectangleLight: {
        width: 80,
        height: 8,
        marginLeft: width*0.0208,
        marginTop: 24,
        borderRadius: 100,
        backgroundColor: '#009688',
    }


});

export default Memory;
