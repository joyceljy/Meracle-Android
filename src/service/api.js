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