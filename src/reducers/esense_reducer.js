export default (state = { poorSignal: null }, action) => {
    switch (action.type) {
        case 'ON_ESENSE':
            // console.log(action.mindwaveTimer)
            return { poorSignal: action.poorSignal }
        default:
            return state;
    }
};