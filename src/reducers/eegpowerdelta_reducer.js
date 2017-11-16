export default (state = {
    delta: null, highAlpha: null,
    lowAlpha: null, theta: null, mindwaveTimer: null
}, action) => {
    switch (action.type) {
        case 'ON_EEG_POWER_DELTA':
            // console.log({
            //     delta: action.delta, highAlpha: action.highAlpha,
            //     lowAlpha: action.lowAlpha, theta: action.theta
            // })
            return {
                delta: action.delta, highAlpha: action.highAlpha,
                lowAlpha: action.lowAlpha, theta: action.theta, mindwaveTimer: action.mindwaveTimer
            };
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};