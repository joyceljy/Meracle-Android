import Toast from 'react-native-root-toast';

export const ChildrenRegisterAction = (account,name, birth, gender) => {
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
        api.fetch_childrenregister(account,name, birth, gender)
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