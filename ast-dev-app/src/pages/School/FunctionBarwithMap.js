import React from "react";
import "./FunctionBarwithMap.css";
import Zone from "./zone";



class FunctionBarwithMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true,selectionMode:""};
        this.handleClick = this.handleClick.bind(this);
        this.modeChange = this.modeChange.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    modeChange(event){
    console.log(event.target.value);
    this.setState({
        selectionMode:event.target.value
    })
}

    render(){
        return(
            <div className="rightColumn">
                <div className="tools">
                    <div className="functionMenu" onChange={this.modeChange}>
                        <input id="ICSleadpoint" type="radio" name="mode" value = "ICSleadpoint"/> <label className="mode" for="ICSleadpoint">ICS lead point</label>

                        <input id="Casualtycollectionpoint" type="radio" name="mode" value = "Casualtycollectionpoint"/><label className="mode" for="Casualtycollectionpoint" >Casualty collection point</label>

                        <input id="ZoneColor" type="radio" name="mode" value = "ZoneColor"/><label className="mode" for="ZoneColor" >Zone color</label>
                    </div>

                    <div className="icslead"> <strong>ICS lead: </strong> {this.state.isToggleOn ? 'N/A ' : 'John Doe '}<button type="button" onClick={this.handleClick}>{this.state.isToggleOn ? 'Assign ' : 'Switch '} </button></div>
                </div>
                <div className="mapwindow">
                    <Zone selectionMode = {this.state.selectionMode}/>
                </div>
            </div>
        )
    }
}

export default FunctionBarwithMap;