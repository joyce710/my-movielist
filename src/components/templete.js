import React from 'react';
import '../App.css'

function Templete (props){
   const {listName,list,eventhandler} = props;
        return(
            <div>
                <h2>{listName}</h2>
                <ul  class="container">
                    { list.map(item=>(
                    <li class="li-container" key={item.id} >
                        <p>{item.title}</p>
                        <img src={item.img} alt={item.title}></img>
                        <button id={item.id} onClick={()=>eventhandler(item)}>
                               {listName==="My List"?"remove":"add"}
                        </button>

                    </li>)
                    )}
                </ul>
            </div>
        )
                    
}
export default Templete