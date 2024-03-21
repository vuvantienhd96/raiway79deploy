import { useEffect, useState } from 'react';

function User() {
  // user state
  const [user, setUser] = useState({});
  const [searchValue, setSearchValue] = useState('1');
  const searchUser = (value) => {
    setSearchValue(value.target.value);
  };

  // setup hay callback function dựa vào dependency (phụ thuộc) thay đổi thì nó sẽ
  // call back và gọi lại function bên trong useEffect
  useEffect(() => {
    // call api user
    const api = `https://jsonplaceholder.typicode.com/users/`;
    const data = fetch(api + searchValue)
      .then((res) => res.json()) // conver json
      .then((res) => {
        // setUser here
        setUser(res);
      }) // result here
      .catch((err) => console.log(err, 'err')); // fetch err
  }, [searchValue]);

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => searchUser(event)}
        />
      </div>
      <div className="card" style={{ width: '300px' }}>
        <img
          src="https://picsum.photos/id/237/200/300"
          className="card-img-top"
          width="100%"
          height="180px"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.phone}</p>
          {user.website}
        </div>
      </div>
    </>
  );
}

export default User;
