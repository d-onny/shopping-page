import React from "react";
import Slide from "./proj-slide.jsx";

export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
                {
                    id: 0,
                    link:
                        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg"
                },
                {
                    id: 1,
                    link:
                        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg"
                },
                {
                    id: 2,
                    link:
                        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"
                },
                {
                    id: 3,
                    link:
                        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg"
                }
            ],
            currentIndex: 0,
            maxIndex: 0
        };

        this.goLeft = this.goLeft.bind(this);
        this.goRight = this.goRight.bind(this);
        this.displayImg = this.displayImg.bind(this);
        this.buttonColor = this.buttonColor.bind(this);
    }

    componentDidMount() {
        const maxIndex = this.state.images.length - 1;
        this.setState({ maxIndex: maxIndex });
    }

    goLeft(index) {
        let currentIndex = this.state.currentIndex;
        if (index === 0) {
            return;
        }

        currentIndex = index - 1;
        this.setState({ currentIndex: currentIndex });
    }

    goRight(index) {
        let currentIndex = this.state.currentIndex;
        const maxIndex = this.state.maxIndex;
        if (index === maxIndex) {
            return;
        }
        currentIndex = index + 1;
        this.setState({ currentIndex: currentIndex });
    }

    buttonColor() {
        const color =
            this.state.currentIndex === this.state.maxIndex
                ? "danger"
                : "primary";
        return "btn btn-" + color + " btn-sm m-2";
    }

    render() {
        return (
            <div className="slider">
                <button
                    onClick={() => this.goLeft(this.state.currentIndex)}
                    className="btn btn-primary btn-sm m-2"
                >
                    Left
                </button>

                <Slide
                    keys={currentImg.id}
                    currentState={this.state}
                    images={this.state.images}
                    passedImg={this.state.images[this.state.currentIndex]}
                />

                <button
                    onClick={() => this.goRight(this.state.currentIndex)}
                    className={this.buttonColor()}
                >
                    Right
                </button>
                {this.state.currentIndex === this.state.maxIndex &&
                    "Last page reached!"}
            </div>
        );
    }
}
