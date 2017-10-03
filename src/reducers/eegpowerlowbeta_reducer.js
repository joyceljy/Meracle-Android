export default (state = {
    lowBeta: null, midGamma: null,
    highBeta: null, lowGamma: null
}, action) => {
    switch (action.type) {
        case 'ON_EEG_POWER_LOW_BETA':
            // console.log({
            //     lowBeta: action.lowBeta, midGamma: action.midGamma,
            //     highBeta: action.highBeta, lowGamma: action.lowGamma
            // })
            return {
                lowBeta: action.lowBeta, midGamma: action.midGamma,
                highBeta: action.highBeta, lowGamma: action.lowGamma
            };
        default:
            return state;
    }
};
