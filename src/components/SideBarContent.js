import React, { Component } from 'react';
import { View, Image, StyleSheet, Alert, Modal, ListView, Text, TouchableHighlight } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-root-toast';

class Memory extends Component {
    constructor(props) {
        super(props);
    }
    // source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
    // style={{backgroundColor:'white'}}

    //跳窗
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _onHideLabel1() {
        this.setState({ pressLabel1: false });
    }
    _onShowLabel1() {
        this.setState({ pressLabel1: true });
    }

    _onHideLabel2() {
        this.setState({ pressLabel2: false });
    }
    _onShowLabel2() {
        this.setState({ pressLabel2: true });
    }

    _onHideLabel3() {
        this.setState({ pressLabel3: false });
    }
    _onShowLabel3() {
        this.setState({ pressLabel3: true });
    }

    _onHideLabel4() {
        this.setState({ pressLabel4: false });
    }
    _onShowLabel4() {
        this.setState({ pressLabel4: true });
    }


    render() {
        return (
            <View style={styles.Viewstyle}>

                <Image
                    style={styles.personInfo}
                    source={require('../images/SidebarBg.png')}
                >
                    <View style={styles.imageView}>
                        <Image style={styles.avatar} source={{ uri: 'https://www.meracle.me/home/Filefolder/' + this.state.imageurl }} />
                    </View>
                    <Text style={styles.helloText}>Hello !</Text>
                    <Text style={styles.nameText}>{"\n"}{this.state.Name}{'  '}{this.state.genderText}</Text>
                </Image>

                <View style={{ width: 296, height: 32 }}></View>

                <TouchableHighlight onPress={() => this.props.MindwaveClick()}
                    onHideUnderlay={this._onHideLabel1.bind(this)}
                    onShowUnderlay={this._onShowLabel1.bind(this)}>
                    <View style={this.state.pressLabel1 ? styles.menuViewPress : styles.menuView}>
                        <Image
                            style={styles.icon}
                            source={this.state.pressLabel1 ? require('../images/SB_bluetooth_white.png') : require('../images/SB_bluetooth.png')}
                        />
                        <Text style={this.state.pressLabel1 ? styles.menuTextPress : styles.menuText}>測量腦波</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.TestResultClick()}
                    onHideUnderlay={this._onHideLabel2.bind(this)}
                    onShowUnderlay={this._onShowLabel2.bind(this)}>
                    <View style={this.state.pressLabel2 ? styles.menuViewPress : styles.menuView}>
                        <Image
                            style={styles.icon}
                            source={this.state.pressLabel2 ? require('../images/SB_chart_white.png') : require('../images/SB_chart.png')}
                        />
                        <Text style={this.state.pressLabel2 ? styles.menuTextPress : styles.menuText}>腦波測量結果</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.PublicResultClick()}
                    onHideUnderlay={this._onHideLabel3.bind(this)}
                    onShowUnderlay={this._onShowLabel3.bind(this)}>
                    <View style={this.state.pressLabel3 ? styles.menuViewPress : styles.menuView}>
                        <Image
                            style={styles.icon}
                            source={this.state.pressLabel3 ? require('../images/SB_graph_white.png') : require('../images/SB_graph.png')}
                        />
                        <Text style={this.state.pressLabel3 ? styles.menuTextPress : styles.menuText}>大眾統計數據</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.MemberClick()}
                    onHideUnderlay={this._onHideLabel4.bind(this)}
                    onShowUnderlay={this._onShowLabel4.bind(this)}>
                    <View style={this.state.pressLabel4 ? styles.menuViewPress : styles.menuView}>
                        <Image
                            style={styles.icon}
                            source={this.state.pressLabel4 ? require('../images/SB_person_white.png') : require('../images/SB_person_darkBlue.png')}
                        />
                        <Text style={this.state.pressLabel4 ? styles.menuTextPress : styles.menuText}>會員專區</Text>
                    </View>
                </TouchableHighlight>

                <Image
                    style={styles.logo}
                    source={require('../images/Logo.png')}
                />
                <Modal
                    //animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
                </Modal>
            </View>

        );
    }

}
let styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#FFFFFF'
    },
    personInfo: {
        width: 296,
        height: 192,
        flexDirection: 'row',
    },
    imageView: {
        backgroundColor: 'rgb(255,255,255)',
        width: 80,
        height: 80,
        marginTop: 72,
        marginLeft: 32,
        borderRadius: 100,
        // shadowColor: 'rgba(255,255,255,0.2)',
        // shadowRadius: 8,
        borderWidth: 7,
        borderColor: '#9ACBD9',
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 100,
    },
    helloText: {
        marginTop: 87,
        marginLeft: 32,
        fontSize: 14,
        lineHeight: 26,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
        letterSpacing: 0.93
    },
    nameText: {
        marginTop: 90,
        marginLeft: -38,
        fontSize: 18,
        lineHeight: 26,
        fontFamily: 'PingFangTC-Regular',
        color: '#FFFFFF',
        letterSpacing: 1.2
    },
    icon: {
        opacity: 0.8,
        marginLeft: 40,
        marginTop: 16,
        width:24,
        height:24,
        resizeMode: 'stretch',
    },
    menuView: {
        width: 296,
        height: 56,
        backgroundColor: 'rgba(255,255,255,0.7)',
        flexDirection: 'row',
    },
    menuViewPress: {
        width: 296,
        height: 56,
        backgroundColor: 'rgba(20,70,105,0.95)',
        flexDirection: 'row',
        borderRadius: 4,

    },
    menuText: {
        marginTop: 16,
        marginLeft: 24,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#144669',
        letterSpacing: 1.2
    },
    menuTextPress: {
        marginTop: 16,
        marginLeft: 24,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'PingFangTC-Regular',
        color: '#FFFFFF',
        letterSpacing: 1.2
    },
    logo: {
        marginTop:80,
        marginLeft:132,
        width: 32,
        height: 32,
        resizeMode: 'stretch',
    }



});

export default Memory;
