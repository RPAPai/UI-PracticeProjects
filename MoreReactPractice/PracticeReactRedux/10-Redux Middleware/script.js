import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const mathInitialState = {
    result: 1,
    lastValues: []
}

const mathReducer = (state = mathInitialState, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case 'SUB':
            state = {
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
}

const userInitialState = {
    name: "Roopa",
    age: 30
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            state = {
                name: action.payload,
                age: state.age
            }
            break;
        case 'SET_AGE':
            state = {
                name: state.name,
                age: action.payload,
            }
            break;
    }
    return state;
}

/*const store = createStore(
                combineReducers(
                    {
                        mathReducer: mathReducer,
                        userReducer: userReducer
                    }
                )
);*/

const myLogger = (store) => (next) => (action) => {
    //console.log('Logged action: ', action);
    next(action);
}

const store = createStore(
    combineReducers({ mathReducer, userReducer }), {},
    applyMiddleware(myLogger, createLogger())
);


store.subscribe(() => {
    //console.log("Store updated..", store.getState());
    let str = "<strong> Math Reducer </strong><br /><br />"
    str += "Initial state:<br /><br />";
    str += "state.result = " + mathInitialState.result + "<br />";
    str += "state.lastValues = " + mathInitialState.lastValues + "<br />";

    str += "<br /> Updated state: <br /><br />";
    str += "state.result = " + store.getState().result + "<br />";
    str += "state.lastValues = " + store.getState().lastValues + "<br /><hr />";

    //console.log("Store updated..", store.getState());

    let uStr = "<strong> User Reducer </strong><br /><br />";

    uStr += "Initial state:<br /><br />";
    uStr += "state.name = " + userInitialState.name + "<br />";
    uStr += "state.age = " + userInitialState.age + "<br />";

    uStr += "<br /> Updated state: <br /><br />";
    uStr += "state.name = " + store.getState().userReducer.name + "<br />";
    uStr += "state.age = " + store.getState().userReducer.age + "<br /><hr />";
    //console.log("state.name = " + store.getState().userReducer.name);
    //console.log("state.age = " + store.getState().userReducer.age);
    document.getElementById("firstapp").innerHTML = uStr;
});



store.dispatch({
    type: 'SET_AGE',
    payload: 26
});

store.dispatch({
    type: 'SET_NAME',
    payload: "Madhu"
});

store.dispatch({
    type: 'ADD',
    payload: 10
});


store.dispatch({
    type: 'SUB',
    payload: 5
});
