export const ForgetPasswordAction = (account) => {
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
    return (dispatch, getState,{api}) => {
        api.fetch_forgetpass(account)
            .then(data => {
                console.log(data)
                if (data === "已發送驗證信，請去查收") {
                    dispatch({
                        type: 'FORGETPASS_SUCCESS',Message:data,Callback:callback
                    })
                } else {
                    dispatch({
                        type: 'FORGETPASS_FAIL'
                    })
                }
            })
            .catch(err => console.log(err));
    };
};