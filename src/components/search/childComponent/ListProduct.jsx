import './styleSearch.scss';
function ListProduct({ list }) {
  return (
    <article className="listProduct">
      <ul>
        {list.map((el, index) => {
          return (
            <li key={el.zipcode} className="item-list">
              <span>{el.street}</span>
              <span>{el.suite}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default ListProduct;
