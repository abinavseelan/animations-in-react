import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStream from '@fortawesome/fontawesome-free-solid/faStream'

class Demo3 extends Component {
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
                <div className="card" key={cardNumber} />
            ))
        }
        <button
          onClick={this.dismiss}
          className="dismiss-btn"
        >
          <FontAwesomeIcon icon={faStream} />
        </button>
      </div>
    );
  }
};

export default Demo3;