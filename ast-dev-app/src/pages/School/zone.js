import React from "react";
import "./School.css";
import "./zone.css";
// import { GithubPicker } from "react-color";
import SchoolMap from "./SchoolMap";
import ICSmarker from "./ICSmarker";
import Casualty from "./Casualty";


class Zone extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption:'red'
        }

        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);

    }

    toggleVisibility(){
        this.setState(state=>{
            if(state.visibility === false){
                return{visibility:true}
            }
            else if(state.visibility === true){
                return{visibility:false}
            }
        })
    }

    onChangeValue(event){
        console.log(event.target.value);
        this.setState({
            selectedOption:event.target.value
        })
    }


    render(){
        console.log("test2:"+this.props.selectionMode);
        if(this.props.selectionMode===""){
            return(
                <div className = "floorplan">
                    < SchoolMap selectedOption={this.state.selectedOption} visibility = {this.state.selectionMode}/>
                {/* <div className="zonePanel">
                    <div className="zoneTitle">Zone</div>
                    <label class="switch">
                    <input type="checkbox" id ="zonecheck" onClick={this.toggleVisibility}/>
                    <span class="slider round"></span>
                    </label>
                </div> */}
                </div>
            )
        }
        if(this.props.selectionMode==='ICSleadpoint'){
            return(
                <div className = "floorplan">
                           <ICSmarker />
                           < SchoolMap selectedOption={this.state.selectedOption} visibility = {this.state.selectionMode}/>
                {/* <div className="zonePanel">
                    <div className="zoneTitle">Zone</div>
                    <label class="switch">
                    <input type="checkbox" id ="zonecheck" onClick={this.toggleVisibility}/>
                    <span class="slider round"></span>
                    </label>
                </div> */}
                </div>
            )
        }
        if(this.props.selectionMode==="Casualtycollectionpoint"){
            return(
                <div className = "floorplan">
                    <Casualty />
                    < SchoolMap selectedOption={this.state.selectedOption} visibility = {this.state.selectionMode}/>
                {/* <div className="zonePanel">
                    <div className="zoneTitle">Zone</div>
                    <label class="switch">
                    <input type="checkbox" id ="zonecheck" onClick={this.toggleVisibility}/>
                    <span class="slider round"></span>
                    </label>
                </div> */}
                </div>
            )
        }
        if(this.props.selectionMode==='ZoneColor'){
            return(
                <div className = "floorplan">
                    
                < SchoolMap selectedOption={this.state.selectedOption} visibility = {this.state.selectionMode}/>
            {/* <div className="zonePanel">
                
                <div className="zoneTitle">Zone</div>
                <label class="switch">
                <input type="checkbox" id ="zonecheck" onClick={this.toggleVisibility}/>
                <span class="slider round"></span>
                </label> */}
                
                <div className="colorPanel" onChange={this.onChangeValue}>
                    <label className="red">
                        <input className="color" type = "radio" name="color" value="red" checked={this.state.selectedOption === "red"}/>
                    </label>
                    <label className="orange">
                        <input className="color orange" type = "radio" name="color" value="orange" checked={this.state.selectedOption === "orange"}/>
                    </label>
                    <label className="blue"> 
                        <input className="color blue" type = "radio" name="color" value="blue" checked={this.state.selectedOption === "blue"}/>
                    </label>
                    <label className="white"> 
                        <input className="color white" type = "radio" name="color" value="white" checked={this.state.selectedOption === "white"}/>
                    </label>
                </div>
            {/* </div> */}
            </div>
            )
        }


    
    }
}
// function Zone() {
//     const [show,setShow] = useState(false);
//     // const [color, setColor] = useState("");
//     // const [colors, setColors] = useState({});
//     // const colorList = ["#000000", "#ffffff", "#ff0000"];

//   return (
    
//     <div className="zonePanel" >
//             <div className="zoneTitle">Zone</div>
//             <label class="switch">
//                 <input type="checkbox" id ="zonecheck" onChange={()=>setShow(!show)}/>
//                 <span class="slider round"></span>
//             </label>
//             {
//              show?<div className="colorPanel">
//             <label className="red">
//                 <input className="color" type = "radio" name="color" value="red" ></input>
//             </label>
//             <label className="orange">
//                 <input className="color orange" type = "radio" name="color" value="orange"></input>
  
//             </label>
//             <label className="blue"> 
//                 <input className="color blue" type = "radio" name="color" value="blue"></input>
  
//             </label>
//             </div>:null
//             }

//     </div>
//   );

// }


export default Zone;
