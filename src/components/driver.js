import React, { Component } from 'react';

export default class Driver extends React.Component {

    getImageSrc() {
        return this.props.driver.profile_image ? this.props.driver.profile_image : "https://i.imgur.com/S2IRHcz.jpg";
    }


    render() {
        return (
            <div className="driver">
                <div className="driver__image-container">
                    <img className="driver__image-container--img" src={this.getImageSrc()} alt="" />
                </div>
                <div className="driver__details-container">
                    <div className="driver__details-container--full-name">{this.props.driver.name}</div>
                    <div className="driver__details-container--rank">{this.props.driver.driverRank}</div>
                    <div>
                        <span>Phone Number:</span>
                        <span>{this.props.driver.phone}</span>
                    </div>
                    <div>
                        <span>Email:</span>
                        <span>{this.props.driver.email}</span>
                    </div>
                    <img className="driver__details-container--type-icon"
                        src={require("../pictures/" + this.props.driver.driverType.trim().toLocaleLowerCase() + ".svg")} alt="" />
                </div>
            </div>
        );
    }
}