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



class Memory extends Component {
    constructor(props) {
        super(props);
        
    }
    AccountInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'帳號'}
            iconClass={MaterialsIcon}
            iconName={'account-box'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}
           onChangeText={(text) => this.setState({ Account: text })}
            useNativeDriver
        />
    }
    PasswordInput() {
        return <Kohana secureTextEntry={true}
            style={styles.InputTextStyle}
            label={'密碼'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Password: text })}
            useNativeDriver
        />
    }
    render() {
        return (
            //backgroundimage
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage} >

                <View style={styles.Viewstyle}>

                    {/*logoView*/}
                    <View style={styles.logo}>
                        <Text>LOGO</Text>
                    </View>
                    {/*loginView*/}
                    <View>
                        <Text>{"\n"}</Text>
                        {/*Account*/}
                        {this.AccountInput()}
                        <Text>{"\n"}</Text>
                        {/*Password*/}
                        {this.PasswordInput()}
                        <Text>{"\n"}</Text>
                        

                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => {
                            if (this.state.Account == '' || this.state.Password == '') {
                                alert('帳號或密碼不能為空');
                            } else {
                                this.props.LoginButtonClick(this.state.Account, this.state.Password)
                            }
                        }}>
                            <Text style={style = styles.ButtonText}>登入</Text>
                        </TouchableOpacity>


                        <Text style={style = styles.Info}
                            onPress={() => this.props.GoRegister()}
                        >
                            {"\n"}還不是會員？ 前往註冊{"\n"}</Text>

                        <Text style={style = styles.Info} onPress={() => this.props.Forgetpw()}>忘記密碼？</Text>
                    </View>



                </View>
            </Image>
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
    logo: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
    },
    Buttonstyle: {
        backgroundColor: '#AD5A5A',
        width: 100,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    ButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    Info: {
        textAlign: 'center',
    },
    InputTextStyle: {
        backgroundColor: '#EBD6D6',
        borderRadius: 5,
        width: 350
    }


});

export default Memory;