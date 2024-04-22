import React from "react";
import { useState } from "react";
import "../styles/errorboundary.css";

const TestError = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error("Something went wrong!");
  }
  return (
    <>
      <section className="error-boundary-container">
        <div className="error-btn1">
          <button
            onClick={() => setError(true)}
            className="btn-error-boundary1"
          >
            Test ErrorBoundary
          </button>
        </div>
      </section>
    </>
  );
};

export default TestError;
