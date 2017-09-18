const get_base_url = () => {
    return 'http://163.17.135.185/7thWebApi/api';
};

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
export function fetch_register(account, password, name, address) {
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
            "Address": address,

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
export function fetch_memberdata(account) {
    const api_url = `${get_base_url()}/Member/PersonalPage`;
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

//儲存會員資料（POST）
export function fetch_savememberdata(account, name, address, birthdate, gender) {
    const api_url = `${get_base_url()}/Member/EdlitPersonalPage`;
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
export function fetch_savememberimage(account, image) {
    const api_url = `${get_base_url()}/Member/PostFile`;
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
export function fetch_registersurvey(account, problem, sleep, fruit, veg, cereal, meat, milk) {
    const api_url = `${get_base_url()}/Survey/Questionnaire`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            Account: account,
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
export function fetch_childrenregister(account,name, birth, gender) {
    const api_url = `${get_base_url()}/Member/CdRegister`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

//小孩列表（POST）
export function fetch_getCdList(account) {
    const api_url = `${get_base_url()}/Member/GetAccountCdName`;
    // TODO deal with json decode error situation
    return fetch(api_url, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Account: account,

        })
    }).then(response => {
        return response.json()
    });
}