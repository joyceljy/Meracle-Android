import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';


class Memory extends Component {
    constructor(props) {
        super(props);
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
    }
    NewPasswordInput() {
        return <Kohana secureTextEntry={true}
            style={styles.InputTextStyle}
            label={'新密碼'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Password: text })}
            useNativeDriver
        />
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


                <View style={styles.Viewstyle}>

                    <Image style={{ width: 125, height: 125 }} source={require('../images/Editpassword.png')} />
                    <Text style={{ fontSize: 20, color: 'white' }}>{"\n"}修改密碼{"\n"}</Text>
                    <Text style={{ color: 'white' }}>請輸入以下資訊修改新密碼{"\n"}</Text>

                    <View>
                        <Text>{"\n"}</Text>
                        {/*NewPassword*/}
                        {this.NewPasswordInput()}
                        <Text>{"\n"}</Text>


                        <TouchableOpacity style={styles.Buttonstyle1} onPress={() => {
                            if (this.state.Account == '') {
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 500); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 4000); // hide toast after 4s
                            } else {
                                this.props.EditPasswordClick(this.props.login_account, this.state.Password)
                            }
                        }}>
                            <Text style={style = styles.ButtonText1}>送出</Text>
                        </TouchableOpacity>
                    </View>

                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.err1}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >密碼不能為空！</Toast>

                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.success1}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >修改成功!</Toast>


                </View>
            </Drawer>

        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
         alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },

    Buttonstyle1: {
        backgroundColor: 'rgb(255,255,255)',
        width: 350,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,

    },
    Buttonstyle2: {
        //backgroundColor: 'rgb(255,255,255)',
        width: 350,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white'

    },
    ButtonText1: {
        textAlign: 'center',
        color: 'black'
    },
    ButtonText2: {
        textAlign: 'center',
        color: 'white'
    },
    InputTextStyle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 30,
        width: 350
    },
    menuIcon: {
        width: 48,
        height: 45
    }
    //backgroundimage
    // <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage} ></Image>

});

export default Memory;