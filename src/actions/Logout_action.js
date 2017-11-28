export const LogoutAction = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'Logout_SUCCESS'
        })
            // .catch(err => console.log(err));
    };
}
