import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import SideBarContent from '../containers/SideBarContent';
class PersonalMemBarChart extends React.Component {
  constructor() {
        super();
this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);

        this.state = {
            legend: {
                enabled: true,
                textSize: 8,
                form: 'SQUARE',
                wordWrapEnabled: true,
            },
            data: {
                dataSets: [{
                    values: [{ y: 100 }, { y: 123 }, { y: 152 }, { y: 133 }, { y: 110 }],
                    label: '記憶力指數',
                    config: {
                        color: processColor('teal'),
                        barSpacePercent: 40,
                        valueFormatter:'###',
                        barShadowColor: processColor('#7373B9'),
                        highlightAlpha: 90,
                        highlightColor: processColor('#7373B9'),
                    }
                }],
            },
            xAxis: {
                valueFormatter: ['第1次', '第2次', '第3次', '第4次', '第5次'],
                granularityEnabled: true,
                granularity: 1,
                position: 'BOTTOM'
            }

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
                <BarChart
                    style={styles.chart}
                    data={this.state.data}
                    xAxis={this.state.xAxis}

                    animation={{ durationX: 500 }}
                    legend={this.state.legend}
                    gridBackgroundColor={processColor('#ffffff')}
                    drawBarShadow={false}
                    drawValueAboveBar={true}
                    drawHighlightArrow={true}
                    borderColor={processColor('#8E8E8E')}
                    borderWidth={1}
                    drawBorders={true}

                // onSelect={this.handleSelect.bind(this)}
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
        backgroundColor: 'rgba(221, 221, 255, 0.5)'

    },
     menuIcon: {
        width: 48,
        height: 45
    }
});


export default PersonalMemBarChart;