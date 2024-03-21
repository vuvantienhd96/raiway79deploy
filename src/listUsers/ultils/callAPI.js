import axios from 'axios';
import { useEffect, useState } from 'react';

// export common reuse function
// link api
export const api = `https://64e5f67f09e64530d17f54dc.mockapi.io/raiway79`;

// function get list
export const fetchApiUser = (api, setDataRes) => {
  const data = axios
    .get(api)
    .then((response) => {
      setDataRes(response.data);
    })
    .catch((e) => console.log(err, 'err'));
  return data;
};

// function delete item
export const deleteItemId = (id, api, setUser, setShow) => {
  const item = axios
    .delete(api + `/${id}`)
    .then((res) => {
      // nếu xoá thành công , call lai danh sach api
      setShow(true);
    })
    .then((res) => {
      fetchApiUser(api, setUser);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    })
    .catch((err) => alert(err, 'da co loi xay ra !'));
  return item;
};

// customhook call api
export const useFetchApi = (linkApi) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    // call api user
    fetchApiUser(linkApi, setUser);
  }, []);
  return [user, setUser];
};
