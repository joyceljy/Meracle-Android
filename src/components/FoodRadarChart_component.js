import React, { Component } from 'react';
import SideBarContent from '../containers/SideBarContent';
import {
    Text,
    TextInput,
    View,
    processColor,
    StyleSheet
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';
import { RadarChart } from 'react-native-charts-wrapper';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
class Memory extends Component {
    constructor() {
        super();
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        this.state = {
            data: {},
            legend: {
                enabled: true,
                textSize: 8,
                form: 'CIRCLE',
                wordWrapEnabled: true
            }
        };
    }
    componentDidMount() {
        this.setState(
            reactAddonsUpdate(this.state, {
                data: {
                    $set: {
                        dataSets: [{
                            values: [{ value: 127.5 }, { value: 125 }, { value: 127.6 }, { value: 130 }, { value: 128 }],
                            label: '孩童飲食攝取狀況',
                            config: {
                                color: processColor('red'),
                                drawFilled: true,
                                fillColor: processColor('red'),
                                fillAlpha: 50,
                                lineWidth: 2
                            }
                        }
                                // , {
                                //     values: [{ value: 130 }, { value: 120 }, { value: 135 }, { value: 128 }, { value: 125 }],
                                //     label: 'DS 2',
                                //     config: {
                                //         color: processColor('#C0FF8C'),
                                //         drawFilled: true,
                                //         fillColor: processColor('#C0FF8C'),
                                //         fillAlpha: 150,
                                //         lineWidth: 1.5
                                //     }
                                // }
                            
                        ],
                    }
                },
                xAxis: {
                    $set: {
                        valueFormatter: ['全穀根莖類', '蛋豆魚肉類', '乳製品', '蔬菜類', '水果類']
                    }
                }
            })
        );
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
            <View style={styles.container}>
                <RadarChart
                    style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        description={{ text: '342' }}
                        animation={{ durationY: 500 }}
                        legend={this.state.legend}
                        skipWebLineCount={1}
                        axisMinimum={0}
                />
            </View>
            </Drawer>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
     menuIcon: {
        width: 48,
        height: 45
    },
    chart: {
        width: 300,
        height: 380,
        backgroundColor: 'rgba(221, 221, 255, 0.5)'

    }
})
export default Memory;