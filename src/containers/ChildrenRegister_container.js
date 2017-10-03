import { connect } from 'react-redux';
import ChildrenRegisterComponent from '../components/ChildrenRegister_component';
import { Actions } from 'react-native-router-flux';
import { ChildrenRegisterAction, RegisterSurveyAction } from '../actions/ChildrenRegister_action';
import { changeRegisterStep } from '../actions/ChangeStep_action';

const mapStateToProps = (state) => ({
    child_reg_status: state.child_reg_status,
    child_account: state.child_account,
    login_account: state.login_account,
    childRegStep: state.childRegStep,

});

const mapDispatchToProps = (dispatch) => ({
    //新增小孩資料
    ChildRegisterButton: (account, name, birth, gender) => {
        dispatch(ChildrenRegisterAction(account, name, birth, gender));
    },
    //變換步驟
    changeRegisterStep: (step) => {
        dispatch(changeRegisterStep(step));
    },
    //檢查小孩名稱重複
    checkChildButton: (account, name) => {

    },
    //新增小孩照片
    saveChildpicButton: (account, name, pic64) => {

    },
    //儲存問卷
    saveQButton: (account, problem, sleep, fruit, veg, cereal, meat, milk) => {
        dispatch(RegisterSurveyAction(account, problem, sleep, fruit, veg, cereal, meat, milk));
    },
    //自動跳轉
    skipMemberButton: () => {
        //Actions.pop();
        Actions.Member({type: "reset"});
    }
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
        }
    }
    componentWillReceiveProps(nextProps) {
        const { childRegStep: previous_childRegStep } = this.props;
        const { child_reg_status } = nextProps;
        const { childRegStep } = nextProps;
        if (previous_childRegStep != childRegStep) {
            this.setState({ RegisterStep: childRegStep })
        }


        //成功則
        if (child_reg_status === true) {
            Actions.home();
        }
    }
    componentDidMount() {
        //預設第一步驟
        this.props.changeRegisterStep('1');


    }


}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenRegisterContainer);