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
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import ActionButton from 'react-native-action-button';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';
var { height, width } = Dimensions.get('window');

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
                marginTop: -7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#9ACBD9'
            }
        }
        else if (options === 1) {
            return {
                marginTop: -7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#F5808B'
            }
        }
        else if (options === 2) {
            return {
                marginTop: - 7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#F2992E'
            }
        }
        else if (options === 3) {
            return {
                marginTop: - 7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#2F9A9E'
            }
        }
        else if (options === 4) {
            return {
                marginTop: - 7,
                width: 40,
                height: 40,
                borderRadius: 50,
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
                //let imgurl = 'https://www.meracle.me/home/Filefolder/' + kidlistpre[key][i].Imageurl;
                //console.log(kidlistpre[key][i].Imageurl);
                if (kidlistpre[key][i].Gender === "男" && kidlistpre[key][i].Imageurl === "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button onPress={() => this.props.ChildEdit(this.props.login_account, kidlistpre[key][i].CdName, this.props.login_token)}>
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 4, marginLeft: 2, }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>

                                    </Body>
                                    <Image source={require('../images/edit.png')} style={{ marginBottom: 25, marginRight: -5 }}></Image>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }
                else if (kidlistpre[key][i].Gender === "女" && kidlistpre[key][i].Imageurl === "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button onPress={() => this.props.ChildEdit(this.props.login_account, kidlistpre[key][i].CdName, this.props.login_token)}>
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 4, marginLeft: 2, }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>

                                    </Body>
                                    <Image source={require('../images/edit.png')} style={{ marginBottom: 25, marginRight: -5 }}></Image>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }
              
               
            };
        }
        console.log(kidlistaft);
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
        width: width,
        height: 194,
        backgroundColor: '#144669',
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
        width: width,
        height: 374,
        backgroundColor: '#F2F2F2',
    },

    subTitle: {
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Roboto-Regular',
        marginTop: 8,
        marginLeft: 149,
        color: '#636566',
        marginBottom: -8,
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
        width: 65,
        height: 65,
        borderRadius: 100,
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
        marginLeft: 16,
        marginRight: 16,

        height: 60,
        marginTop: 8,
        borderRadius: 7
    },
    kidcardname: {
        marginLeft: 20,
        color: '#144669',
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
    },


});

export default Memory;
