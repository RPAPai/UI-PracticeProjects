import {createStore} from 'redux';

const initialState = {
    result: 5,
    lastValues: [],
    name: "John"
};

//Since we are manipulating the state(object) properties directly. original obj gets changed(ref type).
//So this reducer creates mutable state. We lose the prev state info. To get that, we need to create immutable state.

const mutable_reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            state.result += action.payload;
            break;
        case 'SUB':
            state.result -= action.payload;
            break;
    }
    return state;
}

//const store = createStore(mutable_reducer);//No need to pass initialState as 2nd param, as it's default in the mutable_reducer func

//Here let's create an immutable state, by creating new state obj and gettign all the properties and then 
//manipulating the properties that needs to be changed.


//npm install babel-preset-stage-1
const immutable_reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            state = {
                //...state,
                result: state.result,
                lastValues: state.lastValues,
                name: state.name,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case 'SUB':
            state = {
                //...state,
                result: state.result,
                lastValues: state.lastValues,
                name: state.name,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
}

const store = createStore(immutable_reducer, initialState);

store.subscribe(() => {
    console.log('Store Updated..', store.getState());
});

store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
    type: 'SUB',
    payload: 5
});

store.dispatch({
    type: 'ADD',
    payload: 15
});

store.dispatch({
    type: 'SUB',
    payload: 10
});

/*
store.dispatch({
    type: 'SET_NAME',
    payload: 'Roopa & Madhu' 
});*/