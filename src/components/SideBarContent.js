import React, { Component } from 'react';
import { View, Image, StyleSheet, Alert, Modal, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, List, ListItem, Button } from 'native-base';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

    render() {
        return (
            <Image
                source={require('../images/drawer.png')}
                style={styles.backgroundImage}>
                <Container  >
                    <Content >
                        <List>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 12,
                                fontFamily: 'monospace',
                                color: 'white',
                                width: 288,
                                height: 80,
                                textAlignVertical: "center"

                            }}>
                                {this.props.login_account}
                            </Text>

                            <Button transparent onPress={() => this.props.HomeClick()} style={{ width: 288, height: 37 }}>
                                <Left><EntypoIcon name="lock-open" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>首頁</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.AllkidsHomeClick()} style={{ width: 288, height: 37 }}>
                            <Left><EntypoIcon name="lock-open" style={{ fontSize: 12 }} /></Left>
                            <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>大眾首頁</Text>
                            <Right>
                                <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                            </Right>
                        </Button>
                            <Button transparent onPress={() => this.props.MemberClick()} style={{ width: 288, height: 37 }}>
                                <Left><EntypoIcon name="lock-open" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>會員專區</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>


                            <Button transparent onPress={() => this.props.LogoutClick()} style={{ width: 288, height: 37 }}>
                                <Left><MaterialCommunityIcon name="logout" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>登出</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            {/*<Content>rgba(0,0,0,0.8)
                                <Card
                                    style={{
                                        elevation: 0,//remove shadow on Android
                                        shadowOpacity: 0,//remove shadow on iOS
                                        width: 278,
                                    }}>

                               
                                <CardItem button onPress={() => this.props.EverySolutionMemClick()}>
                                    <Left><MaterialsIcon name="timeline" style={{ fontSize: 12 }} /></Left>
                                    <Text style={{ fontSize: 10, fontFamily: 'monospace' }}>大眾孩童各狀況記憶力分布</Text>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ fontSize: 12, color: "rgba(0,0,0,0.8)" }} />
                                    </Right>
                                </CardItem>
                            </Content>*/}

                        </List>

                    </Content>
                </Container>

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
            </Image>

        );
    }

}
let styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },


});

export default Memory;
