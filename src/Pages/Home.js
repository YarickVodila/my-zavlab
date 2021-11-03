import React, { Component} from 'react';


export default class Home extends Component {
    render() {
        var value = "Need to be checked", text = [], bufer = "";
        function status(buf) {
            text = buf;
            if (text.length < 1) {
                value = "No action required";
            } else {
                value = "Need to be checked";
            }
            for (var i in text) {
                bufer += text[i];
                bufer += (" ");
            }
            return bufer;
        }
        status(["1","2"])
        return (
            <div className="fon">
                <h1 className="homework" >{value}</h1>
                <h1 className="list">{bufer}</h1>
            </div>
        ); 
    }
}