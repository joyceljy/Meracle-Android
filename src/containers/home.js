import { connect } from 'react-redux';
import HomeComponent from '../components/home';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
import { GetMemberData } from '../actions/MemberData_action';
import {
    TotalPublicBodyAction,
    AvgPublicBodyAction,
    AvgPublicMealActionOrderBy,
    AvgPublicMealAction,
    AvgPublicSleepAvgScoreOrderbyAction,
    AvgPublicSleepAvgScoreAction,
    AvgPublicMemeryOrderByAction,
    AvgPublicMemeryAction
} from '../actions/AllKidschart_action';
import { CdNewScoreRecord, SetChildNameBG, SetChildBestStatus, SetCdDayOfBestScoreByTimer, SetAvgCdEventStatusScore } from '../actions/Home_action';
const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    login_token: state.login_token,
    member_data: state.member_data,
    CdNewScoreRecordData: state.CdNewScoreRecordData,
    ChildNameBGData: state.ChildNameBGData,
    ChildBestStatus: state.ChildBestStatus,
    CdDayOfBestScoreByTimer: state.CdDayOfBestScoreByTimer,
    AvgCdEventStatusScore: state.AvgCdEventStatusScore

});

const mapDispatchToProps = (dispatch) => ({

    kidwavepageClick: () => {
        Actions.kidwavepage();
    },
    GetMemberData: (login_account, token) => {
        dispatch(GetMemberData(login_account, token));
    },
    GetAllKidsProblemData: () => { //生理狀況分布
        dispatch(TotalPublicBodyAction());
    },
    GetAllKidsProblemDataOrderby: () => { //生理狀況平均指數排序
        dispatch(AvgPublicBodyAction());
    },
    GetAllKidsMealData: () => { //飲食習慣分布
        dispatch(AvgPublicMealAction());
    },
    GetAllKidsMealDataOrderby: () => { //飲食習慣平均指數排序
        dispatch(AvgPublicMealActionOrderBy());
    },
    GetAllKidsSleepAvgScoreData: () => { //睡眠時間無排序
        dispatch(AvgPublicSleepAvgScoreAction());
    },
    GetAllKidsSleepAvgScoreDataOrderby: () => { //睡眠時間排序
        dispatch(AvgPublicSleepAvgScoreOrderbyAction());
    },
    GetAvgPublicMemeryOrderBy: () => {//每日記憶力表現排序
        dispatch(AvgPublicMemeryOrderByAction());
    },
    GetAvgPublicMemery: () => {//每日記憶力折線圖
        dispatch(AvgPublicMemeryAction());
    },
    GetCdNewScoreRecord: (login_account, token) => { //取得最新資料
        dispatch(CdNewScoreRecord(login_account, token));
    },
    GetChildNameBGcolor: (login_account, cdname, color, login_token) => { //取得點擊列表的小孩名字、背景顏色 並取得詳細資料
        dispatch(SetChildNameBG(login_account, cdname, color, login_token))

    },
    GetSetChildBestStatus: (login_account, cdname, login_token) => {
        dispatch(SetChildBestStatus(login_account, cdname, login_token)) //取得小孩最佳狀態
    },
    GetSetCdDayOfBestScoreByTimer: (login_account, cdname, login_token) => {
        dispatch(SetCdDayOfBestScoreByTimer(login_account, cdname, login_token)) //取得小孩最佳時段
    },
    GetSetAvgCdEventStatusScore: (login_account, login_token) => { //首頁圖表
        dispatch(SetAvgCdEventStatusScore(login_account, login_token))
    }

}

);

class HomeContainer extends HomeComponent {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.GetAllKidsProblemData();
        this.props.GetAllKidsProblemDataOrderby();
        this.props.GetAllKidsMealDataOrderby();
        this.props.GetAllKidsMealData();
        this.props.GetAllKidsSleepAvgScoreData();
        this.props.GetAllKidsSleepAvgScoreDataOrderby();
        this.props.GetAvgPublicMemeryOrderBy();
        this.props.GetAvgPublicMemery();

    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
        //取得會員資料
        const { member_data } = nextProps;
        //取得最新資料
        // const { CdNewScore_Record: previous_CdNewScoreRecord } = this.props
        const { CdNewScoreRecordData } = nextProps

        const { ChildNameBGData: pre_ChildNameBGData } = this.props;
        const { AvgCdEventStatusScore } = nextProps;
        const { ChildNameBGData } = nextProps
        if (pre_ChildNameBGData != ChildNameBGData) {
            this.props.kidwavepageClick()
        }
       
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
