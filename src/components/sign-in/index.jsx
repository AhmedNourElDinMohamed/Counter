import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

export const Signin = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // Login Function To Change Auth
  const loginAuth = () => {
    dispatch(login());
  };
  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="custom-form">
        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            {...register("Email", { required: true })}
            type="email"
            placeholder="Enter email"
          />
          {errors?.Email && (
            <span className="fw-bold text-danger p-1 ">
              Email is required !
            </span>
          )}
        </Form.Group>
        {/* Password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            {...register("Password", { required: true })}
            type="password"
            placeholder="Password"
          />
          {errors?.Password?.type === "required" && (
            <span className="fw-bold text-danger p-1 ">
              Password is required !
            </span>
          )}
        </Form.Group>
        {/* Check Box */}
        <Form.Group className="mb-3 fw-bold" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          className="btn btn-danger fw-bold"
          variant="primary"
          type="submit"
          onClick={loginAuth}
        >
          Login
        </Button>
      </Form>
    </section>
  );
};
