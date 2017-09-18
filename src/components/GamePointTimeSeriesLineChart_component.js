import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import _ from 'lodash';
import { LineChart } from 'react-native-charts-wrapper';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import SideBarContent from '../containers/SideBarContent';
class GamePointTimeSeriesLineChart extends React.Component {

    constructor() {
        super();
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        this.state = {
            data: {
                dataSets: [{
                    values: [
                        { y: 340 },
                        { y: 290, marker: "" },
                        { y: 340, marker: "" },
                        { y: 390, marker: "" },
                        { y: 350, marker: "" }],

                    label: '同齡小孩',
                    config: {
                        lineWidth: 1,
                        drawValues: true,
                        circleRadius: 2,
                        highlightEnabled: true,
                        drawHighlightIndicators: true,
                        color: processColor('#FF359A'),
                        drawFilled: true,
                        valueTextSize: 10,
                        fillColor: processColor('#FF359A'),
                        fillAlpha: 80,
                        valueFormatter: "###",
                        circleColor: processColor('#FF359A'),

                    }

                },

                {
                    values: [
                        { y: 300 },
                        { y: 350, marker: "" },
                        { y: 310, marker: "" },
                        { y: 360, marker: "" },
                        { y: 410, marker: "" }],

                    label: '您的小孩',
                    config: {
                        lineWidth: 1,
                        drawValues: true,
                        circleRadius: 2,
                        highlightEnabled: true,
                        drawHighlightIndicators: true,
                        color: processColor('#0080FF'),
                        drawFilled: true,
                        valueTextSize: 10,
                        fillColor: processColor('#0080FF'),
                        fillAlpha: 80,
                        valueFormatter: "###",
                        circleColor: processColor('#0080FF')
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
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5,
                custom: {
                    colors: [processColor('#FF359A'), processColor('#0080FF')],
                    labels: ['同齡小孩', '您的小孩',]
                }
            },
            marker: {
                enabled: true,
                markerColor: processColor('#F0C0FF8C'),
                textColor: processColor('white'),
                markerFontSize: 14,
            },

            selectedEntry: ""
        }

    }
    // _randomParabolaValues(size: number) {
    //     return _.times(size, (index) => {
    //         return { x: index, y: index * index }
    //     });
    // }
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

        let borderColor = processColor("#000000");
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
                        chartDescription={{ text: '' }}
                        legend={this.state.legend}
                        marker={this.state.marker}

                        animation={{ durationX: 500 }}
                        drawGridBackground={true}
                        // borderWidth={null}
                        drawBorders={false}
                        touchEnabled={false}
                        dragEnabled={true}
                        scaleEnabled={true}
                        scaleXEnabled={true}
                        scaleYEnabled={true}
                        pinchZoom={true}
                        doubleTapToZoomEnabled={false}

                        dragDecelerationEnabled={true}
                        dragDecelerationFrictionCoef={0.99}
                        // yAxis={{ left: { axisMaximum: 1000 } }}
                        drawGridBackground={true}
                        gridBackgroundColor={processColor('rgba(221, 221, 255, 0.3)')}
                        keepPositionOnRotation={false}

                        xAxis={this.state.xAxis}


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
        height: 380,
        // backgroundColor: '#FF8EFF'

    },
     menuIcon: {
        width: 48,
        height: 45
    }
});


export default GamePointTimeSeriesLineChart;