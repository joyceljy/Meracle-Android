import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import ActionButton from 'react-native-action-button';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';
import { Actions } from 'react-native-router-flux';
var { height, width } = Dimensions.get('window');

class Memory extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // kidlistpre: [],
        // }
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
                // bottom: 10,
                marginLeft: 10,
                marginTop: 8,
                backgroundColor: '#9ACBD9'
            }
        }
        else if (options === 1) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 10,
                marginTop: 8,
                backgroundColor: '#F5808B'
            }
        }
        else if (options === 2) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 10,
                marginTop: 8,
                backgroundColor: '#F2992E'
            }
        }
        else if (options === 3) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 10,
                marginTop: 8,
                backgroundColor: '#2F9A9E'
            }
        }
        else if (options === 4) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 10,
                marginTop: 8,
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
        let kidlistaft = [];
        if (this.props.login_account != null || this.props.login_account != "") {
            if (this.props.childList != null || this.props.childList != "") {
                kidlistpre = this.props.childList;
                for (let key in kidlistpre) {
                    for (let i = 0; i < kidlistpre[key].length; i++) {
                        let imgurl = 'https://www.meracle.me/home/Filefolder/' + kidlistpre[key][i].Imageurl;
                        //console.log(kidlistpre[key][i].Imageurl);
                        if (kidlistpre[key][i].Imageurl === "DefaultImg.png") {
                            kidlistaft.push(
                                <TouchableOpacity onPress={() => this.props.ChildEdit(this.props.login_account, kidlistpre[key][i].CdName, this.props.login_token)}>
                                    <View style={styles.cardsize}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={this.kidlist(i)}>
                                                <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 4, marginLeft: 2, }}></Image>
                                            </View>
                                            <Text style={styles.kidcardname}>
                                                {kidlistpre[key][i].CdName}
                                            </Text>
                                            <Image source={require('../images/edit.png')} style={{ marginTop: 15 }}></Image>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                        else if (kidlistpre[key][i].Imageurl != "DefaultImg.png") {
                            console.log(imgurl);
                            kidlistaft.push(
                                <TouchableOpacity onPress={() => this.props.ChildEdit(this.props.login_account, kidlistpre[key][i].CdName, this.props.login_token)}>
                                    <View style={styles.cardsize}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={this.kidlist(i)}>
                                                <Image source={{ uri: 'http://www.meracle.me/home/Filefolder/' + kidlistpre[key][i].Imageurl }} style={{ marginTop: 5, marginLeft: 5, width: 30, height: 30, borderRadius: 100 }}></Image>
                                            </View>
                                            <Text style={styles.kidcardname}>
                                                {kidlistpre[key][i].CdName}
                                            </Text>
                                            <Image source={require('../images/edit.png')} style={{ marginTop: 15 }}></Image>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                    };
                }

                console.log(kidlistaft);
            }
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
                            <TouchableOpacity onPress={() => this.props.SettingClick()} style={styles.settingIcon}>
                                <Image source={require('../images/setting.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.parentInfoView}>
                            <TouchableOpacity onPress={this.props.goMemberEdit}>

                                <View style={styles.avatarView}>
                                    {(this.state.avatarSource === null) ? (
                                        <Image style={styles.avatar} source={{ uri: 'https://www.meracle.me/home/Filefolder/' + this.state.imageurl }} />
                                    ) : (
                                            <Image style={styles.avatar} source={this.state.avatarSource} />
                                        )}
                                </View>
                                <Text style={styles.helloText}>Hello, {this.props.login_account}</Text>
                                <Text style={styles.editText}>查看或編輯個人資料</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.addBtn}>
                    <TouchableOpacity onPress={()=>Actions.ChildrenRegister()}>
                        <Image style={styles.addBtnIcon} source={require('../images/add.png')} />
                    </TouchableOpacity>
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
                   

                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        zIndex: 0,
    },
    parentView: {
        width: width,
        height: 194,
        backgroundColor: '#144669',
        zIndex: 0,
    },
    parentInfoView: {
        width: width,
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
        marginLeft: width - 180,
        marginTop: 16,
    },
    childView: {
        width:width,
        height:height,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        zIndex: 0,
    },

    subTitle: {
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Roboto-Regular',
        marginTop: 8,
        // marginLeft: 149,
        color: '#636566',
        marginBottom: 8,
    },
    avatarView: {
        width: 72,
        height: 72,
        borderWidth: 5,
        borderColor: '#9ACBD9',
        borderRadius: 100,
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,0.9)',
        marginTop: 15,
        marginLeft: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 62,
        height: 62,
        borderRadius: 30,
        alignSelf: 'center',

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
    cardsize: {
        marginTop: 5,
        marginLeft: 10,
        width: 330,
        height: 55,
        elevation: 0.8,
        borderRadius: 4,
        backgroundColor: "white",
        
    },
    kidcardname: {
        marginTop: 15,
        marginLeft: 30,
        color: '#144669',
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        width:200,
    },

    addBtn: {
        
        zIndex: 1,
        borderRadius: 100,
        backgroundColor: '#009688',
        shadowOpacity: 6,
        shadowColor: 'rgba(0,0,0,0.12)',
        width: 48,
        height: 48,
        marginTop: -30,
        marginLeft: width - 60,

    },
    addBtnIcon: {
        marginLeft: 12,
        marginTop: 12,
    }
});

export default Memory;
