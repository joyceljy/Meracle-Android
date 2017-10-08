import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import ActionButton from 'react-native-action-button';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';
class Memory extends Component {
    constructor(props) {
        super(props);

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
                <View style={styles.Viewstyle}>

                    <View style={styles.parentView}>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={this.openControlPanel} style={styles.menuIcon}>
                                <Image source={require('../images/menu.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={styles.title}>會員專區</Text>
                            <Image source={require('../images/setting.png')} style={styles.settingIcon} />
                        </View>

                        <View style={styles.parentInfoView}>
                            <TouchableOpacity onPress={this.props.goMemberEdit}>

                                <View style={styles.avatarView}>
                                    {(this.state.avatarSource === null) ? (
                                        <Image style={styles.avatar} source={{ uri: 'http://163.17.135.185/7thWebApi/Filefolder/' + this.props.login_account + '-Member.png' }} />
                                    ) : (
                                            <Image style={styles.avatar} source={this.state.avatarSource} />
                                        )}
                                </View>
                                <Text style={styles.helloText}>Hello, {this.props.login_account}</Text>
                                <Text style={styles.editText}>查看或編輯個人資料</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.childView}>
                        <Text style={styles.subTitle}>管理您的小孩</Text>
                        <ScrollView>
                            <Container>

                                <Content>
                                    <Card style={{ marginTop: 8 }}>
                                        <CardItem>
                                            <Body>
                                                <Text>
                                                //Your text here
                                                </Text>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                    <Card style={{ elevation: 0.8 }}>
                                        <CardItem>
                                            <Body>
                                                <Text>
                                                //Your text here
                                                </Text>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                    <Card style={styles.card}>
                                        <CardItem>
                                            <Body>
                                                <Text>
                                                //Your text here
                                                </Text>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                    <Card style={styles.card}>
                                        <CardItem>
                                            <Body>
                                                <Text>
                                                //Your text here
                                                </Text>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </Content>
                            </Container>
                        </ScrollView>
                    </View>
                    <ActionButton
                        buttonColor="#009688"
                        onPress={() => { this.props.goAddChild() }}>
                    </ActionButton>

                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
    },
    parentView: {
        width: '100%',
        height: 194,
        backgroundColor: '#144669',
    },
    parentInfoView: {
        width: '100%',
        height: 102,
        backgroundColor: '#144669',
        marginTop: 16,
        flexDirection: 'row',
        alignItems: "stretch",
    },
    menuIcon: {
        marginLeft: 18,
        width: 24,
        height: 24,
        marginTop: 16,
    },
    title: {
        color: '#FFFFFF',
        width: 66,
        height: 24,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        marginTop: 14,
        marginLeft: 32,
    },
    settingIcon: {
        width: 24,
        height: 24,
        marginLeft: 182,
        marginTop: 16,
    },
    childView: {
        width: '100%',
        height: 374,
        backgroundColor: '#F2F2F2',
    },
    card: {
        width: 328,
        height: 60,
        borderRadius: 7,
        marginTop: 16,
        elevation: 0.8,
        //borderRadius: 4,

    },
    subTitle: {
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Roboto-Regular',
        marginTop: 8,
        marginLeft: 149,
        color: '#636566',
    },
    avatarView: {
        width: 72,
        height: 72,
        borderWidth: 5,
        borderColor: '#9ACBD9',
        borderRadius: 37,
        //backgroundColor: 'transparent',
        overflow: 'hidden',
        zIndex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 15,
        marginLeft: 48,
    },
    avatar: {
        width: 37.5 * 2,
        height: 37.5 * 2,
        borderColor: 'rgba(255, 255, 255, 0.61)',
        borderRadius: 37.5
    },
    helloText: {

        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
        marginLeft: 152,
        marginTop: -65,


    },
    editText: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'PingFangTC-Light',
        color: '#FFFFFF',
        marginLeft: 152,
        marginTop: 4,

    }


});

export default Memory;
