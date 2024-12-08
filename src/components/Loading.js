import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types'; // import proptypes package

// THE PROP IS "COLOR"
// PROPS IS AN OBJECT
// WE DESTRUCTURE IT SO WE CAN CALL IT BY NAME
export default function Loading({ color, children }) {
  return (
    <div className="text-center mt-5">
      <Spinner
        animation="border"
        style={{
          color,
          width: '100px',
          height: '100px',
        }}
      />
      {/* if the children prop is not passed, children will not render */}
      {children}
    </div>
  );
}

// Proptypes tell the function what data type to expect
Loading.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Loading.defaultProps = {
  color: 'red',
  children: 'nothing here',
};
