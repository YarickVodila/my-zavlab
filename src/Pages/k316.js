import React, { Component } from 'react';

export default class k316 extends Component {
    render() {
        var k1 = "Открыты", k2 = "Открыты", k3 = "Включен";
        function status(d, w, l) {
            if (d == 1) {
                k1 = "Открыты";
            } else {
                k1 = "Закрыты";
            }
            if (w == 1) {
                k2 = "Открыты";
            } else {
                k2 = "Закрыты";
            }
            if (l == 1) {
                k3 = "Включен";
            } else {
                k3 = "Выключен";
            }
            return k1, k2, k3;
        }

        status(0, 0, 0);
        return (
            <div>
                <div className="fon">
                    <div className="number">316</div>
                    <h1 className="door">Двери:</h1>
                    <h1 className="window">Окна:</h1>
                    <h1 className="light">Свет:</h1>

                    <h1 className="statusDoor">{k1}</h1>
                    <h1 className="statusWindow">{k2}</h1>
                    <h1 className="statusLight">{k3}</h1>
                </div>
            </div>
        );
    }
}