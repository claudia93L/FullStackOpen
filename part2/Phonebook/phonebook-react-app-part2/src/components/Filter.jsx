import React from 'react';

const Filter = ({searchName, setSearchName}) => {
  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      filter shown with
      <input type='text' value={searchName} onChange={handleSearchName} />
      <br />
    </div>
  );
};

export default Filter;
