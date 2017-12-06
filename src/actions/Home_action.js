// fetch_CdNewScoreTable
// 首頁列表
export const CdNewScoreRecord = (account, token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_CdNewScoreTable(account, token)
            .then(data => {
                console.log(data)
                dispatch({
                    type: 'CdNewScoreRecord_SUCCESS', CdNewScoreRecorddata: data
                })

            })
            .catch(err => console.log(err));
    };
};
//小孩詳細腦波資料頁面
export const SetChildNameBG = (account, cdname, color, token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_CdTable(account, cdname, token)
            .then(data => {
                console.log("Actoion_ChildNameBG:",data)
                dispatch({
                    type: 'SetChildNameBG_SUCCESS', SetChildNameBGdata: data, SetChildNameBG_color: color
                })

            })
            .catch(err => console.log(err));
    };
};
//fetch_CdBestStatus
//小孩詳細頁面-最佳狀態
export const SetChildBestStatus = (account, cdname,  token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_CdBestStatus(account, cdname, token)
            .then(data => {
                console.log("Actoion_SetChildBestStatus:",data)
                dispatch({
                    type: 'SetChildBestStatus_SUCCESS', SetChildBestStatusdata: data
                })

            })
            .catch(err => console.log(err));
    };
};
//fetch_CdDayOfBestScoreByTimer
//小孩詳細頁面-最佳時段
export const SetCdDayOfBestScoreByTimer = (account, cdname,  token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_CdDayOfBestScoreByTimer(account, cdname, token)
            .then(data => {
                console.log("Actoion_SetCdDayOfBestScoreByTimer:",data)
                dispatch({
                    type: 'SetCdDayOfBestScoreByTimer_SUCCESS', CdDayOfBestScoreByTimerdata: data
                })

            })
            .catch(err => console.log(err));
    };
};
// fetch_AvgCdEventStatusScore
// 首頁圖表
export const SetAvgCdEventStatusScore = (account,  token) => {
    return (dispatch, getState, { api }) => {
        api.fetch_AvgCdEventStatusScore(account, token)
            .then(data => {
                console.log("Actoion_AvgCdEventStatusScore:",data)
                dispatch({
                    type: 'AvgCdEventStatusScore_SUCCESS', AvgCdEventStatusScoredata: data
                })
            })
            .catch(err => console.log(err));
    };
};