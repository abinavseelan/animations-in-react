import React, { Component } from 'react';
import contacts from './mock-details';
import { Motion, spring } from 'react-motion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'


const ListView = ({ contacts, onClick }) => (
    <div className="list-items">
        {
            contacts.map((contact, index) => (
                <div className="list-item" key={contact._id}>
                    <div>
                        <img src={contact.picture} onClick={(event) => { onClick(event, index) }} />
                    </div>
                    <div>
                        <h3>{`${contact.name.first} ${contact.name.last}`}</h3>
                        <h4>{contact.phone}</h4>
                    </div>
                </div>
            ))
        }
    </div>
);

const DetailView = ({ contact, onClick, currentContactPosition }) => (
    <div className="item-details">
        <div className="image-container">
            <Motion
                defaultStyle={currentContactPosition}
                style={{
                    top: spring(0),
                    left: spring(0),
                    width: spring(100),
                    borderRadius: 0,
                }}
            >
                {
                    interpolatingStyles => (
                        <img style={{
                            top: interpolatingStyles.top,
                            left: interpolatingStyles.left,
                            borderRadius: interpolatingStyles.borderRadius,
                            width: `${interpolatingStyles.width}%`,
                        }} src={contact.picture} />
                    )
                }
            </Motion>
        </div>

        <Motion
            defaultStyle={{
                opacity: 0,
                y: 200
            }}
            style={{
                opacity: spring(1),
                y: spring(0),
            }}
        >
            {
                (style) => (
                    <div className="contact-details" style={{
                        opacity: style.opacity,
                        transform: `translateY(${style.y}px)`
                    }}>
                        <p><strong>Name:</strong> {`${contact.name.first} ${contact.name.last}`}</p>
                        <p><strong>Phone:</strong> {contact.phone}</p>
                        <p><strong>Address:</strong> {contact.address}</p>
                    </div>
                )
            }
        </Motion>

        <div className="back-btn">
            <FontAwesomeIcon icon={faTimes} onClick={onClick} />
        </div>
    </div>
);

class Demo4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentContact: null,
        }

        this.setCurrentContact = this.setCurrentContact.bind(this);
        this.back = this.back.bind(this);
    }

    setCurrentContact(event, index) {
        const { target } = event;

        this.setState({
            currentContact: contacts[index],
            currentContactPosition: {
                top: target.offsetTop,
                left: target.offsetLeft,
                width: 60,
            }
        });
    }

    back() {
        this.setState({
            currentContact: null,
        });
    }

    render() {
        return (
            <div className="demo-4-bg">
                <div className="mobile-mock">
                    {
                        this.state.currentContact
                            ? (
                                <DetailView
                                    contact={this.state.currentContact}
                                    onClick={this.back}
                                    currentContactPosition={this.state.currentContactPosition}
                                />
                            )
                            : (
                                <ListView
                                    contacts={contacts}
                                    onClick={this.setCurrentContact}
                                />
                            )
                    }
                </div>
            </div>
        )
    }
};

export default Demo4;