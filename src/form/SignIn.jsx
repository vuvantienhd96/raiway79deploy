import axios from 'axios';
import { useEffect, useRef } from 'react';
import { api } from '../listUsers/ultils/callAPI';
function SingIn({ id, close, setUser }) {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const contentRef = useRef('');

  let classUser = 'form-control';

  useEffect(() => {
    if (id) {
      const data = axios
        .get(api + `/${id}`)
        .then((res) => {
          nameRef.current.value = res.data.name;
          emailRef.current.value = res.data.email;
          contentRef.current.value = res.data.phone;
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const fetcapi = (api) => {
    axios
      .get(api)
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const submitSignIn = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = contentRef.current.value;
    // nameRef.current.focus();
    if (name.length <= 0) {
      nameRef.current.className = 'form-control is-invalid';
    } else {
      nameRef.current.className = 'form-control';
      // edit
      if (id) {
        const data = axios
          .put(api + `/${id}`, {
            name,
            email,
            phone,
          })
          .then((res) => {
            // close modal
            close(false);
            // fetch data new
            fetcapi(api);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // add
        const data = axios
          .post(api, {
            name,
            email,
            phone,
          })
          .then((res) => {
            // close modal
            close(false);
            // fetch data new
            fetcapi(api);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };
  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          User Name
        </label>
        <input
          type="user"
          className={classUser}
          id="exampleFormControlInput1"
          placeholder="username..."
          ref={nameRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={contentRef}
        ></textarea>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => submitSignIn()}
        >
          Submit form
        </button>
      </div>
    </div>
  );
}

export default SingIn;
