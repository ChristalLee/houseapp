import {createStore} from 'redux'

// 创建一个仓库，所有数据都会存放在此store中
// state:当前store中保存的状态   action:本次dispatch
var store=createStore(function(state,action){
    console.log(state,action);
    
    switch(action.type){
        // case 'changeName':return action.name
        // case 'changeName':return state+1
        case 'addHouse':{return [action.obj,...state]}
        default: return []
    }
})

store.dispatch({
    type:'changeName',
    // name:'李四',
    // num:store.state+=1
})

console.log(store.getState());

export default store
