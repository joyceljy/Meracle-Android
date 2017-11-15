
export const get_memory_point = (mindwaveData,login_token) => {
    return (dispatch, getState, { api }) => {

        api.fetch_get_memory_point(mindwaveData,login_token)
            .then(data => {
                console.log('分數計算中')
                dispatch({
                    type: 'GET_POINT_SUCCESS', quizPointArray: data
                })

            })
            .catch(err => console.log(err));

    };
};

export const save_memory_point = (login_account, login_token, cdName, finalScore, statusSelected) => {
    return (dispatch, getState, { api }) => {

        api.fetch_save_memory_point(login_account, login_token, cdName, finalScore, statusSelected)
            .then(data => {
                
                if (data == "success") {
                    console.log('分數儲存成功')
                    dispatch({
                        type: 'SAVE_POINT_SUCCESS'
                    })
                }


            })
            .catch(err => console.log(err));

    };
};