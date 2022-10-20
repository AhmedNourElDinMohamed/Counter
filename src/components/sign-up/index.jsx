import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { FormGroup } from "react-bootstrap";
export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();
  // Arrary For Selection Items
  const selectGender = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="custom-form">
        {/* User Name */}
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label className="fw-bold">User Name</Form.Label>
          <Form.Control
            className="mb-2"
            {...register("UserName", { required: true })}
            type="text"
            placeholder="Enter User Name"
          />
          {errors?.UserName && (
            <span className="fw-bold text-danger p-1 ">
              User Name is required !
            </span>
          )}
        </Form.Group>
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
            {...register("Password", { required: true, minLength: 6 })}
            type="password"
            placeholder="Password"
          />
          {errors?.Password?.type === "required" && (
            <span className="fw-bold text-danger p-1 ">
              Password is required !
            </span>
          )}
          {errors?.Password?.type === "minLength" && (
            <span className="fw-bold text-danger p-1 ">
              MinLength 6 Letters !
            </span>
          )}
        </Form.Group>
        {/* Confirm Password */}
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="fw-bold">Confirm Password</Form.Label>
          <Form.Control
            {...register("ConfirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("Password") !== val) {
                  return "ks";
                }
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors?.ConfirmPassword?.type === "validate" ? (
            <span className="fw-bold text-danger p-1 ">
              Password Don't Match
            </span>
          ) : (
            ""
          )}
        </Form.Group>
        {/* Select Gender */}
        <FormGroup>
          <Form.Label className="fw-bold">Select Gender</Form.Label>
          <Controller
            name="Gender"
            control={control}
            render={({ field }) => (
              <Select
                {...register("Gender")}
                {...field}
                options={selectGender}
              />
            )}
          />
        </FormGroup>
        {/* Check Box */}
        <Form.Group className="mb-3 fw-bold" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          className="btn btn-danger fw-bold"
          variant="primary"
          type="submit"
        >
          Sign up
        </Button>
      </Form>
    </section>
  );
};
