import React, { Component } from 'react';
import contacts from './mock-details';
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

const DetailView = ({ contact, onClick }) => (
    <div className="item-details">
        <div className="image-container">
            <img src={contact.picture} />
        </div>

        <div className="contact-details">
            <p><strong>Name:</strong> {`${contact.name.first} ${contact.name.last}`}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Address:</strong> {contact.address}</p>
        </div>

        <div className="back-btn">
            <FontAwesomeIcon icon={faTimes} onClick={onClick} />
        </div>
    </div>
);

class Demo3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentContact: null,
        }

        this.setCurrentContact = this.setCurrentContact.bind(this);
        this.back = this.back.bind(this);
    }

    setCurrentContact(event, index) {
        this.setState({
            currentContact: contacts[index],
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

export default Demo3;