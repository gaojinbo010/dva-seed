import request from '../utils/request';
const User={
    namespace:"user",

    state:{
        list:[],
        visibleModal:false
    },
    reducers:{
        save(state,{ payload:{ data:list } }){

            return {
                ...state,
                list
            };
        }
    },
    effects:{
        * query({},{ call,put }){
            const { data }=yield call(request,'/api/users',{ method:'GET' });
            yield put({type:'save',payload:{ data }});
        },
        * create({ payload:{ user } },{ call,put }){
            yield call(request,'/api/users',{ 
                body:JSON.stringify(user),
                method:'POST'
            });
            yield put({type:'query',payload:{  }});
        }
    }, 
    subscriptions:{
        setup({ dispatch,history }){

            console.log('running subscriptions ...');
            return history.listen(({ pathname,search })=>{

                console.log(`pathname: ${pathname}`);
                dispatch({ type:'query'});
            });
        }
    }
};

export default User;