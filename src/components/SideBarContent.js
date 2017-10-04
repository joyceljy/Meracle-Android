import React, { Component } from 'react';
import { View, Image, StyleSheet, Alert,Modal,ListView } from 'react-native';
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

                            <Button transparent
                                onPress={() => {
                                    if (this.props.child_account != "") {
                                        this.props.ChildrenEditClick()
                                    } else {
                                        //顯示錯誤訊息
                                        setTimeout(() => this.setState({
                                            childerr: true
                                        }), 300); // show toast after 0.5s

                                        setTimeout(() => this.setState({
                                            childerr: false
                                        }), 5000); // hide toast after 5s
                                    }
                                }}
                                style={{ width: 288, height: 37 }}>
                                <Left><EntypoIcon name="pencil" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 11, fontFamily: 'monospace', color: "black" }}>小孩主頁</Text>
                                <Right><Icon name="arrow-forward" style={{ fontSize: 12 }} /></Right>
                            </Button>
                            <Button transparent onPress={() => this.props.MemberClick()} style={{ width: 288, height: 37 }}>
                            <Left><EntypoIcon name="lock-open" style={{ fontSize: 12 }} /></Left>
                            <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>會員專區</Text>
                            <Right>
                                <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                            </Right>
                        </Button>
                            <Button transparent onPress={() => this.props.ChildChangeClick(this.props.login_account)} style={{ width: 288, height: 37 }}>
                                <Left><EntypoIcon name="lock-open" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>切換帳號</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.EditpwdClick()} style={{ width: 288, height: 37 }}>
                                <Left><EntypoIcon name="lock-open" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>修改密碼</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.GamePointClick()} style={{ width: 288, height: 37 }}>
                                <Left><MaterialCommunityIcon name="gamepad-variant" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>個人遊戲分析圖</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.GamePointcclick()} style={{ width: 288, height: 37 }}>
                            <Left><MaterialCommunityIcon name="gamepad-variant" style={{ fontSize: 12 }} /></Left>
                            <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>遊戲分析圖</Text>
                            <Right>
                                <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                            </Right>
                        </Button>
                            <Button transparent onPress={() => this.props.PersonalHighMemoryTimeClick()} style={{ width: 288, height: 37 }}>
                                <Left><Ionicons name="md-time" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>個人記憶力最佳時段</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.PersonalMemClick()} style={{ width: 288, height: 37 }}>
                                <Left><EntypoIcon name="bar-graph" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>個人記憶力成長狀態</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.EverySolutionMemClick()} style={{ width: 288, height: 37 }}>
                                <Left><MaterialsIcon name="timeline" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>大眾孩童各狀況記憶力分布</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.AllHighMemClick()} style={{ width: 288, height: 37 }}>
                                <Left><Ionicons name="md-time" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>大眾孩童記憶力最佳時段</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.ParentsTroubleClick()} style={{ width: 288, height: 37 }}>
                                <Left><EntypoIcon name="slideshare" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>大眾孩童生理狀態統計</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.AvgSleepingClick()} style={{ width: 288, height: 37 }}>
                                <Left><MaterialCommunityIcon name="bell-sleep" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>大眾孩童平均睡眠時間</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.FoodClick()} style={{ width: 288, height: 37 }}>
                                <Left><MaterialCommunityIcon name="food-fork-drink" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>大眾孩童五大類食物攝取分布</Text>
                                <Right>
                                    <Icon name="arrow-forward" style={{ fontSize: 12, color: "black" }} />
                                </Right>
                            </Button>
                            <Button transparent onPress={() => this.props.ChildChangeClick()} style={{ width: 288, height: 37 }}>
                                <Left><MaterialCommunityIcon name="food-fork-drink" style={{ fontSize: 12 }} /></Left>
                                <Text style={{ fontSize: 10, fontFamily: 'monospace', color: "black" }}>新增小孩</Text>
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
                            <Toast
                                backgroundColor='rgba(0,0,0,0.8)'
                                visible={this.state.childerr}
                                position={600}
                                shadow={false}
                                animation={false}
                                hideOnPress={true}
                            >請先選擇要切換至的小孩帳號！</Toast>
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
