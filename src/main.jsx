import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// set up router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';

// import component
import SingIn from './form/SignIn';
import HomePage from './components/HomePage.jsx';
import SearchPage from './components/search/SearchPage.jsx';
import ListUser from './listUsers/ListUser.jsx';

// config provider store
import store from './redux/store';
import { Provider } from 'react-redux';
import Animation from './ui/animation/Animation.jsx';
import { Formik } from './forms/Formik.jsx';

// homePage
import HomePageMain from './homePage/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePageMain />,
      },
      {
        path: '/signIn',
        element: <SingIn />,
      },
      {
        path: '/HomePage',
        element: <HomePage />,
      },
      {
        path: '/SearchPage',
        element: <SearchPage />,
      },
      {
        path: '/table',
        element: <ListUser />,
      },
      {
        path: 'Animation',
        element: <Animation />,
      },
      {
        path: 'formik',
        element: <Formik />,
      },
      // Xấy dựng một component hiển thị mot danh sach user với api này: (can chinh css cho hop ly)
      // https://jsonplaceholder.typicode.com/users
      // b2: tao router cho danh sach user tren
      // b3: tao link tro den danh sach user do
      // nang cao: trong danh sach user co the tim kiem dc user
      // khi clikc vao mot user se sang mot trang chi tiet user
      // show modal thong tin user
      // https://getbootstrap.com/docs/4.0/components/modal/
      // fetch api lib: https://www.npmjs.com/package/axios
      // lib component: https://ant.design/components/form
    ],
  },
  {
    path: '/login',
    element: <>login</>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// App component
