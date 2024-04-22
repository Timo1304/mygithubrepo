import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/errorboundary.css";

const refreshPage = () => {
  window.location.reload(false);
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h1 className="error-header">Ewoo! Something went wrong!!!</h1>
          <div className="error-btn">
            <p>Kindly hit the button below to fix this problem</p>
            <Link to="/" className="btn">
              Reset
            </Link>
            <p className="reload-p"> and</p>
            <button className="btn" onClick={refreshPage}>
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
