import PropTypes from "prop-types";

export const App = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="test-title" className="text-center m-5">
        {title}
      </h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

// App.defaultProps = {
//   title: "Hello world!",
// };
