import Toast from 'react-native-root-toast';

//取得小孩資料
export const GetChildrenData = (account,childname,token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_childrendata(account,childname,token)
            .then(data => {
                console.log(data)
                if (data[0].Account != null && data[0].Account != "") {
                    dispatch({
                        type: 'GET_CHILDDATA_SUCCESS', child_data: data[0]
                    })
                } else {
                    dispatch({
                        type: 'GET_CHILDDATA_FAIL'
                    })
                }
            })
            .catch(err => console.log(err));
    };
};

//儲存小孩資料
export const SaveChildrenData = (account, childname, birthdate, gender,token) => {
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
        api.fetch_savechildrendata(account, childname, address, birthdate, gender,token)
            .then(data => {
                console.log(data)
                if (data === "success") {
                    dispatch({
                        type: 'SAVE_CHILDDATA_SUCCESS',Callback:callback
                    })
                } else {
                    dispatch({
                        type: 'SAVE_CHILDDATA_FAIL'
                    })
                }
            })
            .catch(err => console.log(err));
    };
};

//儲存小孩大頭
export const SaveChildrenImage = (account,name,pic64,login_token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_childrenimage(account,name,pic64,login_token)
    };
};

//小孩列表
export const ListChildren = (account,token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_getCdList(account,token)
            .then(data => {
                console.log(data)

                dispatch({
                    type: 'CHILD_CHANGE_SUCCESS',
                    children_list: data.CdName
                })

            })
            .catch(err => console.log(err));
    };
};