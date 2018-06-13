import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';

class Demo3 extends Component {
    render() {
        return (
            <StaggeredMotion
                defaultStyles={[
                    {
                        left: 0,
                        opacity: 0,
                    },
                    {
                        left: 0,
                        opacity: 0
                    },
                    {
                        left: 0,
                        opacity: 0
                    },
                ]}
                styles={
                    prevStyles => prevStyles.map((_, i) => {
                        return i === 0
                            ? {
                                left: spring(window.innerWidth - 200, {
                                    stiffness: 40,
                                    dampening: 10,
                                }),
                                opacity: spring(1)
                            }
                            : { left: prevStyles[i - 1].left, opacity: prevStyles[i - 1].opacity }
                    })
                }
            >
                {
                    styles => (
                        <div>
                            {
                                styles.map((style, index) => (
                                    <div
                                        key={index}
                                        className="box"
                                        style={{
                                            top: `${300 * index}px`,
                                            ...style
                                        }}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </StaggeredMotion>
        )
    }
};

export default Demo3;