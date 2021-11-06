import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        var value = "Требуются действия", text = [], bufer = "";
        function status(buf) {
            text = buf;
            if (text.length < 1) {
                value = "Действий не требуется";
            } else {
                value = "Требуются действия";
            }
            for (var i in text) {
                bufer += text[i];
                bufer += (" ");
            }
            return bufer;
        }
        status(["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2"])
        return (
            <div className="fon">
                <h1 className="homework" >{value}</h1>
                <h1 className="list">{bufer}</h1>
            </div>
        );
    }
}