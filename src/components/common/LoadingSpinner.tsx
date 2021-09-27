import React from 'react';

interface LoadingSpinnerProps {
  // eslint-disable-next-line react/require-default-props
  small?: boolean;
}

const LoadingSpinner = ({ small = false }: LoadingSpinnerProps) => {
  const className = `d-flex justify-content-center ${!small ? 'mt-6' : ''}`;
  return (
    <div className={className}>
      <div
        className="spinner-border"
        style={!small ? { width: '10rem', height: '10rem' } : {}}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
