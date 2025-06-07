interface prop {
    name:string
}

const Greeting = ({ name }:prop) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;
