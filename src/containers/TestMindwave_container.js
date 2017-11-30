import { connect } from 'react-redux';
import TestMindwaveComponent from '../components/TestMindwave_component';
import { Actions } from 'react-native-router-flux';
import MindWaveMobile from 'react-native-mindwave-mobile';
import { on_eeg_power_delta, on_eeg_power_low_beta, on_esense } from '../actions/mindwave_action';
import { get_memory_point2, save_memory_point, clear_memory } from '../actions/memoryPoint_action';

const mwm = new MindWaveMobile()
const mapStateToProps = (state) => ({
    //腦波部分
    delta: state.eeg_power_delta.delta,
    highAlpha: state.eeg_power_delta.highAlpha,
    lowAlpha: state.eeg_power_delta.lowAlpha,
    theta: state.eeg_power_delta.theta,
    lowBeta: state.eeg_power_low_beta.lowBeta,
    midGamma: state.eeg_power_low_beta.midGamma,
    highBeta: state.eeg_power_low_beta.highBeta,
    lowGamma: state.eeg_power_low_beta.lowGamma,
    poorSignal: state.esense.poorSignal,
    mindwaveTimer: state.eeg_power_delta.mindwaveTimer,
    //分數
    quizPointArray: state.quizPointArray,
    quizSaved: state.quizSaved,
    //會員部分
    login_account: state.login_account,
    child_account: state.child_account,
    login_token: state.login_token,
});

const mapDispatchToProps = (dispatch) => ({
    onEEGPowerDelta: (data, mindwaveTimer) => {
        dispatch(on_eeg_power_delta(data.delta, data.highAlpha, data.lowAlpha, data.theta, mindwaveTimer));
    },
    onEEGPowerLowBeta: (data) => {
        dispatch(on_eeg_power_low_beta(data.lowBeta, data.midGamma, data.highBeta, data.lowGamma));
    },
    onESense: (data) => {
        dispatch(on_esense(data.poorSignal));
    },
    getMemoryPoint: (mindwaveData, childname) => {
        dispatch(get_memory_point2(mindwaveData, childname));
    },
   
    goBack: () => {
        dispatch(clear_memory);
        Actions.home({ type: "reset" });
    },
    End: () => {
        Actions.home({ type: "reset" });
    }
}
);

class TestMindwaveContainer extends TestMindwaveComponent {

}

export default connect(mapStateToProps, mapDispatchToProps)(TestMindwaveContainer);