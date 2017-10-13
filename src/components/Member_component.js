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
        this.state = {
            kidlistpre: [],
        }
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    kidlist = function (options) {
        if (options === 0) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                top: -11,
                left: -10,
                backgroundColor: '#9ACBD9'
            }
        }
        else if (options === 1) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                top: -11,
                left: -10,
                backgroundColor: '#F5808B'
            }
        }
        else if (options === 2) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                top: -11,
                left: -10,
                backgroundColor: '#F2992E'
            }
        }
        else if (options === 3) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                top: -11,
                left: -10,
                backgroundColor: '#2F9A9E'
            }
        }
        else if (options === 4) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                top: -11,
                left: -10,
                backgroundColor: '#A77DC2'
            }
        }
    }
    underbarstyle() {
        arr = this.props.childList;
        for (let key in arr) {
            return {
                width: 384,
                backgroundColor: '#F2F2F2'
            }
        }
    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        kidlistpre = this.props.childList;
        let kidlistaft = [];
        for (let key in kidlistpre) {
            for (let i = 0; i < kidlistpre[key].length; i++) {
                console.log(key);
                console.log(kidlistpre[key][i].CdName);
                console.log(kidlistpre[key][i].Gender);
                let imgurl = "http://meracal.azurewebsites.net/Filefolder/" + kidlistpre[key][i].Imageurl;
                if (kidlistpre[key][i].Gender === "男" || kidlistpre[key][i].Gender === "女" && kidlistpre[key][i].Imageurl === "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button onPress={() => this.props.testClick()}>
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={require('../images/avatar_boy.png')} style={{ left: 1.9, top: 3.5 }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>
                                        <Image source={require('../images/arrow_right copy 4.png')} style={{ left: 205, top: -4 }}></Image>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }
                else if (kidlistpre[key][i].Gender === "男" || kidlistpre[key][i].Gender === "女" && kidlistpre[key][i].Imageurl != "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button >
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={{ url: imgurl }} style={{ left: 1.9, top: 3.5, width: 40, height: 40, borderRadius: 50 }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>
                                        <Image source={require('../images/arrow_right copy 4.png')} style={{ left: 205, top: -4 }}></Image>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }
            };
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
                            {
                                kidlistaft
                            }
                            <View style={{ marginBottom: 12 }}></View>
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
        borderRadius: 100,
        //backgroundColor: 'transparent',
        //overflow: 'hidden',
        opacity: 0.1,
        zIndex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 15,
        marginLeft: 48,
    },
    avatar: {
        width: 45.8,
        height: 45.8,
        borderRadius: 100
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

    },
    kidname: {
        justifyContent: 'center',
        left: 54,
        top: -12,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#FFFFFF',
        letterSpacing: 0.5,
        lineHeight: 24,
        // width: 50,
        height: 24,
        // backgroundColor:'red'
    },
    underbar: {
        // top: 262,
        width: 384,
        // height: 300,
        // marginBottom:10,
        backgroundColor: '#F2F2F2'
    },
    underbartext: {
        fontSize: 10,
        letterSpacing: 0.5,
        lineHeight: 16,
        color: '#636566',
        fontFamily: 'PingFangTC-Light',
        top: 8,
        left: 133
    },
    cardsize: {
        top: 8,
        left: 8,
        // bottom: 20,
        width: 368,
        height: 54,
    },
    kidcardname: {
        left: 20,
        color: '#144669',
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 24,
        top: -4,
        fontFamily: 'Roboto-Regular',
    },


});

export default Memory;
