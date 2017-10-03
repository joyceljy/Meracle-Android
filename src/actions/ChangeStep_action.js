export const changeRegisterStep = (step) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'CHANGE_CHILDREG_STEP',childRegStep:step
        })
        
    };
};