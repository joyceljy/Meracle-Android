import Toast from 'react-native-root-toast';

//取得會員資料
export const GetMemberData = (account) => {
    return (dispatch, getState, { api }) => {
        api.fetch_memberdata(account)
            .then(data => {
                console.log(data)
                if (data[0].Account != null && data[0].Account != "") {
                    dispatch({
                        type: 'GET_MEMBERDATA_SUCCESS', member_data: data[0]
                    })
                } else {
                    dispatch({
                        type: 'GET_MEMBERDATA_FAIL'
                    })
                }
            })
            .catch(err => console.log(err));
    };
};

//儲存會員資料
export const SaveMemberData = (account, name, address, birthdate, gender) => {
    const callback = (message) => {
        // 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        let toast = Toast.show(message, {
            duration: 50000, // toast显示时长
            position: Toast.positions.BOTTOM, // toast位置
            shadow: false, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时

        });
    }
    return (dispatch, getState, { api }) => {
        api.fetch_savememberdata(account, name, address, birthdate, gender)
            .then(data => {
                console.log(data)
                if (data === "success") {
                    dispatch({
                        type: 'SAVE_MEMBERDATA_SUCCESS',Callback:callback
                    })
                } else {
                    dispatch({
                        type: 'SAVE_MEMBERDATA_FAIL'
                    })
                }
            })
            .catch(err => console.log(err));
    };
};

// //儲存會員大頭
// export const SaveMemberImage = (account, image) => {
//     return (dispatch, getState, { api }) => {
//         api.fetch_savememberimage(account, image)
//             .then(data => {
//                 console.log(data)

//                 dispatch({
//                     type: 'SAVE_MEMBERIMAGE_SUCCESS',
//                     member_imageurl: data.result
//                 })

//             })
//             .catch(err => console.log(err));
//     };
// };