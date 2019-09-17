import React from 'react';
class Form extends React.Components{
    construnctor(props){
        super(props);
        this.state={value:''}

    }
handleChange=(event)=>{
    this.setState({
        value:event.target.value
    })
}
handleSubmit=()=>{
}
render(){
    return (
        <div>
            <form>
                <label>Name
                <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type='submit' value="submit"></input>
            </form>
        </div>
    )
}
}