import { connect } from 'react-redux';
import ChildrenRegisterComponent from '../components/ChildrenRegister_component';
import { Actions } from 'react-native-router-flux';
import { ChildrenRegisterAction, RegisterSurveyAction, CheckChildNameAction, ChildImageAction } from '../actions/ChildrenRegister_action';
import { changeRegisterStep } from '../actions/ChangeStep_action';
import signalr from 'react-native-signalr';
import { ChildrenListAction, GetChildrenData } from '../actions/ChildrenData_action';

const mapStateToProps = (state) => ({
    child_reg_status: state.child_reg_status,
    child_account: state.child_account,
    login_account: state.login_account,
    childRegStep: state.childRegStep,
    checkChildName_status: state.checkChildName_status,
    login_token: state.login_token,
    childList: state.childList,
});

const mapDispatchToProps = (dispatch) => ({
    //新增小孩資料
    ChildRegisterButton: (account, name, birth, gender, login_token) => {
        dispatch(ChildrenRegisterAction(account, name, birth, gender, login_token));
    },
    //變換步驟
    changeRegisterStep: (step) => {
        dispatch(changeRegisterStep(step));
    },
    //檢查小孩名稱重複
    checkChildButton: (account, name, login_token) => {
        dispatch(CheckChildNameAction(account, name, login_token));
    },
    //新增小孩照片
    saveChildpicButton: (account, name, pic64, login_token) => {
        dispatch(ChildImageAction(account, name, pic64, login_token));
    },
    //儲存問卷
    saveQButton: (account, name, problem, sleep, fruit, veg, cereal, meat, milk, login_token) => {
        dispatch(RegisterSurveyAction(account, name, problem, sleep, fruit, veg, cereal, meat, milk, login_token));
    },
    //自動跳轉
    skipMemberButton: () => {
        //Actions.pop();
        Actions.Member({ type: "reset" });
    },
    ChildListActionClick: (account, login_token) => {
        dispatch(ChildrenListAction(account, login_token));
    },

}
);

class ChildrenRegisterContainer extends ChildrenRegisterComponent {
    constructor(props) {
        super(props);
        this.state = {
            birthdate: '',
            isDateTimePickerVisible: false,
            value: 0,
            Name: '',
            err1: false,
            err2: false,
            //預設男被選擇
            genderSelected: 0,
            gender: '男',

            //步驟
            RegisterStep: '1',

            //照片
            avatarSource: null,
            imagedata_base64: null,

            //問卷
            Q1visible: false,
            Q2visible: false,
            Q3visible: false,
            Q1selectedItem: "",
            Q2selectedItem: "",
            Q3selectedItem: "",
            Q3showText: '',

            fruit: false,
            veg: false,
            cereal: false,
            meat: false,
            milk: false,

            //自動跳轉
            skipMember: false,

            //確認小孩名字重複
            nameCheck: true,
        }
    }
    componentWillReceiveProps(nextProps) {
        const { childRegStep: previous_childRegStep } = this.props;
        const { child_reg_status } = nextProps;
        const { childRegStep } = nextProps;
        const { checkChildName_status } = nextProps;
        const { childList } = nextProps;

        if (previous_childRegStep != childRegStep) {
            this.setState({ RegisterStep: childRegStep })
        }

        const { checkChildName_status: previous_checkChildName } = this.props;

        if (previous_checkChildName != checkChildName_status) {
            this.setState({ nameCheck: checkChildName_status })
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenRegisterContainer);