import React, {useState} from "react";

function Main() {
  const [voted, setVoted] = useState(false)
  const [items, setItems] = useState([{title:'item 1', votes: 0}, {title:'item 2', votes: 3}])

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
                  (<button >{item.votes}</button>):
                  (<button onClick={()=> handleAddVote(item.title)}>Pressione para votar</button>)}
              </li>
            )
          })}
        </ul>
      </body>
    </>
    )
}

export default Main;