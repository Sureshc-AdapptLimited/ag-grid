import React from 'react';

export default (props) => {
  const cellValue = props.value;
  const dynamicAttributes = {
        'data-row-id': props.data.id,
        'data-column-name': props.colDef.field,
        // Add more dynamic attributes as needed
  };
  
  return (
      <span dynamicAttributes>{cellValue}</span>
  );
};
