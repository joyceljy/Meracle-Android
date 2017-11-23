import Toast from 'react-native-root-toast';
export const get_memory_point = (mindwaveData, login_token, login_account, childname) => {
    return (dispatch, getState, { api }) => {
        if (childname != null) {
            api.fetch_get_memory_point(mindwaveData, login_token, login_account, childname)
                .then(data => {
                    //console.log('分數計算中');
                    //console.log(data.score);
                    dispatch({
                        type: 'GET_POINT_SUCCESS', quizPointArray: data.score
                    })

                })
                .catch(err => console.log(err));
        }


    };
};

export const save_memory_point = (login_account, login_token, cdName, finalScore, statusSelected) => {
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
        //Actions.ChildEdit();
    }
    return (dispatch, getState, { api }) => {
        api.fetch_save_memory_point(login_account, login_token, cdName, finalScore, statusSelected)
            .then(data => {

                if (data == "success") {
                    console.log('分數儲存成功')
                    dispatch({
                        type: 'SAVE_POINT_SUCCESS', Callback: callback
                    })
                }


            })
            .catch(err => console.log(err));

    };
};

export const clear_memory = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'CLEAR_MEMORY'
        })
    };
};