import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, processColor
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import SideBarContent from '../containers/SideBarContent';
import { LineChart } from 'react-native-charts-wrapper';

class EverySolutionMemLineChart extends React.Component {

    constructor() {
        super();
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        this.state = {
            data: {
                dataSets: [{
                    values: [{ y: 100 }, { y: 115 }, { y: 105 }, { y: 115 },{ y: 100 }], //x:
                    label: '運動後',
                    config: {
                        lineWidth: 1,
                        drawCubicIntensity: 0.4,
                        circleRadius: 3,
                        drawHighlightIndicators: false,
                        color: processColor('#FF0080'),
                        drawFilled: true,
                        valueFormatter: "##",
                        fillColor: processColor('#FF0080'),
                        fillAlpha: 80,
                        circleColor: processColor('#FF0080')
                    }
                }, {
                    values: [{ y: 90 }, { y: 130 }, { y: 95 }, { y: 105 },{ y: 90 }],
                    label: '睡前',
                    config: {
                        lineWidth: 1,
                        drawCubicIntensity: 0.4,
                        circleRadius: 3,
                        drawHighlightIndicators: false,
                        color: processColor('#FFFB00'),
                        drawFilled: true,
                        valueFormatter: "##",
                        fillColor: processColor('#FFFB00'),
                        fillAlpha: 80,
                        circleColor: processColor('#FFFB00')
                    }
                }, {
                    values: [{ y: 120 }, { y: 105 }, { y: 90 }, { y: 110 },{ y: 120 }],
                    label: '剛睡醒',
                    config: {
                        lineWidth: 1,
                        drawCubicIntensity: 0.4,
                        circleRadius: 3,
                        drawHighlightIndicators: false,
                        color: processColor('#005757'),
                        drawFilled: true,
                        valueFormatter: "##",
                        fillColor: processColor('#005757'),
                        fillAlpha: 80,
                        circleColor: processColor('#005757')
                    }
                }, {
                    values: [{ y: 110 }, { y: 100 }, { y: 115 }, { y: 110 },{ y: 105 }],
                    label: '飯前',
                    config: {
                        lineWidth: 1,
                        drawCubicIntensity: 0.4,
                        circleRadius: 3,
                        drawHighlightIndicators: false,
                        color: processColor('#0066CC'),
                        drawFilled: true,
                        valueFormatter: "##",
                        fillColor: processColor('#0066CC'),
                        fillAlpha: 80,
                        circleColor: processColor('#0066CC')
                    }
                }, {
                    values: [{ y: 105 }, { y: 120 }, { y: 100 }, { y: 120 },{ y: 105 }],
                    label: '飯後',
                    config: {
                        lineWidth: 1,
                        drawCubicIntensity: 0.4,
                        circleRadius: 3,
                        drawHighlightIndicators: false,
                        color: processColor('#8F4586'),
                        drawFilled: true,
                        fillColor: processColor('#8F4586'),
                        fillAlpha: 45,
                        valueFormatter: "##",
                        circleColor: processColor('#8F4586')
                    }
                }],

            },
            xAxis: {
                valueFormatter: ['3歲', '4歲', '5歲', '6歲', '7歲'],
                granularityEnabled: true,
                granularity: 1,
                position: 'BOTTOM'
            },
            legend: {
                enabled: true,
                textColor: processColor('black'),
                textSize: 8,
                position: 'BELOW_CHART_RIGHT',
                form: 'SQUARE',
                formSize: 8,
                xEntrySpace: 10,
                yEntrySpace: 10,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 1,
                custom: {
                    colors: [processColor('#FF0080'), processColor('#FFFB00'), processColor('#005757'), processColor('#0066CC'), processColor('#8F4586')],
                    labels: ['運動後', '睡前', '剛睡醒', '飯前', '飯後']
                }
            },
            // marker: {
            //     enabled: true,
            //     backgroundTint: processColor('teal'),
            //     markerColor: processColor('#F0C0FF8C'),
            //     textColor: processColor('white'),

            // }
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
                    <LineChart
                        style={styles.chart}
                        data={this.state.data}
                        description={{ text: '' }}
                        legend={this.state.legend}
                        marker={this.state.marker}
                        xAxis={this.state.xAxis}
                        drawGridBackground={false}
                        borderColor={processColor('#8E8E8E')}
                        borderWidth={1}
                        drawBorders={true}
                        animation={{ durationX: 500 }}
                        touchEnabled={true}
                        dragEnabled={true}
                        scaleEnabled={true}
                        scaleXEnabled={true}
                        scaleYEnabled={true}
                        pinchZoom={true}
                        doubleTapToZoomEnabled={true}

                        dragDecelerationEnabled={true}
                        dragDecelerationFrictionCoef={0.99}
                        
                        keepPositionOnRotation={false}
                    />
                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    chart: {
        width: 300,
        height: 400,
        backgroundColor: 'rgba(221, 221, 255, 0.5)'

    },
    menuIcon: {
        width: 48,
        height: 45
    }
});

export default EverySolutionMemLineChart;