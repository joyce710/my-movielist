import React from 'react'
import logo from "../../src/Netflix.jpg"
import Templete from './templete';
import { connect } from 'react-redux';
import "../App.css";
import * as actions from '../store/actionCreator'

class HomePage extends React.Component{
    componentDidMount(){
        this.props.loadData();
    }
    render(){
    const {mylist,recommendationList,RemoveHandler,AddHandler} = this.props
    return (
        <div>
            <img  className='logo' src={logo} alt={logo}></img>
            <Templete listName="My List" list={mylist} eventhandler={RemoveHandler}></Templete>
            <Templete listName="Recommendation" list={recommendationList} eventhandler={AddHandler}></Templete>
            <h2>movie List</h2>
            <ul>
                {mylist.map(item=><li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
    }
}
// transform the current Redux store state into props then can be passed to component
const mapStateToProps=(state)=>{
    return {
        mylist : state.myList,
        recommendationList: state.recommendationList,
    };
};
// return a callback function can be used in the component
const mapDispatchToProps=(dispatch)=>{
    return {
        loadData: ()=>{dispatch(actions.fetchData())},
        RemoveHandler:data=>{
            return dispatch(actions.removeFromMylist(data))
        },
        AddHandler: data=>{
            return dispatch(actions.addToMylist(data));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)