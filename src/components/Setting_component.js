
import React, { Component } from 'react';
import SideBarContent from '../containers/SideBarContent';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { List, ListItem, Body, Switch, Card, CardItem } from 'native-base';
// import { Container, Header, Content, Card, CardItem, Icon, Right } from 'native-base';

class Memory extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.Viewstyle}>
                <View style={styles.topbarView}>
                    <TouchableOpacity onPress={() => this.props.BackButton()}>
                        <Image source={require('../images/back.png')} style={styles.topbarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.topbarText}>設定</Text>
                </View>
                <View style={{ backgroundColor: '#F2F2F2' }}>
                    <View style={styles.content}>
                        <Card style={{
                            elevation: 0,
                            marginTop: 15,
                            width: '100%',
                            height: 60
                        }}>
                            <CardItem>
                                <Body style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, color: '#1D1D26', marginLeft: 15, marginTop: 3 }}>
                                        新數據通知
                            </Text>

                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    {
                        //<Switch style={{  marginRight: 10 }} />
                        //     <View
                        //     style={{
                        //         borderBottomColor: '#D4D4D4',
                        //         borderBottomWidth: 1,
                        //         width: '100%',
                        //         opacity: 0.2,
                        //         marginTop: 16
                        //     }}
                        // />
                    }
                    <View style={styles.content}>
                        <Card style={{
                            elevation: 0,
                            marginTop: 5,
                            width: '100%',
                            height: 60
                        }}>
                            <CardItem button onPress={() => this.props.Editpswd()}>
                                <Body style={{ flexDirection: 'row', }}>
                                    <Text style={{ marginTop: 2, fontSize: 18, color: '#1D1D26', marginLeft: 15, fontFamily: "Roboto-Regular", marginTop: 3 }}>
                                        修改密碼
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={styles.content}>
                        <Card style={{
                            elevation: 0,
                            width: '100%',
                            height: 60,
                            marginTop: -3
                        }}>
                            <CardItem button onPress={() => this.props.LogoutClick(this.props.login_account)}>
                                <Body style={{ flexDirection: 'row', }}>
                                    <Text style={{ marginTop: 2, fontSize: 18, color: '#1D1D26', marginLeft: 15, marginTop: 3 }}>
                                        登出
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F2F2F2',
    },
    topbarView: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#144669',
        height: 53,
    },
    topbarIcon: {
        marginLeft: 16,
        marginTop: 16,
    },
    topbarText: {
        marginTop: 14,
        marginLeft: 32,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: 'rgb(255,255,255)',
    },
    content: {
        flexDirection: 'row',

    }
})
export default Memory;