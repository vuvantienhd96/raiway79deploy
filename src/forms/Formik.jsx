import { useFormik } from 'formik';
import { validate } from './validate';
import { Alert } from 'antd';

export const Formik = () => {
  const isFormik = useFormik({
    initialValues: {
      email: '',
      lastName: '',
      firstName: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={isFormik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={isFormik.handleChange}
        value={isFormik.values.email}
      />
      {isFormik.errors.email ? (
        <Alert message={isFormik.errors.email} type="error" />
      ) : null}
      <hr />
      <label htmlFor="firstName">firstName</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={isFormik.handleChange}
        onBlur={isFormik.handleBlur}
        value={isFormik.values.firstName}
      />
      {isFormik.touched.firstName && isFormik.errors.firstName ? (
        <Alert message={isFormik.errors.firstName} type="error" />
      ) : null}
      <hr />
      <label htmlFor="lastName">lastName</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={isFormik.handleChange}
        value={isFormik.values.lastName}
      />
      {isFormik.errors.lastName ? (
        <Alert message={isFormik.errors.lastName} type="error" />
      ) : null}
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
};
