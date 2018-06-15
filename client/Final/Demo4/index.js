import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';

const menuItems = [
    {
        id: 0,
        icon: faSmile
    },
    {
        id: 1,
        icon: faMeh
    },
    {
        id: 2,
        icon: faFrown
    },
]

function calculatePosition(i, num) {
    const angle = (i + 1) * (180 / (num + 1));
    const length = 350;
    const radianFactor = Math.PI / 180;

    return {
        x: Math.cos(angle * radianFactor) * length,
        y: Math.sin(angle * radianFactor) * length,
    };
}

function calculateInitialStyle(openState, i, num) {
    if (openState) {
        return {
            opacity: 0,
            x: 0,
            y: 0,
        };
    }

    const { x, y } = calculatePosition(i, num);

    return {
        opacity: 1,
        x,
        y,
    };
}

function calculateFinalStyle(openState, i, num) {
    if (openState) {
        const { x, y } = calculatePosition(i, num);

        return {
            opacity: spring(1),
            x: spring(x, {
                damping: 10,
            }),
            y: spring(y, {
                damping: 10,
            }),
        };
    }

    return {
        opacity: spring(0),
        x: spring(0),
        y: spring(0),
    };
}

class Demo4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: undefined,
        };

        this.closeMenu = this.closeMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    closeMenu() {
        this.setState({
            open: false,
        });

        window.removeEventListener('click', this.closeMenu);
    }

    toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            open: true,
        }, () => {
            window.addEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div className="container">
                {
                    typeof this.state.open !== 'undefined' && menuItems.map((value, index) => (
                        <Motion
                            defaultStyle={calculateInitialStyle(this.state.open, index, 3)}
                            style={calculateFinalStyle(this.state.open, index, 3)}
                            key={value.id}
                        >
                            {
                                interpolatedStyles => (
                                    <div
                                        className="menu-item"
                                        style={{
                                            transform: `translate3d(${interpolatedStyles.x}px, -${interpolatedStyles.y}px, 0)`
                                        }}
                                    >
                                        <FontAwesomeIcon className="inverse" icon={value.icon} />
                                    </div>
                                )
                            }
                        </Motion>
                    ))
                }
                {
                    <Motion
                        defaultStyle={this.state.open ? { o: 0 } : { o: 45 }}
                        style={this.state.open ? { o: spring(45) } : { o: spring(0) }}
                    >
                        {
                            styles => (
                                <div
                                    style={{
                                        transform: `rotate(${styles.o}deg)`
                                    }}
                                    className="menu-btn"
                                    onClick={this.toggleMenu}
                                >
                                    {
                                        console.log(styles.o)
                                    }
                                    <FontAwesomeIcon
                                        className="inverse"
                                        icon={faPlus}
                                    />
                                </div>
                            )
                        }
                    </Motion>
                }
            </div>
        );
    }
};

export default Demo4;