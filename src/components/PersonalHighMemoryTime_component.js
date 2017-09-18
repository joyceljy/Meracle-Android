import React from 'react';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import SideBarContent from '../containers/SideBarContent';

class PersonalHighMemoryTime extends React.Component {

    constructor() {
        super();
this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        this.state = {
            isMoving: false,
        };
    }

closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        const fill = 150;
        // const fill = this.state.points / MAX_POINTS * 100;
        //const MAX_POINTS = 500;
        return (
            <Drawer
                type="displace"
                ref={(ref) => this._drawer = ref}
                content={<SideBarContent />}
                openDrawerOffset={100}
                panOpenMask={0.80}
                captureGestures="open"
                styles={drawerStyles}
                tweenHandler={ratio => ({
                    main: {
                        opacity: 1,
                    },
                    mainOverlay: {
                        opacity: ratio / 2,
                        backgroundColor: 'black',
                    },
                })}
            >

                <View style={styles.menuIcon}>
                    <Icon.Button name="menu" size={30} backgroundColor={null} color='#FFFFFF' onPress={this.openControlPanel}>
                    </Icon.Button>
                </View>

                <View
                    style={styles.container}>
                    <View style={styles.circle}>
                        <Text style={styles.textstyle}>個人記憶力最佳時段</Text>
                        <AnimatedCircularProgress
                            size={150}
                            width={8}
                            fill={fill}
                            tintColor="#00e0ff"
                            backgroundColor="#3d5875">
                            {
                                (fill) => (
                                    <Text style={styles.points}>
                                        {/*Math.round(MAX_POINTS * fill / 100)*/}
                                        星期二
                            </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                </View>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    points: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 63,
        left: 45,
        width: 90,
        //textAlign: 'center',
        color: '#E0E0E0',
        fontSize: 20,
        fontWeight: "100"
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#152d44',
        padding: 150
    },
    textstyle: {
        bottom: 30,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,

    },
    menuIcon: {
        width: 48,
        height: 45
    }

});
export default PersonalHighMemoryTime;