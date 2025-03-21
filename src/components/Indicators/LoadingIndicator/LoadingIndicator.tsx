import './LoadingIndicator.scss';
const LoadingIndicator = () => {
  return (
    <div className="loading">
        <svg className="loading__spinner" viewBox="0 0 50 50">
          <circle
            className="loading__path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="5"
          ></circle>
        </svg>
        <p>Загрузка...</p>
    </div>
  );
};

export default LoadingIndicator;
