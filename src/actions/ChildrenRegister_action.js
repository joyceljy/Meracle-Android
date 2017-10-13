import Toast from 'react-native-root-toast';

//新增小孩資料
export const ChildrenRegisterAction = (account,name, birth, gender,login_token) => {
    const callback = (message) => {
        // 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        let toast = Toast.show(message, {
            duration: 5000, // toast显示时长
            position: Toast.positions.BOTTOM, // toast位置
            shadow: false, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时

        });
    }

    return (dispatch, getState, { api }) => {
        api.fetch_childrenregister(account,name, birth, gender,login_token)
            .then(data => {
                //console.log(data)
                if (data.result === "新增成功") {
                    dispatch({
                        type: 'CHILD_REG_SUCCESS', Message: data.result, Callback: callback
                    })
                } else {
                    dispatch({
                        type: 'CHILD_REG_FAIL', Message: data.result, Callback: callback
                    })
                }
            })
            .catch(err => console.log(err));
    };
};

//新增問卷
export const RegisterSurveyAction = (account,name,problem,sleep,fruit,veg,cereal,meat,milk,login_token) => {
    const callback = (message) => {
        // 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        let toast = Toast.show(message, {
            duration: 5000, // toast显示时长
            position: Toast.positions.BOTTOM, // toast位置
            shadow: false, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时

        });
    }

    return (dispatch, getState, { api }) => {
        api.fetch_registersurvey(account,name,problem,sleep,fruit,veg,cereal,meat,milk,login_token)
            .then(data => {
                //console.log(data)
                if (data.m_Item1 === "填寫成功") {
                    dispatch({
                        type: 'REG_SURVEY_SUCCESS',Message:data.m_Item1,Callback:callback
                    })
                } else {
                    dispatch({
                        type: 'REG_SURVEY_FAIL'
                    })
                }
            })
            .catch(err => console.log(err));
    };
};

//新增小孩大頭
export const ChildImageActionn = (account,name,pic64,login_token) => {

    return (dispatch, getState, { api }) => {
        api.fetch_childrenimage(account,name,pic64,login_token)
     };
};

//檢查小孩名稱重複
export const CheckChildNameAction = (account,name,login_token) => {
    const callback = (message) => {
        // 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        let toast = Toast.show(message, {
            duration: 3000, // toast显示时长
            position: Toast.positions.BOTTOM, // toast位置
            shadow: false, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时

        });
    }

    return (dispatch, getState, { api }) => {
        api.fetch_checkChildName(account,name,login_token)
            .then(data => {
                //console.log(data)
                if (data === true) {
                    dispatch({
                        type: 'CHECK_NAME_SUCCESS'
                    })
                } else {
                    dispatch({
                        type: 'CHECK_NAME_FAIL',Message:"孩子姓名已存在！",Callback:callback
                    })
                }
            })
            .catch(err => console.log(err));
    };
};