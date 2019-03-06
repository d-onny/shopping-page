import React from "react";

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            backgroundImage: `url(${this.props.passedImg.link})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 20%",
            height: 450
        };
        return <div className="slide" style={styles} />;
    }
}
