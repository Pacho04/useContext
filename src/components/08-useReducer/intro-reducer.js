
const initialState = [{
    id: 1,
    todo: 'comprar Pan',
    done: false
}];

//useReducer
const todoReducer = (state = initialState, action) => {

    //si hay una action y es igual a agregar
    if(action?.type === 'agregar'){
        return [...state , action.payload];
    }

    return  state;
}

let todos = todoReducer();

//nuevo arreglo con un nuevo objeto
const newTodo = [{
    id: 2,
    todo: 'comprar Harina',
    done: false
}];

//action
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos,agregarTodoAction);

console.log(todos);