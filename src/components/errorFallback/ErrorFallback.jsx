import * as S from './ErrorFallback.styled';
import PropTypes from 'prop-types';

const ErrorFallback = ({ resetErrorBoundary }) => {
	return (
		<S.Contenedor>
			<span>Something went wrong</span>
			<button onClick={resetErrorBoundary}>Try Again</button>
		</S.Contenedor>
	);
};

export default ErrorFallback;

ErrorFallback.propTypes = {
	resetErrorBoundary: PropTypes.bool.isRequired,
};
