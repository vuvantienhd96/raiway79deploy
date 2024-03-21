import { deleteItemId, api, useFetchApi } from './ultils/callAPI';
import './styles.scss';
import { useState } from 'react';
import { FormUser } from '../listUsers/FormUser';
import { Space, Table, Modal } from 'antd';
import SingIn from '../form/SignIn';

// import state from store
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../feature/count/count';

function ListUser() {
  // call api
  const [user, setUser] = useFetchApi(api);
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [idItem, setIdItem] = useState(null);

  // get state form store
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  // cap nhap function to store
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    // delete item
    deleteItemId(id, api, setUser, setShow);
  };

  const showmodal = (id) => {
    // phu dinh lai de hide and show
    setShowForm(!showForm);
    if (id) {
      setIdItem(id);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <a>{name}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Image',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => (
        <img src={avatar} alt={avatar} width="50" height="50" />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, itemUser) => (
        <Space size="middle">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => showmodal(itemUser.id)}
          >
            edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteUser(itemUser.id)}
          >
            delete
          </button>
        </Space>
      ),
    },
  ];

  const handleOk = () => {};

  return (
    <>
      count: <span style={{ fontWeight: 'bold', color: 'red' }}> {count} </span>
      name: {name}
      <hr />
      <button onClick={() => dispatch(increment())}>+10 unit</button>
      <button onClick={() => dispatch(decrement())}>-10 unit</button>
      ===========
      <hr />
      <button onClick={() => showmodal(null)}>add new</button>
      <Modal title="Basic Modal" open={showForm} onCancel={showmodal}>
        <SingIn id={idItem} close={setShowForm} setUser={setUser} />
      </Modal>
      <Table columns={columns} dataSource={user} />
      <div
        className="alert alert-warning alert-dismissible fade show alert"
        role="alert"
        style={{ display: show ? 'block' : 'none' }}
      >
        <strong>delete success!</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => setShow(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}

export default ListUser;
