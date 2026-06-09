import './LoadingSpinner.css';

function LoadingSpinner({ message = 'Carregando...' }) {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  );
}

export default LoadingSpinner;
