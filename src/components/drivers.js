import React, { Component } from 'react';
import axios from 'axios';
import Driver from "./driver"

export default class Drivers extends React.Component {

    state = {
        drivers: [],
        filteredDrivers: []
    }

    componentDidMount() {
        axios.get(`http://private-05627-frontendnewhire.apiary-mock.com/contact_list`)
            .then(res => {
                const drivers = res.data;
                this.setState({ drivers });
                this.setState({ filteredDrivers: drivers });
            })
    }

    filterItems = (event) => {
        let keys = ["name", "driverType", "driverRank", "phone", "email"];
        let term = event.target.value;
        let filteredDrivers = (this.state.drivers || []).filter(item => keys.some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
        this.setState({ filteredDrivers });
    }

    header() {
        return (
            <div className="header">
                <div className="header__title">Contact List</div>
                <div className="header__search-container">
                    <input onChange={this.filterItems} className="header__search-container--input" type="text" placeholder="Search..." />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.header()}
                <div className="drivers">
                    <div className="drivers__wrapper">
                        <div className="drivers__wrapper--container">
                            {this.state.filteredDrivers.map((dr, i) => <Driver key={i} driver={dr} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}