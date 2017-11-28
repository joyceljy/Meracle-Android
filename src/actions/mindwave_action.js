export const on_eeg_power_delta = (delta, highAlpha, lowAlpha, theta, mindwaveTimer) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ON_EEG_POWER_DELTA',
            delta: delta, highAlpha: highAlpha,
            lowAlpha: lowAlpha, theta: theta, mindwaveTimer: mindwaveTimer
        })
    };
};
export const on_eeg_power_low_beta = (lowBeta, midGamma, highBeta, lowGamma) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ON_EEG_POWER_LOW_BETA',
            lowBeta: lowBeta, midGamma: midGamma,
            highBeta: highBeta, lowGamma: lowGamma
        })
    };
};
export const on_esense = (poorSignal) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ON_ESENSE', poorSignal: poorSignal
        })
    };
};