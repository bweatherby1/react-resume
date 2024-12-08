import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// create the default state for the form on CREATE
const initialState = {
  name: '',
  phone: '',
};

function Form({ obj = initialState, addPerson, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.name) {
      setFormInput({
        name: obj.name,
        phone: obj.phone,
      });
    }
    // rerender the component if the obj value is different
  }, [obj]);

  // On call of the resetForm function, reset the state to the initialState
  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (obj.name) {
      // update the todo
      console.warn('Updates come later');
      resetForm();
    } else {
      addPerson(formInput);
      resetForm();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <label htmlFor="name" className="form-label visually-hidden">
              Name
            </label>
            <input
              className="form-control form-control-lg me-1"
              type="text"
              id="name"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              placeholder="ADD A NAME"
              required
            />
            <label htmlFor="phone" className="form-label visually-hidden">
              Phone
            </label>
            <input
              className="form-control form-control-lg me-1"
              type="text"
              id="phone"
              name="phone"
              value={formInput.phone}
              onChange={handleChange}
              placeholder="ADD A Phone"
              required
            />
            <button className="btn btn-success" type="submit">
              {obj.name ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  addPerson: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

export default Form;
