import React, {useState} from "react";

import './style.css'

function Main() {
  const [voted, setVoted] = useState(false)
  const [items, setItems] = useState([{title:'Beer', votes: 0}, {title:'Tequila', votes: 3}])

  function handleAddVote(itemVoted){
    setVoted(true)
    setItems(
      items.map((item)=>{
        if(item.title === itemVoted){
          item.votes += 1;
          return item
        }
        return item;
      })
    )
  }
    return(
      <>
      <header>
        <h1>Voting App</h1>
      </header>
      <body>
        <ul>
          {items.map(item =>{
            return (
              <li key={item.title}>
                <h2> {item.title} </h2>
                {voted ? 
                  (<button >{item.votes} <br></br> votes </button>):
                  (<button onClick={()=> handleAddVote(item.title)}>Click here to vote</button>)}
              </li>
            )
          })}
        </ul>
      </body>
    </>
    )
}

export default Main;