import React, { Component } from 'react';
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
    // If open, return default, else return calculated values
}

function calculateFinalStyle(openState, i, num) {
    // If open, return calculate else return default3
}

class Demo2 extends Component {
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
                        <div className="menu-item">
                            <FontAwesomeIcon className="inverse" icon={value.icon} />
                        </div>
                    ))
                }
                <div className="menu-btn" onClick={this.toggleMenu}>
                    <FontAwesomeIcon
                        className="inverse"
                        icon={faPlus}
                    />
                </div>
            </div>
        );
    }
};

export default Demo2;