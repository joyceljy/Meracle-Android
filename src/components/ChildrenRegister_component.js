import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight

} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Toast from 'react-native-root-toast';
import RegisterTopBar from '../containers/RegisterTopBar_container';
//import CustomMultiPicker from "react-native-multiple-select-list";
import { SinglePickerMaterialDialog, MultiPickerMaterialDialog } from 'react-native-material-dialog';
var ImagePicker = require('react-native-image-picker');



const Q1List = [
    "正常",
    "過動",
    "自閉",
    "學習障礙",
    "智能障礙",
    "其他特殊疾病",
]

const Q2List = [
    "6小時以下",
    "6-7小時",
    "7-8小時",
    "8-9小時",
    "9-10小時",
    "10小時以上",
]

const Q3List = [
    "全穀根莖類",
    "蛋豆魚肉類",
    "乳製品",
    "蔬菜類",
    "水果類",
]

class Memory extends Component {
    constructor(props) {
        super(props);

    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var newDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString();
        this.setState({ birthdate: newDate })
        this._hideDateTimePicker();
    };


    ImageSelect = () => {
        const options = {
            cancelButtonTitle: '取消',
            title: '選擇大頭貼',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '從相簿中選擇',
            customButtons: [],
            allowsEditing: true,

            storageOptions: {
                cameraRoll: true,
                skipBackup: true,
                waitUntilSaved: true,
                path: 'images'
            },
            quality: 0.6
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log(source);
                this.setState({
                    avatarSource: source,
                    imagedata_base64: response.data
                });
                //this.props.SaveImage(this.props.login_account, this.state.imagedata_base64)
            }
        });


    }

    setQ3(q3, length) {
        let str = '';
        for (i = 0; i <= length - 1; i++) {
            console.log(this.state.Q3showText);
            if (q3[i].label === "全穀根莖類") {
                this.setState({ cereal: true });
                str = str + "全穀根莖類，";
            }
            if (q3[i].label === "蛋豆魚肉類") {
                this.setState({ meat: true })
                str = str + "蛋豆魚肉類，";
            }
            if (q3[i].label === "乳製品") {
                this.setState({ milk: true })
                str = str + "乳製品，";
            }
            if (q3[i].label === "蔬菜類") {
                this.setState({ veg: true })
                str = str + "蔬菜類，";
            }
            if (q3[i].label === "水果類") {
                this.setState({ fruit: true })
                str = str + "水果類，";
            }
        }
        if (str.length > 14) {
            this.setState({ Q3showText: str.substr(0, 14) + '...' });
        } else {
            this.setState({ Q3showText: str });
        }


    }

    time() {
        var count = 0;
        this.timer = setInterval(
            () => {
                count++
                if (count == 4) {
                    clearTimeout(this.timer)
                    this.setState({
                        skipMember: true,

                    });
                    clearTimeout(this.timer);
                }
            }, 1000)

        if (this.state.skipMember == true) {
            this.props.skipMemberButton();
        }
    }

    render() {
        //第一頁
        if (this.state.RegisterStep == '1') {
            return (
                //backgroundimage

                <View style={styles.Viewstyle}>

                    {/*registerTopBar */}
                    <View><RegisterTopBar /></View>
                    {/*registerView*/}
                    <View>
                        <Text style={styles.title}>輸入孩童的基本資料</Text>
                        {/*Name*/}
                        <View style={styles.Inputtextview}>
                            <Image source={require('../images/person.png')} style={styles.InputtextIcon} />
                            <TextInput
                                style={styles.InputtextText}
                                onChangeText={(text) => this.setState({ Name: text })}
                                value={this.state.Name}
                                placeholder="輸入姓名"
                                placeholderStyle={styles.InputtextPlaceholder}
                                placeholderTextColor='rgba(255,255,255,0.5)'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        {/*Birthday*/}
                        <View style={styles.Inputtextview}>
                            <Image source={require('../images/calendar.png')} style={styles.InputtextIcon} />
                            <TextInput
                                style={styles.InputtextText}
                                onFocus={() => this._showDateTimePicker()}
                                onChangeText={() => this._showDateTimePicker()}
                                value={this.state.birthdate}
                                placeholder="出生年月日"
                                placeholderStyle={styles.InputtextPlaceholder}
                                placeholderTextColor='rgba(255,255,255,0.5)'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />

                        <Text style={styles.genderTitle}>選擇孩童的性別</Text>



                        {/*Gender*/}
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight style={[styles.genderView, this.state.genderSelected === 0 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                onPress={() => {
                                    this.setState({
                                        genderSelected: 0,
                                        gender: '男'
                                    })
                                }} >

                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={styles.genderImage}
                                        source={require('../images/avatar_boy.png')}
                                    />
                                    <Text style={styles.genderText}>男孩</Text>
                                </View>

                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.genderView, this.state.genderSelected === 1 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                onPress={() => {
                                    this.setState({
                                        genderSelected: 1,
                                        gender: '女'
                                    })
                                }} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={styles.genderImage}
                                        source={require('../images/avatar_girl.png')}
                                    />
                                    <Text style={styles.genderText}>女孩</Text>
                                </View>

                            </TouchableHighlight>
                        </View>

                        <TouchableOpacity style={[styles.nextButton, { marginTop: 64 }]} onPress={() => {
                            //判斷小孩名稱是否重複
                            //this.props.checkChildButton(this.props.login_account, this.state.Name);
                            if (this.state.Name == '' || this.state.birthdate == '') {

                                //顯示錯誤訊息
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 100); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 5000); // hide toast after 5s
                            } else {



                                this.props.changeRegisterStep('2');
                            }
                        }}>
                            <Text style={[styles.nextButtonText, { marginLeft: 88 }]}>繼續下一步</Text>
                        </TouchableOpacity>


                    </View>

                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.4)'
                        visible={this.state.err1}
                        position={502}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                        textColor={'255,255,255,0.8'}
                    >欄位不能為空！</Toast>

                </View>

            );
        }
        //第二頁
        if (this.state.RegisterStep == '2') {
            return (
                //backgroundimage

                <View style={styles.Viewstyle}>

                    {/*registerTopBar */}
                    <View><RegisterTopBar /></View>

                    <Text style={styles.imageTitle}>專屬您小孩的大頭貼</Text>
                    <View style={[styles.imageView, { marginLeft: 128 }]}>
                        {(this.state.avatarSource === null) ? (
                            <Image style={styles.avatar} source={require('../images/avatar_boy copy 2.png')} />
                        ) : (
                                <Image style={styles.avatar} source={this.state.avatarSource} />
                            )}

                    </View>
                    <Text style={styles.otherImagetitle}>或是您可以上傳其他照片</Text>

                    <TouchableOpacity style={styles.uploadImageView} onPress={this.ImageSelect}>
                        <Image
                            style={styles.uploadImage}
                            source={require('../images/upload.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.nextButton, { marginTop: 64 }]} onPress={() => {
                        this.props.changeRegisterStep('3');
                    }}>
                        <Text style={[styles.nextButtonText, { marginLeft: 88 }]}>繼續下一步</Text>
                    </TouchableOpacity>

                </View>

            );
        }

        //第三頁
        if (this.state.RegisterStep == '3') {
            return (

                <View style={styles.Viewstyle}>

                    {/*registerTopBar */}
                    <View><RegisterTopBar /></View>

                    <Text style={styles.qTitle}>
                        {'               '}填寫問卷 {'\n'}
                        幫助我們更了解您的孩童
                    </Text>

                    <Text style={styles.qSubtitle}>孩童的狀況</Text>
                    <View style={styles.Inputtextview}>
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ Q1visible: true })}
                            value={this.state.Q1selectedItem.label}
                            placeholder="請選擇"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            onFocus={() => {
                                this.setState({ Q1visible: true });
                            }}
                            onChangeText={() => {
                                this.setState({ Q1visible: true });
                            }}

                        />
                    </View>


                    <Text style={styles.qSubtitle}>孩童的睡眠時間</Text>
                    <View style={styles.Inputtextview}>
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ Q2visible: true })}
                            value={this.state.Q2selectedItem.label}
                            placeholder="請選擇"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            onFocus={() => {
                                this.setState({ Q2visible: true });
                            }}
                            onChangeText={() => {
                                this.setState({ Q2visible: true });
                            }}
                        />
                    </View>

                    <Text style={styles.qSubtitle}>較注重孩童的飲食</Text>
                    <View style={styles.Inputtextview}>
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ Q3visible: true })}
                            value={this.state.Q3showText}
                            placeholder="請選擇"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            onFocus={() => {
                                this.setState({ Q3visible: true });
                            }}
                            onChangeText={() => {
                                this.setState({ Q3visible: true });
                            }}
                        />
                    </View>

                    <TouchableOpacity style={[styles.nextButton, { marginTop: 64 }]} onPress={() => {
                        if (this.state.Q1selectedItem != ''
                            && this.state.Q2selectedItem != ''
                            && this.state.Q3showText != '') {
                            //儲存問卷
                            //this.props.saveQButton(this.props.login_account, this.state.Q1selectedItem.label, this.state.Q2selectedItem.label, this.state.fruit, this.state.veg,
                            // this.state.cereal, this.state.meat, this.state.milk)
                            //儲存小孩基本資料
                            //this.props.ChildRegisterButton(this.props.login_account, this.state.Name, this.state.birthdate, this.state.gender)
                            //儲存小孩照片
                            //this.props.saveChildpicButton(this.props.login_account, this.state.Name, this.state.imagedata_base64);
                            //跳至第四步驟
                            this.props.changeRegisterStep('4');
                        } else {
                            //顯示錯誤訊息
                            setTimeout(() => this.setState({
                                err2: true
                            }), 300); // show toast after 0.5s

                            setTimeout(() => this.setState({
                                err2: false
                            }), 5000); // hide toast after 5s
                        }

                    }}>
                        <Text style={[styles.nextButtonText, { marginLeft: 116.5 }]}>完成</Text>

                    </TouchableOpacity>

                    {/*PopupDialog*/}

                    <SinglePickerMaterialDialog
                        title={'孩童的狀況'}
                        titleColor={'#1D1D26'}
                        backgroundColor={'#FFFFFF'}
                        items={Q1List.map((row, index) => ({ value: index, label: row }))}
                        visible={this.state.Q1visible}
                        //selectedItem={'正常'}
                        okLabel={'確定'}
                        cancelLabel={'取消'}
                        scrolled={true}
                        onCancel={() => this.setState({ Q1visible: false })}
                        onOk={(result) => {
                            this.setState({ Q1visible: false });
                            this.setState({ Q1selectedItem: result.selectedItem });
                        }} />

                    <SinglePickerMaterialDialog
                        title={'孩童的睡眠時間'}
                        titleColor={'#1D1D26'}
                        backgroundColor={'#FFFFFF'}
                        items={Q2List.map((row, index) => ({ value: index, label: row }))}
                        visible={this.state.Q2visible}
                        //selectedItem={'正常'}
                        okLabel={'確定'}
                        cancelLabel={'取消'}
                        scrolled={true}
                        onCancel={() => this.setState({ Q2visible: false })}
                        onOk={(result) => {
                            this.setState({ Q2visible: false });
                            this.setState({ Q2selectedItem: result.selectedItem });
                        }} />


                    <MultiPickerMaterialDialog
                        title={"較注重孩童的飲食"}
                        titleColor={'#1D1D26'}
                        backgroundColor={'#FFFFFF'}
                        items={Q3List.map((row, index) => {
                            return { value: index, label: row }
                        })}
                        visible={this.state.Q3visible}
                        //selectedItems={this.state.multiPickerSelectedItems}
                        onCancel={() => this.setState({ Q3visible: false })}
                        onOk={(result) => {
                            this.setState({ Q3visible: false });
                            this.setState({ Q3selectedItem: result.selectedItems });
                            this.setState({ Q3showText: '' })
                            this.setQ3(result.selectedItems, result.selectedItems.length);

                        }} />

                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.4)'
                        visible={this.state.err2}
                        position={500}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                        textColor={'rgba(255,255,255,0.8)'}
                    >有題目未選擇！</Toast>

                </View>

            );
        }


        //第四頁
        if (this.state.RegisterStep == '4') {
            return (
                <View style={styles.Viewstyle}>
                    <View><RegisterTopBar /></View>

                    <Text style={styles.finishTitle}>{'      '}感謝您完成問卷{'\n'}
                        您已成功新增一名小孩</Text>

                    <View style={styles.finishProfile}>
                        <View style={[styles.imageView, { marginLeft: 36 }]}>
                            {(this.state.avatarSource === null) ? (
                                <Image style={styles.avatar} source={require('../images/avatar_boy copy 2.png')} />
                            ) : (
                                    <Image style={styles.avatar} source={this.state.avatarSource} />
                                )}

                        </View>
                        <Text style={styles.finishName}>{this.state.Name}</Text>
                        <Text style={styles.finishBirth}>{this.state.birthdate}</Text>
                    </View>

                    {this.time()}

                </View>

            );
        }
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        width: '100%',
        backgroundColor: '#144669',
    },

    nextButton: {
        backgroundColor: '#009688',
        width: 272,
        height: 56,
        borderRadius: 100,
        shadowOffset: { width: 0.6, height: 8, },
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowOpacity: 0,
        marginLeft: 56,
    },
    nextButtonText: {
        marginTop: 16,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Medium',
        color: '#FFFFFF',
    },
    Inputtextview: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 100,
        width: 304,
        height: 48,
        marginTop: 16,
        marginLeft: 40,
    },
    InputtextText: {
        width: 250,
        marginLeft: 16,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
    },
    InputtextPlaceholder: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
    },
    InputtextIcon: {
        marginTop: 12,
        marginLeft: 24,

    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        marginTop: 40,
        marginLeft: 117,
        marginBottom: 16,
        color: '#FFFFFF',
    },
    genderTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        marginTop: 40,
        marginLeft: 134,
        color: '#FFFFFF',
    },
    genderImage: {
        marginTop: 8,
        marginLeft: 16,
    },

    genderView: {
        flexDirection: 'row',
        //backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 100,
        width: 133,
        height: 48,
        marginTop: 32,
        marginLeft: 51,
    },
    genderView2: {
        flexDirection: 'row',
        //backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 100,
        width: 133,
        height: 48,
        marginTop: 32,
        marginLeft: 16,
    },
    genderText: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'PingFangTC-Medium',
        marginTop: 12,
        marginLeft: 16,
        color: '#FFFFFF',
    },
    imageTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        marginTop: 40,
        marginLeft: 116.5,
        color: '#FFFFFF',
    },
    imageView: {
        backgroundColor: '#9ACBD9',
        width: 128,
        height: 128,
        marginTop: 16,
        //marginLeft: 128,
        borderRadius: 100,
    },
    avatar: {
        marginTop: 24,
        marginLeft: 19,
    },
    otherImagetitle: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'PingFangTC-Regular',
        marginTop: 48,
        marginLeft: 100,
        color: '#FFFFFF',
    },
    uploadImageView: {
        backgroundColor: '#FFFFFF',
        width: 60,
        height: 60,
        borderRadius: 100,
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOpacity: 6,
        marginTop: 16,
        marginLeft: 162,
        marginBottom: -4,
    },
    uploadImage: {
        marginLeft: 18,
        marginTop: 18,
    },
    qTitle: {
        marginLeft: 100,
        marginTop: 40,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
        marginBottom: 16,
    },
    qSubtitle: {
        marginLeft: 48,
        marginTop: 16,
        fontSize: 12,
        fontFamily: 'Roboto-Light',
        color: '#FFFFFF',
        lineHeight: 20,
        marginBottom: -8,
    },
    multiPickerView: {
        marginLeft: 32,
    },
    multiPickerTitle: {
        marginLeft: -8,
        marginTop: 14,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: '#1D1D26',
    },
    finishTitle: {
        marginLeft: 108.5,
        marginTop: 40,
        fontSize: 16,
        fontFamily: 'PingFangTC-Regular',
        color: '#FFFFFF',
    },
    finishProfile: {
        backgroundColor: '#FFFFFF',
        width: 200,
        height: 232,
        borderRadius: 8,
        shadowOpacity: 6,
        marginTop: 40,
        marginLeft: 92,
    },
    finishName: {
        marginLeft: 72,
        marginTop: 16,
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: '#144669',
        lineHeight: 24,
    },
    finishBirth: {
        marginLeft: 52,
        marginTop: 8,
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: '#144669',
        lineHeight: 24,
    }

});

export default Memory;
