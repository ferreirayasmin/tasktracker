import './ErrorAlert.css';

function ErrorAlert({ message, onRetry }) {
  return (
    <div className="error-alert" role="alert">
      <p>{message}</p>
      {onRetry && (
        <button type="button" className="retry-btn" onClick={onRetry}>
          Tentar novamente
        </button>
      )}
    </div>
  );
}

export default ErrorAlert;
