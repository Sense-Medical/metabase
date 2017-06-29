import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class LogoIcon extends Component {
    static defaultProps = {
        size: 32
    };

    static propTypes = {
        size: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
        dark: PropTypes.bool
    };

    render() {
        let { dark, height, width, size } = this.props;
        return (
            <svg className={cx({"text-brand": !dark }, { "text-white": dark })} viewBox="0 0 1024 1024" width={width || size} height={height || size} fill="rgba(255,255,255,0.5)">
                <path fill="#000000" id="a" d="M667,0 C769.792,0 821.179733,0 877,17 C936.9344,39.4837333 984.516267,87.0656 1007,147 C1024,202.811733 1024,254.216533 1024,357 L1024,667 C1024,769.792 1024,821.179733 1007,877 C984.516267,936.9344 936.9344,984.516267 877,1006 C821.179733,1024 769.792,1024 667,1024 L357,1024 C254.208,1024 202.811733,1024 147,1006 C87.0656,984.516267 39.4837333,936.9344 17,877 C0,821.179733 0,769.792 0,667 L0,357 C0,254.216533 0,202.811733 17,147 C39.4837333,87.0656 87.0656,39.4837333 147,17 C202.811733,0 254.208,0 357,0 L667,0 Z"/>
                <circle cx="512" cy="512" r="322" stroke="#FFFFFF" stroke-width="30"/>
                <path stroke="#FFFFFF" stroke-width="30" d="M715.423545,760.734017 L504.10234,549.412813 C482.624505,527.934978 482.623026,493.113854 504.097646,471.639234 L714.345404,261.391476 C789.328841,321.909624 834,412.980927 834,511.5 C834,609.530617 789.773698,700.198205 715.423545,760.734017 Z"/>
            </svg>
        );
    }
}
