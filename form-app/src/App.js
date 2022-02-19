import { Component } from "react";

import "./App.css";

import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const functionName = (data) => {
    reset();
    console.log(data);
  };

  const onError = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h2>Hooks Form</h2>
      <form className="form" onSubmit={handleSubmit(functionName, onError)}>
        <div>
          <label style={{ width: "100px", marginRight: "25px" }}>
            Username :{" "}
          </label>

          <input
            style={{ width: "250px", height: "20px", marginLeft: "10px" }}
            type="text"
            name="Username"
            placeholder="Username"
            {...register("Username", { required: "Username is required" })}
          />
          <br />
          {errors.Username && (
            <small style={{ color: "red", marginLeft: "130px" }}>
              {errors.Username.message}
            </small>
          )}
        </div>
        <br />
        <div>
          <label style={{ width: "100px", marginRight: "25px" }}>
            Email :{" "}
          </label>

          <input
            style={{ width: "250px", height: "20px", marginLeft: "35px" }}
            type="text"
            name="email"
            placeholder="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          />
          <br />
          {errors.email && (
            <small style={{ color: "red", marginLeft: "130px" }}>
              {errors.email.message}
            </small>
          )}
        </div>

        <br />
        <div>
          <label style={{ width: "100px", marginRight: "15px" }}>
            Password :{" "}
          </label>
          <input
            style={{ width: "250px", height: "20px", marginLeft: "10px" }}
            type="text"
            name="password"
            placeholder="********"
            {...register("password", { required: "password is required" })}
            onKeyUp={() => {
              trigger("password");
            }}
          />
          <br />

          {errors.password && (
            <small style={{ color: "red", marginLeft: "110px" }}>
              {errors.password.message}
            </small>
          )}
        </div>
        <br />
        <div>
          <label style={{ width: "100px", marginRight: "25px" }}>Age : </label>

          <input
            style={{ width: "250px", height: "20px", marginLeft: "30px" }}
            type="text"
            name="Age"
            placeholder="Age"
            {...register("Age", {
              required: "Age is required",
              min: {
                value: 13,
                message: "minimum age should be greater than 13",
              },
              max: {
                value: 80,
                message: "maximum age should be 80",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "only numbers are allowed",
              },
            })}
            onKeyUp={() => {
              trigger("Age");
            }}
          />
          <br />
          {errors.Age && (
            <small style={{ color: "red", marginLeft: "110px" }}>
              {errors.Age.message}
            </small>
          )}
        </div>
        <br />
        <div>
          <label style={{ width: "100px" }}>Phone num : </label>

          <input
            style={{ width: "250px", height: "20px", marginLeft: "10px" }}
            type="text"
            name="phoneNum"
            placeholder="Phone Num"
            {...register("phoneNum", {
              required: "phoneNum is required",
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "invalid phone number",
              },
            })}
            onKeyUp={() => {
              trigger("phoneNum");
            }}
          />
          <br />
          {errors.phoneNum && (
            <small style={{ color: "red", marginLeft: "110px" }}>
              {errors.phoneNum.message}
            </small>
          )}
        </div>
        <br />
        
        
        <div>
          <label style={{ width: "100px" }}>Message : </label>

          <textarea
            style={{ marginLeft: "30px", width: "300px" }}
            name="message"
            placeholder="Message"
            {...register("Message", {
              required: "Message should be mininum of 10 character",
              minLength: {
                value: 10,
                message: "Minimum Required length is 10",
              },
              maxLength: {
                value: 50,
                message: "Maximum allowed length is 50 ",
              },
            })}
            onKeyUp={() => {
              trigger("Message");
            }}
          ></textarea>
          <br />
          {errors.Message && (
            <small style={{ color: "red", marginLeft: "130px" }}>
              {errors.Message.message}
            </small>
          )}
        </div>
        <br />
        <input
          style={{ width: "250px", height: "20px", marginLeft: "10px" }}
          type="submit"
        />
      </form>
    </div>
  );
}
export default App;
