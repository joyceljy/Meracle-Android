// fetch_AvgPublicBody 生理狀況平均記憶指數排序
export const AvgPublicBodyAction = () => {

    return (dispatch, getState, { api }) => {
        api.fetch_AvgPublicBodyOrderBy()
            .then(data => {
                // console.log(data)
                dispatch({
                    type: 'PublicBody_SUCCESS', PublicBody:data
                })
            })
            .catch(err => console.log(err));
    };
};
//fetch_AvgPublicBodyNoOrderBy 生理狀況分布
export const TotalPublicBodyAction = () => {
    
        return (dispatch, getState, { api }) => {
            api.fetch_AvgPublicBodyNoOrderBy()
                .then(data => {
                    // console.log(data)
                    dispatch({
                        type: 'PublicBodyTotal_SUCCESS', PublicBodyTotal:data
                    })
                })
                .catch(err => console.log(err));
        };
    };
//fetch_AvgPublicCerealOrderBy 飲食習慣平均記憶指數排序
export const AvgPublicMealActionOrderBy = () => {
    
        return (dispatch, getState, { api }) => {
            api.fetch_AvgPublicCerealOrderBy()
                .then(data => {
                    console.log(data)
                    dispatch({
                        type: 'PublicCerealOrderBy_SUCCESS', PublicCerealOrderBydata:data
                    })
                })
                .catch(err => console.log(err));
        };
    };
 // fetch_AllPublicCereal 飲食習慣分布
 export const AvgPublicMealAction = () => {
    
        return (dispatch, getState, { api }) => {
            api.fetch_AllPublicCereal()
                .then(data => {
                    console.log(data)
                    dispatch({
                        type: 'PublicCerealTotal_SUCCESS', PublicCerealTotaldata:data
                    })
                })
                .catch(err => console.log(err));
        };
    };

//fetch_AvgPublicSleepAvgScore 睡眠時間折線圖
export const AvgPublicSleepAvgScoreAction = () => {
    
        return (dispatch, getState, { api }) => {
            api.fetch_AvgPublicSleepAvgScore()
                .then(data => {
                    console.log("Noorderby",data)
                    dispatch({
                        type: 'PublicSleepAvgScore_SUCCESS', PublicSleepAvgScoredata:data
                    })
                })
                .catch(err => console.log(err));
        };
    };
//fetch_AvgPublicSleepAvgScoreOrderby 睡眠時間排序
export const AvgPublicSleepAvgScoreOrderbyAction = () => {
    
        return (dispatch, getState, { api }) => {
            api.fetch_AvgPublicSleepAvgScoreOrderby()
                .then(data => {
                    console.log("orderby",data)
                    dispatch({
                        type: 'PublicSleepAvgScoreOrderby_SUCCESS', PublicSleepAvgScoreOrderbydata:data
                    })
                })
                .catch(err => console.log(err));
        };
    };
//fetch_AvgPublicMemeryOrderBy 每日記憶力表現排序
export const AvgPublicMemeryOrderByAction = () => {
    
        return (dispatch, getState, { api }) => {
            api.fetch_AvgPublicMemeryOrderBy()
                .then(data => {
                    console.log("AvgPublicMemeryorderby",data)
                    dispatch({
                        type: 'AvgPublicMemeryOrderBy_SUCCESS', AvgPublicMemeryOrderBydata:data
                    })
                })
                .catch(err => console.log(err));
        };
    };
//fetch_AvgPublicMemeryNoOrderBy 每日記憶力表現折線圖
export const AvgPublicMemeryAction = () => {
    
        return (dispatch, getState, { api }) => {
            api.fetch_AvgPublicMemeryNoOrderBy()
                .then(data => {
                    console.log("AvgPublicMemery",data)
                    dispatch({
                        type: 'AvgPublicMemery_SUCCESS', AvgPublicMemerydata:data
                    })
                })
                .catch(err => console.log(err));
        };
    };