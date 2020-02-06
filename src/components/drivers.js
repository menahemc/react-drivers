import React, { Component } from 'react';
import axios from 'axios';
import Driver from "./driver"



export default class Drivers extends React.Component {

    state = {
        drivers: []
    }

    componentDidMount() {
        axios.get(`http://private-05627-frontendnewhire.apiary-mock.com/contact_list`)
            .then(res => {
                const drivers = res.data;
                this.setState({ drivers });
                console.log(this.state);
            })
    }


    render() {
        return (
            <div>{
                this.state.drivers.map((dr, i) => <Driver key={i} driver={dr} />)
            }
            </div>
        );
    }
}