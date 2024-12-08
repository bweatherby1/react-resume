import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function NameCard({ person, setEditItem }) {
  return (
    <Card className="my-2" body>
      {person.name}: {person.phone}
      <Button variant="info" onClick={() => setEditItem(person)}>Edit</Button>
    </Card>
  );
}

NameCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  setEditItem: PropTypes.func.isRequired,
};

export default NameCard;
