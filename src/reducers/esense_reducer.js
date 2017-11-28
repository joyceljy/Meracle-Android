export default (state = { poorSignal: null }, action) => {
    switch (action.type) {
        case 'ON_ESENSE':
            // console.log(action.mindwaveTimer)
            return { poorSignal: action.poorSignal }
            case 'Logout_SUCCESS':
            return { poorSignal: null }
            case 'CLEAR_MEMORY':
            return { poorSignal: null }
        default:
            return state;
    }
};