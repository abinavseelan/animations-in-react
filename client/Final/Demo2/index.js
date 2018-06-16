import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStream from '@fortawesome/fontawesome-free-solid/faStream'

import { Motion, spring } from 'react-motion';

const initialStyle = {
    x: 0,
    opacity: 1
}

const finalStyle = {
    x: spring(window.innerWidth, {
        stiffness: 20,
    }),
    opacity: spring(0)
}

class Demo2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dismissed: false
        };

        this.dismiss = this.dismiss.bind(this);
    }

    dismiss(e) {
        e.preventDefault();

        this.setState({
            dismissed: true,
        });
    }

    render() {
        return (
            <div className="demo-3-bg">
                {
                    [0, 1, 2].map(cardNumber => (
                        <Motion
                            defaultStyle={initialStyle}
                            style={this.state.dismissed ? finalStyle : initialStyle}
                        >
                            {
                                (interpolatedStyle) => (
                                    <div
                                        className="card"
                                        style={{
                                            transform: `translateX(${interpolatedStyle.x}px)`,
                                            opacity: interpolatedStyle.opacity
                                        }}
                                        className="card"
                                        key={cardNumber}
                                    />
                                )
                            }
                        </Motion>
                    ))

                }
                <button
                    onClick={this.dismiss}
                    className="dismiss-btn"
                >
                    <FontAwesomeIcon icon={faStream} />
                </button>
            </div>
        )
    }
}

export default Demo2;
