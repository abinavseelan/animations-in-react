import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStream from '@fortawesome/fontawesome-free-solid/faStream'

import { Motion, spring } from 'react-motion';

const AnimatingCard = () => (
    <Motion
        defaultStyle={{
            x: 0,
            opacity: 1
        }}
        style={{
            x: spring(window.innerWidth, {
                stiffness: 20,
            }),
            opacity: spring(0)
        }}
    >
    {
        (interpolatedStyle) => (
            <div
                style={{
                    transform: `translateX(${interpolatedStyle.x}px)`,
                    opacity: interpolatedStyle.opacity
                }}
                className="card"
            />
        )
    }
    </Motion>
)

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
                        this.state.dismissed
                            ? (
                                <AnimatingCard key={cardNumber} />
                            )
                            : (
                                <div className="card" key={cardNumber} />
                            )
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
