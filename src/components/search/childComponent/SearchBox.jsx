import { useState } from 'react';
import './styleSearch.scss';

function SearchBox({ onSearch }) {
  const [user, setUser] = useState('');

  const findUser = (event) => {
    setUser(event.target.value);
    // excute call back function
    onSearch(event.target.value);
  };

  return (
    <div className="searchBox">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          value={user}
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => findUser(event)}
        />
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        Only show products in stock
      </div>
    </div>
  );
}

export default SearchBox;
