import React, { Component } from "react";
import "./style.css";
import images from "./../images.json";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrement = () => {
        if (this.state.count < images.length - 1) {
            this.setState({ count: this.state.count + 1 });
        }

    };

    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        return (

            <div className="card">
                <div className="img-container">
                    <img src={images[this.state.count].image} />
                </div>
                <div>

                    <button
                        onClick={this.handleDecrement}
                    >
                        Prev
                        </button>
                    <button
                        onClick={this.handleIncrement}
                    >
                        Next
                        </button>
                </div>

            </div>
        );
    }
}

export default Slider;