import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStream from '@fortawesome/fontawesome-free-solid/faStream'

class Demo3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dimissed: false
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
          this.state.dismissed
            ? (
              <StaggeredMotion
                defaultStyles={[
                  {
                    opacity: 1,
                    x: 0
                  },
                  {
                    opacity: 1,
                    x: 0
                  },
                  {
                    opacity: 1,
                    x: 0
                  }
                ]}
                styles={prevStyles => prevStyles.map((_, index) => {
                  return index === 0
                    ? ({
                      opacity: spring(0, {
                        stiffness: 40
                      }),
                      x: spring(window.innerWidth * 1.5, {
                        stiffness: 40
                      }),
                    })
                    : ({
                      opacity: prevStyles[index - 1].opacity / 1,
                      x: prevStyles[index - 1].x / 1.25
                    })
                })}
              >
                {
                  interpolatedStyles => (
                    <div>
                      {
                        interpolatedStyles.map((style, index) => (
                          <div
                            className="card"
                            style={{
                              transform: `translateX(${style.x}px)`,
                              opacity: style.opacity,
                            }}
                            key={index}
                          />
                        ))
                      }
                    </div>
                  )
                }
              </StaggeredMotion>
            )
            : (
              [0, 1, 2].map(cardNumber => (
                <div className="card" key={cardNumber} />
              ))
            )
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