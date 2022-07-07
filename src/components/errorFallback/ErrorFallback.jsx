import * as S from './ErrorFallback.styled'


const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <S.Contenedor>
      <span>Something went wrong</span>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </S.Contenedor>
  );
};

export default ErrorFallback;
