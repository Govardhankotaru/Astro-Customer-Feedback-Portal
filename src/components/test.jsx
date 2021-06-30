import React from "react";
import { Button } from "react-bootstrap";

const Child = (props) => {
    return (
        <p>{props.name}</p>
    )
}



class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: 0,
            gender: "male"
        }
    }
    handleClick = () => {
        this.setState({
            name: "vineet",
            age: 24,
            gender: "female"
        })
    }
    render() {
        return (
            <div>
                <Child name={this.state.name}/>
                <p>{this.state.age}</p>
                <h1>{this.state.gender}</h1>
                <Button onClick={this.handleClick}>clickMe</Button>
            </div>
        )
    }
}

export default Home