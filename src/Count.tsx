import { Component } from 'react'; 

interface prop {
    count:number
}

class Counter extends Component< prop> { 
state:prop = {
 count: 0
 }; 
 
 increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render() { 
return (
<div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div>
)
 }
 } 
export default Counter;