import axios from 'axios'

function gotData(res){
    return{
        type:"GOT_DATA",
        data: res.data
    }
}
export const fetchData = () =>{
    return (dispatch,getState) => {
        axios
              .get('/movieData.json')
              .then(response=>{
                  dispatch(gotData(response))
                  console.log(response);
              })
              .catch(error=>{
                  console.log('error');
              })
        
    }
}
export const addToMylist=(data)=>{
    return {
        type:'ADD_TO_MYLIST',
        data:data
    }
}
export const removeFromMylist=(data)=>{
    return{
        type:'REMOVE_FROM_MYLIST',
        data:data
    }
}