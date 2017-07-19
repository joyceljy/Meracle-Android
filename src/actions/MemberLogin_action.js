export const LoginAction = (account,password) => {
    return (dispatch, getState,{api}) => {
        api.fetch_login(account, password)
            .then(data => {
                //console.log(data)
                if (data.result === "登入成功") {
                    dispatch({
                        type: 'LOGIN_SUCCESS', loginuser: data.Account
                    })
                } else {
                    dispatch({
                        type: 'LOGIN_FAIL'
                    })
                }
            })
            .catch(err => console.log(err));
    };
};