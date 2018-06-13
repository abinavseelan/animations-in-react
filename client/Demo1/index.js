import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Demo1 extends Component {
    render() {
        return (
            <Motion
                defaultStyle={{
                    left: 0
                }}
                style={{
                    left: spring(window.innerWidth - 200),
                }}
            >
                {
                    (interpolatedStyle) => (
                        <div
                            className='box'
                            style={interpolatedStyle}
                        />
                    )
                }
            </Motion>
        )
    }
};

export default Demo1;
