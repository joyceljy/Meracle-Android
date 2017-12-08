import { connect } from 'react-redux';
import MindwaveTestComponent from '../components/MindwaveTest_component';
import { Actions } from 'react-native-router-flux';
import MindWaveMobile from 'react-native-mindwave-mobile';
import { on_eeg_power_delta, on_eeg_power_low_beta, on_esense } from '../actions/mindwave_action';
import { get_memory_point, save_memory_point, clear_memory } from '../actions/memoryPoint_action';
import { CdNewScoreRecord, SetAvgCdEventStatusScore } from '../actions/Home_action';
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
    CdNewScoreRecordData: state.CdNewScoreRecordData,
    AvgCdEventStatusScore: state.AvgCdEventStatusScore
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
    getMemoryPoint: (mindwaveData, login_token, login_account, childname) => {
        dispatch(get_memory_point(mindwaveData, login_token, login_account, childname));
    },
    GetSetAvgCdEventStatusScore: (login_account, login_token) => { //首頁圖表
        dispatch(SetAvgCdEventStatusScore(login_account, login_token))//首頁圖表
    },
    GetCdNewScoreRecord: (login_account, token) => { //取得最新資料
        dispatch(CdNewScoreRecord(login_account, token));
    },
    SaveMemoryPoint: (login_account, login_token, cdName, finalScore, statusSelected) => {
        dispatch(save_memory_point(login_account, login_token, cdName, finalScore, statusSelected));
        setTimeout(() => {
            dispatch(clear_memory);

            //把component的完成click註解 ，直接在這呼叫dispatch 如有錯再刪掉這兩行
            //dispatch(CdNewScoreRecord(login_account, token));//取得最新資料
           // dispatch(SetAvgCdEventStatusScore(login_account, login_token))//首頁圖表

            Actions.home({ type: "reset" });
        }, 2000);
    },
    goBack: () => {
        dispatch(clear_memory);
        Actions.home({ type: "reset" });
    }
}
);

class MindwaveTestContainer extends MindwaveTestComponent {

}

export default connect(mapStateToProps, mapDispatchToProps)(MindwaveTestContainer);