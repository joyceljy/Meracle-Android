import Toast from 'react-native-root-toast';
export const EditPasswordAction = (account,password_pre,password_aft,token) => {
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
    return (dispatch, getState,{api}) => {
        api.fetch_editpassword(account,password_pre,password_aft,token)
            .then(data => {
                console.log(data)
                if (data.result === "修改成功") {
                    dispatch({
                        type: 'Editpwd_SUCCESS',Message:data.result,Callback:callback
                    })
                } 
                else {
                    dispatch({
                        type: 'Editpwd_FAIL',Message:data.result,Callback:callback
                    })
                }
                
            })
            .catch(err => console.log(err));
    };
};