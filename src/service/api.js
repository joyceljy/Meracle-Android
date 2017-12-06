import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
    login_token: state.login_token,
});
// const get_base_url = () => {
//     return 'http://163.17.135.185/7thWebApi/api';
// };
const get_base_url = () => {
    return 'https://www.meracle.me/home/api';
};
// const token = () => {
//     return login_token;
// }

//登入（POST）
export function fetch_login(account, password) {
    const api_url = `${get_base_url()}/Member/Login`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,
            "Password": password
        })
    }).then(response => {
        return response.json()
    });
}

//註冊（POST）
export function fetch_register(account, password, name, birth, gender) {
    const api_url = `${get_base_url()}/Member/Register`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,
            "Password": password,
            "Name": name,
            "Birthday": birth,
            "Gender": gender,

        })
    }).then(response => {
        return response.json()
    });
}

//註冊帳號確認重複（POST）
export function fetch_checkAccount(account) {
    const api_url = `${get_base_url()}/Member/CheckMemAccount`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,
        })
    }).then(response => {
        return response.json()
    });
}

//忘記密碼（POST）
export function fetch_forgetpass(account) {
    const api_url = `${get_base_url()}/Member/ForgotPassword`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,

        })
    }).then(response => {
        return response.json()
    });
}

//取得會員資料（POST）
export function fetch_memberdata(account, token) {
    const api_url = `${get_base_url()}/Member/PersonalPage`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,

        })
    }).then(response => {
        return response.json()
    });
}

//儲存會員資料（POST）
export function fetch_savememberdata(account, name, address, birthdate, gender, token) {
    const api_url = `${get_base_url()}/Member/EdlitPersonalPage`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,
            "Name": name,
            "Address": address,
            "Birthday": birthdate,
            "Gender": gender

        })
    }).then(response => {
        return response.json()
    });
}

//儲存會員大頭（POST）
export function fetch_savememberimage(account, image, token) {
    const api_url = `${get_base_url()}/Member/ReactPostImage`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,
            "FileStr": image,
        })
    }).then(response => {
        return response.json()
    });
}
//修改密碼
export function fetch_editpassword(account, password) {
    const api_url = `${get_base_url()}/Member/EditPassword`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": account,
            "Password": password,
        })
    }).then(response => {
        return response.json()
    });
}

//註冊調查
export function fetch_registersurvey(account, name, problem, sleep, fruit, veg, cereal, meat, milk, login_token) {
    const api_url = `${get_base_url()}/Survey/Questionnaire`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': login_token,
        },
        body: JSON.stringify({
            Account: account,
            CdName: name,
            Problem: problem,
            Avg_Sleep: sleep,
            Eat_Fruit: fruit,
            Eat_Veg: veg,
            Eat_Cereal: cereal,
            Eat_Meat: meat,
            Eat_Milk: milk
        })
    }).then(response => {
        return response.json()
    });
}

//小孩註冊（POST）
export function fetch_childrenregister(account, name, birth, gender, login_token) {
    const api_url = `${get_base_url()}/Member/CdRegister`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': login_token,
        },
        body: JSON.stringify({
            Account: account,
            CdName: name,
            Birthday: birth,
            Gender: gender

        })
    }).then(response => {
        return response.json()
    });
}

//小孩新增姓名確認重複（POST）
export function fetch_checkChildName(account, name, login_token) {
    const api_url = `${get_base_url()}/Member/CheckCdAccount`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': login_token,
        },
        body: JSON.stringify({
            "Account": account,
            "CdName": name,
        })
    }).then(response => {
        return response.json()
    });
}

//小孩大頭（POST）
export function fetch_childrenimage(account, name, pic64, login_token) {
    const api_url = `${get_base_url()}/Member/ReactPostImage`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': login_token,
        },
        body: JSON.stringify({
            "Account": account,
            "CdName": name,
            "FileStr": pic64
        })
    }).then(response => {
        return response.json()
    });
}

//小孩列表（POST）
export function fetch_getCdList(account, login_token) {
    const api_url = `${get_base_url()}/Member/GetAccountAndGenderCdName`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': login_token,
        },
        body: JSON.stringify({
            Account: account,
        })
    }).then(response => {
        return response.json()
    });
}

//小孩資料（POST）
export function fetch_childrendata(login_account, childname, token) {
    const api_url = `${get_base_url()}/Member/CdPersonalPage`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": login_account,
            "CdName": childname,

        })
    }).then(response => {
        return response.json()
    });
}

//小孩編輯（POST）
export function fetch_savechildrendata(login_account, childname, birthdate, gender, token) {
    const api_url = `${get_base_url()}/Member/EdlitCdPersonalPage`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Account": login_account,
            "CdName": childname,
            "Birthday": birthdate,
            "Gender": gender,

        })
    }).then(response => {
        return response.json()
    });
}

//取得記憶分數（POST）
export function fetch_get_memory_point(mindwaveData,login_token,login_account,childname) {
    const api_url = `${get_base_url()}/Point/GetPoint`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            //'Authorization': login_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            "Account":login_account,
            "CdName":childname,
            "deltaBig":mindwaveData.deltaBig	,
            "deltaSmall":mindwaveData.deltaSmall,
            "deltaAverage":mindwaveData.deltaAverage,
            "deltaSD":mindwaveData.deltaSD,
            "thetaBig":mindwaveData.thetaBig,
            "thetaSmall":mindwaveData.thetaSmall,
            "thetaAverage":mindwaveData.thetaAverage,
            "thetaSD":mindwaveData.thetaSD,
            "lowAlphaBig":mindwaveData.lowAlphaBig,
            "lowAlphaSmall":mindwaveData.lowAlphaSmall,
            "lowAlphaAverage":mindwaveData.lowAlphaAverage,
            "highAlphaBig":mindwaveData.highAlphaBig,
            "highAlphaSmall":mindwaveData.highAlphaSmall,
            "highAlphaAverage":mindwaveData.highAlphaAverage,
            "highAlphaSD":mindwaveData.highAlphaSD,
            "lowBetaBig":mindwaveData.lowBetaBig,
            "lowBetaSmall":mindwaveData.lowBetaSmall,
            "lowBetaAverage":mindwaveData.lowBetaAverage,
            "lowBetaSD":mindwaveData.lowBetaSD,
            "highBetaBig":mindwaveData.highBetaBig,
            "highBetaSmall":mindwaveData.highBetaSmall,
            "highBetaAverage":mindwaveData.highBetaAverage,
            "highBetaSD":mindwaveData.highBetaSD,
            "lowGammaBig":mindwaveData.lowGammaBig,
            "lowGammaSmall":mindwaveData.lowGammaSmall,
            "lowGammaAverage":mindwaveData.lowGammaAverage,
            "midGammaBig":mindwaveData.midGammaBig,
            "midGammaSmall":mindwaveData.midGammaSmall,
            "midGammaAverage":mindwaveData.midGammaAverage,
            "midGammaSD":mindwaveData.midGammaSD,

            //記憶力用
            "lowGammaSD":mindwaveData.lowGammaSD,
            "lowAlphaSD":mindwaveData.lowAlphaSD,

        })
    }).then(response => {
        return response.json()
    });
}


//取得記憶分數（POST）
export function fetch_get_memory_point2(mindwaveData,childname) {
    const api_url = `${get_base_url()}/Point/SaveTestWave`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            //'Authorization': login_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

           
            "Name":childname,
            "deltaBig":mindwaveData.deltaBig,
            "deltaSmall":mindwaveData.deltaSmall,
            "deltaAverage":mindwaveData.deltaAverage,
            "deltaSD":mindwaveData.deltaSD,
            "thetaBig":mindwaveData.thetaBig,
            "thetaSmall":mindwaveData.thetaSmall,
            "thetaAverage":mindwaveData.thetaAverage,
            "thetaSD":mindwaveData.thetaSD,
            "lowAlphaBig":mindwaveData.lowAlphaBig,
            "lowAlphaSmall":mindwaveData.lowAlphaSmall,
            "lowAlphaAverage":mindwaveData.lowAlphaAverage,
            "highAlphaBig":mindwaveData.highAlphaBig,
            "highAlphaSmall":mindwaveData.highAlphaSmall,
            "highAlphaAverage":mindwaveData.highAlphaAverage,
            "highAlphaSD":mindwaveData.highAlphaSD,
            "lowBetaBig":mindwaveData.lowBetaBig,
            "lowBetaSmall":mindwaveData.lowBetaSmall,
            "lowBetaAverage":mindwaveData.lowBetaAverage,
            "lowBetaSD":mindwaveData.lowBetaSD,
            "highBetaBig":mindwaveData.highBetaBig,
            "highBetaSmall":mindwaveData.highBetaSmall,
            "highBetaAverage":mindwaveData.highBetaAverage,
            "highBetaSD":mindwaveData.highBetaSD,
            "lowGammaBig":mindwaveData.lowGammaBig,
            "lowGammaSmall":mindwaveData.lowGammaSmall,
            "lowGammaAverage":mindwaveData.lowGammaAverage,
            "midGammaBig":mindwaveData.midGammaBig,
            "midGammaSmall":mindwaveData.midGammaSmall,
            "midGammaAverage":mindwaveData.midGammaAverage,
            "midGammaSD":mindwaveData.midGammaSD,

            //記憶力用
            "lowGammaSD":mindwaveData.lowGammaSD,
            "lowAlphaSD":mindwaveData.lowAlphaSD,

        })
    }).then(response => {
        return response.json()
    });
}

//儲存記憶分數（POST）
export function fetch_save_memory_point(login_account, login_token, cdName, finalScore, statusSelected) {
    const api_url = `${get_base_url()}/Point/SaveCdScore`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'Authorization': login_token,
        },
        body: JSON.stringify({
            "Account":login_account,
            "CdName":cdName,
            "Score":parseInt(finalScore),
            "Status":statusSelected
        })
    }).then(response => {
        return response.json()
    });
}
//大眾小孩生理狀況統計（GET）
export function fetch_AvgPublicBodyOrderBy() { //生理狀況平均記憶指數排序
    const api_url = `${get_base_url()}/Survey/AvgPublicBodyAvgScoreOrderBy`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}
export function fetch_AvgPublicBodyNoOrderBy() { //生理狀況分布
    const api_url = `${get_base_url()}/Survey/AvgPublicBodyNoOrderBy`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}
export function fetch_AvgPublicCerealOrderBy() { //飲食習慣平均記憶指數排序
    const api_url = `${get_base_url()}/Survey/AvgPublicCerealOrderBy`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}
export function fetch_AllPublicCereal() { //飲食習慣分布
    const api_url = `${get_base_url()}/Survey/GetEverCerealAvg`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}
export function fetch_AvgPublicSleepAvgScore() { //睡眠時間平均記憶指數無排序
    const api_url = `${get_base_url()}/Survey/AvgPublicSleepAvgScoreNoOrderby`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}
export function fetch_AvgPublicSleepAvgScoreOrderby() { //睡眠時間平均記憶指數排序
    const api_url = `${get_base_url()}/Survey/AvgPublicSleepAvgScoreOrderby`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}
export function fetch_AvgPublicMemeryOrderBy() { //每日時段平均記憶指數排序
    const api_url = `${get_base_url()}/Survey/AvgPublicMemeryOrderBy`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}
export function fetch_AvgPublicMemeryNoOrderBy() { //每日時段平均記憶指數折線圖
    const api_url = `${get_base_url()}/Survey/AvgPublicMemeryNoOrderBy`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // body: JSON.stringify({
           

        // })
    }).then(response => {
        return response.json()
    });
}