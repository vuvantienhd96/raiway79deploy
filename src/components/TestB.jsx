// child
function TestB({ age, name, users }) {
  let user = {
    name: 'Mai',
    author: 'Tranthanh',
  };
  return (
    <>
      <p>My name is {name}</p>
      <p>Im {age} year old</p>
      <p>movie: {user.name}</p>
      <p>author: {user['author']}</p>
      {/* cach1 */}
      <ul>
        <li>{users[0]}</li>
        <li>{users[1]}</li>
        <li>{users[2]}</li>
      </ul>

      <ul>
        {
          // hien thi list (map, filter, reduce, ...)
          // check neu phan tu co 3 ky tu thi mau do nguoc lai mau vang
          users.map((el, index, arrUsers) => {
            return (
              <li style={{ color: el.length <= 3 ? 'red' : 'green' }}>{el}</li>
            );
          })
        }
      </ul>

      <ul>
        {
          // hien thi list (map, filter, reduce, ...)
          users.filter((el, index, arrUsers) => {
            if (el.length <= 3) {
              return <li> {el} </li>;
            } else <li>Default</li>;
          })
        }
      </ul>
    </>
  );
}

export default TestB;
