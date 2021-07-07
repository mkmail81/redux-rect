const initialstate= 20000;
// const tailerreducer = (state= {name: 'Mahesh', age: '40'}, action) => {
const tailerreducer = (state = initialstate, action) => {
 switch (action.type) {
    case "DEPOSIT" :
        return state + action.payload;
    case "WITHDRAW" :
        return state - action.payload;    
    default:
         return state;

 }
}

export default tailerreducer;