
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './user'
import Friends from './Friends'
import Posts from './Posts'

function App() {
  function handleClick(){
    alert ('btn clicked')
  }
   // arro func
  const handleClick2 = () =>{
       alert('btn clicked 2')
  }

  const addToFive = (num) =>{
     alert(num + 5)
  }

  return (
    <>
     
      <h3>React Core Concept 2 </h3>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     <button onClick={handleClick} > Click Me!! </button> <br /> <br />
     <button onClick={handleClick2} > Click 2 </button>     <br /> <br />
     <button onClick={()=>{alert('third clicked')}} > third </button>   <br /> <br />
    {/* aktu addvance */}
     <button onClick={()=> addToFive(3)} >Four</button>

    
    </>
  )
};

export default App
