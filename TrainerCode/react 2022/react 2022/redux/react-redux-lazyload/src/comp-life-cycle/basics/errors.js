import React, { Component } from 'react';

export class ErrorButton extends Component {
  state = { showError: false };

  handleClick = () => {
    this.setState({ showError: true });
  };

  render() {
    if (this.state.showError) {
      throw new Error('Something went wrong.');
    }

    return <button onClick={this.handleClick}>Trigger Error</button>;
  }
}

export class ErrorBoundary extends Component {
  state = { errorMessage: null };

  // To get errors at runtime with error message
  // it expects componentDidCatch to handle error
  static getDerivedStateFromError(error) {
    return { errorMessage: error.message };
  }

  // handle error here 
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.errorMessage) {
      return <h1>Oops! Murthy {this.state.errorMessage}</h1>;
    }

    return this.props.children;
  }
}
