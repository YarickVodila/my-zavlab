import React, { Component } from 'react';

export default class About extends Component {
    render() {
        var k1 = "Yes", k2 = "Yes", k3 = "Yes";
        function status(d, w, l) {
            if (d == 1) {
                k1 = "Yes";
            } else {
                k1 = "No";
            }
            if (w== 1) {
                k2 = "Yes";
            } else {
                k2 = "No";
            }
            if (l == 1) {
                k3 = "Yes";
            } else {
                k3 = "No";
            }
            return k1, k2, k3;
        }

        status(1, 1, 1);

        return (
            <div className="fon">
                <div className="number">314</div>
                <h1 className="door">Door:</h1>
                <h1 className="window">Window:</h1>
                <h1 className="light">Light:</h1>

                <h1 className="statusDoor">{k1}</h1>
                <h1 className="statusWindow">{k2}</h1>
                <h1 className="statusLight">{k3}</h1>
            </div>
        ); 
    }
}