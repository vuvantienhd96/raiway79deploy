import { Outlet, Link } from 'react-router-dom';
import { SunOutlined, MoonFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import './root.scss';
import { updateThem } from '../feature/changeTheme/theme';

function Root() {
  const isTheme = useSelector((state) => state.theme.isTheme);
  const dispatch = useDispatch();

  return (
    <>
      <div id="sidebar" className={isTheme ? 'light' : 'dart'}>
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <button onClick={() => dispatch(updateThem())}>
            {isTheme ? <SunOutlined /> : <MoonFilled />}
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contact`}>contact</Link>
            </li>
            <li>
              <Link to={`/signIn`}>signIn</Link>
            </li>
            <li>
              <Link to={`/HomePage`}>HomePage</Link>
            </li>
            <li>
              <Link to={`/SearchPage`}>SearchPage</Link>
            </li>
            <li>
              <Link to={`/table`}>table</Link>
            </li>
            <li>
              <a href={`/contacts/2`}>how are u</a>
            </li>
            <li>
              <Link to={`/Animation`}>Animation</Link>
            </li>
            <li>
              <Link to={`/formik`}>formik</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" className={isTheme ? 'light' : 'dart'}>
        {/* render children */}
        <Outlet />
      </div>
    </>
  );
}

export default Root;
