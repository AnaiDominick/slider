import React, { Component } from "react";
import images from "./../images.json";


class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlInput: ""
        }
    }

    onInputChange = event => {
        const newValue = event.target.value;

        this.setState({
            urlInput: newValue
        });
    };

    addURL = (event) => {
        event.preventDefault();
        images.push({ image: this.state.urlInput });

        this.setState({
            urlInput: ""
        });

    }



    render() {
        return (
            <div>
                <form>
                    <label>
                        URL:
                    <input onChange={this.onInputChange} type="text" name="url" />
                    </label>
                    <input onClick={this.addURL} type="submit" value="Submit" className="submit" />
                </form>
            </div>
        );
    }
}

export default Submit;