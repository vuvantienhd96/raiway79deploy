import ListProduct from '../childComponent/ListProduct';
import TitleHeader from '../childComponent/TitleHeader';
import './styleSearch.scss';

function ListResultSearch({ data }) {
  return (
    <section className="ListResult">
      {data.map((el) => {
        return (
          <div key={el.id}>
            <TitleHeader title={el.name} />
            <ListProduct list={el.address} />
          </div>
        );
      })}
    </section>
  );
}

export default ListResultSearch;
