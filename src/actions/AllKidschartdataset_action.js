//塞進生理狀態圓餅圖的dataset
export const Problemdataset = (data) => {
    return (dispatch, getState) => {
        // console.log(data)
        dispatch({
            type: 'PublicBodyTotalset_SUCCESS', PublicBodyTotalset: data
        })
    };

};
//塞進飲食習慣圓餅圖的dataset
export const Mealdataset = (data) => {
    return (dispatch, getState) => {
        console.log('Mealdataset',data)
        dispatch({
            type: 'PublicMealTotalset_SUCCESS', PublicCerealTotaldata: data
        })
    };

};
//塞進睡眠時間折線圖的dataset
export const Sleepdataset = (data) => {
    return (dispatch, getState) => {
        console.log('Sleepdataset',data)
        dispatch({
            type: 'PublicSleepTotalset_SUCCESS', PublicSleepTotalset: data
        })
    };

};
//塞進每日記憶力折線圖的dataset
export const Memorydataset = (data) => {
    return (dispatch, getState) => {
        console.log('Memorydataset',data)
        dispatch({
            type: 'PublicMemoryTotalset_SUCCESS', PublicMemoryTotalset: data
        })
    };

};