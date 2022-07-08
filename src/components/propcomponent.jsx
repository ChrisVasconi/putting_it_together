import React, { Component } from 'react';


class UserCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Age: props.Age // Set state to the match the value from props as a start position. This is a good idea because we will take in the current age, then increment by 1. 
        }
    }
    // const { FirstName, LastName, HairColor } = props; //Like classes, need the names of what ur calling - an object

    addBirthday = () => {
        this.setState({ Age: this.state.Age + 1 })
    }
    //States can change props
    render() {
        return (
            <div>
                <h1>{this.props.LastName}, {this.props.FirstName} </h1>
                <p> Age: {this.state.Age} </p>
                <p> Haircolor: {this.props.HairColor} </p>
                <button onClick={this.addBirthday} className="submit"> Happy Birthday! </button>
            </div>
        )

    }
}





export default UserCard;


//props