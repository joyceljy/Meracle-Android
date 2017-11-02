
import React, { Component } from 'react';
import SideBarContent from '../containers/SideBarContent';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
// import { Container, Header, Content, Card, CardItem, Icon, Right } from 'native-base';

class Memory extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.Viewstyle}>
                <View style={styles.topbarView}>
                    <TouchableOpacity onPress={() => this.props.BackButton() }>
                        <Image source={require('../images/back.png')} style={styles.topbarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.topbarText}>設定</Text>
                </View>
                <View style={styles.content}>
                    <List>
                        <ListItem>


                            <Text>新數據推播通知</Text>

                            <Switch />

                        </ListItem>
                    </List>
                </View>

                <List>
                    <View style={styles.content}>
                        <ListItem button onPress={()=>{this.props.Editpswd()}}>
                            <Text>修改密碼</Text>
                        </ListItem>
                    </View>
                    <View style={styles.content}>
                        <ListItem>
                            <Text>登出</Text>
                        </ListItem>
                    </View>
                </List>

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
        // height: 56,
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