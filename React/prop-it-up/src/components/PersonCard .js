import React,{ Component } from "react";


class PersonalCard extends Component{
    constructor(props){
        super(props);
        this.state={
            age:this.props.age
        }
    }
    incrementOne(){
        this.setState({
            age:this.state.age+1
        })
    }
    render(){
    
        const { firstName, lastName ,hairColor } = this.props;
        const{age}=this.state;
        return (
            <>
            <div>
                <h1>{lastName},{firstName}</h1>
                <p>Age:{age}</p>
                <p>Hair Color:{hairColor}</p>
                <button onClick={()=>this.incrementOne()}>Birthday Button for {firstName} {lastName} </button>
            </div>
            </>
            );
    }

}
export default PersonalCard;