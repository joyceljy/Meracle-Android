// SetCdDayOfBestScoreByTimer_SUCCESS
export default (state = null, action) => {
    switch (action.type) {
        
        case 'SetCdDayOfBestScoreByTimer_SUCCESS':
            return action.CdDayOfBestScoreByTimerdata;
            
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};