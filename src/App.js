import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person= {
    name: "Mostafiz",
    wife: "Jerin"
  }
  var person2= {
    name: "Rahman",
    wife: "Shahida"
  }
  var style={
    color: "red",
    backgroundColor: "white"
  }
  const nayoks =['Mostafiz', 'Rahman','Abdullah','Jerin','Umayer','Shahida']
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: "PDF Reader", price:'$6.99'},
    {name: "Permire EL", price:'$56.99'}
  ]
     return (
    <div className="App">
      <header className="App-header">
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
          {products.map(product => <li>{product.name}</li>)}
        </ul>
        <Counter> </Counter>
        <Users></Users>
        {products.map(product => <Product product={product}></Product>)}
      </header>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(res => res.json())
              .then(data => setUsers(data));
                }, [])
  return(
    <div>
      <h3>DynamicUsers: {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}


function Product(props){
  const productStyle={
    border: '1px solid gray',
    margin: '10px',
    color: "red",
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease=() => setCount(count +1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>

  )

}
export default App;
