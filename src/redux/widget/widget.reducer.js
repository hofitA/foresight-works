
const initialState = {
    widgets: [
        { id: 1, text: 'First Widget', number: 33, isCTA: "false"}, 
        { id: 2, text: 'Second Widget', number: 46, isCTA: "false" }, 
        { id: 3, text: 'To Features', number: 0, isCTA: "true"}
    ]
};

const widgetReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
                
        default:
            return state;
    }
};

export default widgetReducer;
