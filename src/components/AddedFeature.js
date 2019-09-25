import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const AddedFeature = props => {
  const {removeFeature} = useContext(CarContext);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
