import React, { Component } from 'react';


export default class Driver extends React.Component {



    render() {
        return (
            <div>
                {this.props.driver.phone}
        </div>
        );
    }
}