import Toast from 'react-native-root-toast';

export const RegisterSurveyAction = (account,problem,sleep,fruit,veg,cereal,meat,milk) => {
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
        api.fetch_registersurvey(account,problem,sleep,fruit,veg,cereal,meat,milk)
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