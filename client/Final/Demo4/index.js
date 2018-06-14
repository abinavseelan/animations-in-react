import React, { Component } from 'react';
import contacts from './mock-details';

const ListView = ({ contacts, onClick }) => (
    <div className="list-items">
        {
            contacts.map((contact, index) => (
                <div className="list-item" key={contact._id} onClick={() => { onClick(index) }}>
                    <div>
                        <img src={contact.picture} />
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
    <div className="item-details"></div>
);

class Demo4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentContact: null,
        }

        this.setCurrentContact = this.setCurrentContact.bind(this);
    }

    setCurrentContact(index) {
        this.setState({
            currentContact: contact[index],
        });
    }

    back() {
        this.setState({
            currentContact: null,
        });
    }

    render() {
        return (
            this.currentContact
                ? (
                    // <DetailView
                    //     contact={this.state.currentItem}
                    // />
                    null
                )
                : (
                    <ListView
                        contacts={contacts}
                        onClick={this.setCurrentContact}
                    />
                )
        )
    }
};

export default Demo4;