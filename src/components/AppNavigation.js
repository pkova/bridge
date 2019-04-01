import React from 'react';

class AppNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.navigate = this.navigate.bind(this)
  }

  navigate() {
    let appView;
    if (this.props.appView === "bridge") appView = "walletgen"
    if (this.props.appView === "walletgen") appView = "bridge"

    this.props.setView(appView)
  }

  render() {
    let buttonText;
    if (this.props.appView === "bridge") buttonText = "Go to Walletgen"
    if (this.props.appView === "walletgen") buttonText = "Go to Bridge"

    let style = {
      position: "absolute",
      top: "10px",
      right: "10px"
    }

    return (
      <button
        type="button"
        style={style}
        onClick={this.navigate}>
        {buttonText}
      </button>
    )
  }
}

export {
  AppNavigation
}
