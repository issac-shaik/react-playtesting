import User from "./User";
import React from "react";

class About extends React.Component {

        constructor(props) {
            super(props);
            console.log("parent constructor");
        }

        componentDidMount() {
            console.log("parent comp did");
        }
        
        render() {
            console.log("parent render");
            return (
                
                <div>
                    <h1>About</h1>
                    <h2>This is Namaste React Web Series</h2>
                    <User first={"Ai"} last ={"Zack"}/>
        
                    <UserClass first={"Ai"} last ={"Zack"} />

                </div>
            );
        }
    }
export default About;