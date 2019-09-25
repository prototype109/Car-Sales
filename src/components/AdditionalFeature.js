import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const AdditionalFeature = props => {

  const {buyItem} = useContext(CarContext);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
