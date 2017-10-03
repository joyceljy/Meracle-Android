export default (state = {
    delta: null, highAlpha: null,
    lowAplpha: null, theta: null, mindwaveTimer: null
}, action) => {
    switch (action.type) {
        case 'ON_EEG_POWER_DELTA':
            // console.log({
            //     delta: action.delta, highAlpha: action.highAlpha,
            //     lowAplpha: action.lowAplpha, theta: action.theta
            // })
            return {
                delta: action.delta, highAlpha: action.highAlpha,
                lowAplpha: action.lowAplpha, theta: action.theta, mindwaveTimer: action.mindwaveTimer
            };
        default:
            return state;
    }
};