import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';

import { PieChart } from 'react-native-charts-wrapper';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import SideBarContent from '../containers/SideBarContent';

class ParentsTroublePieChart extends React.Component {

    constructor() {
        super();
this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        this.state = {
            legend: {
                enabled: true,
                textSize: 8,
                form: 'CIRCLE',
                position: 'RIGHT_OF_CHART',
                wordWrapEnabled: true
            },
            data: {
                dataSets: [{
                    values: [
                    { value: 25, label: '正常' },
                    { value: 15, label: '過動症' },
                    { value: 21, label: '自閉症' },
                    { value: 15, label: '學習障礙' },
                    { value: 9, label: '智能障礙' },
                    { value: 15, label: '其他特殊疾病' }],
                    label: '',
                    config: {
                        colors: [processColor('#CA8EFF'),processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D')],
                        valueTextSize: 10,
                        valueTextColor: processColor('#5B5B5B'),
                        sliceSpace: 0,
                        selectionShift: 5
                    }
                }],
            },
            //   description: {
            //     text: 'This is Pie chart description',
            //     textSize: 15,
            //     textColor: processColor('darkgray'),

            //   }
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
                <PieChart
                    style={styles.chart}
                    logEnabled={true}
                    // chartBackgroundColor={processColor('pink')}
                    chartDescription={this.state.description}
                    data={this.state.data}
                    legend={this.state.legend}
                    entryLabelColor={processColor('black')}
                    entryLabelTextSize={10}
                    animation={{ durationY: 500 }}
                    rotationEnabled={false}
                    drawSliceText={true}
                    usePercentValues={false}
                    centerText={'孩童狀態統計'}
                    centerTextSize={12}
                    centerTextRadiusPercent={80}
                    holeRadius={35}
                    holeColor={processColor('#f0f0f0')}
                    transparentCircleRadius={40}
                    transparentCircleColor={processColor('#f0f0f088')}
                    maxAngle={380}
                //onSelect={this.handleSelect.bind(this)}
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
        width: 350,
        height: 400,
        // backgroundColor: 'rgba(221, 221, 255, 0.5)',

    },
     menuIcon: {
        width: 48,
        height: 45
    }
});

export default ParentsTroublePieChart;