"use client";

import PropTypes from 'prop-types';

// you may only have one dynamic file per directory

export default function DynamicRoute({ params }) {

  return <div>ID = {params.dynamicKey}</div>;
}

DynamicRoute.propTypes = {
  params: PropTypes.string.isRequired,
}
