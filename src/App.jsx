import { useForm } from "react-hook-form";
import "./App.css";
import StateComp from "./components/StateComp";

function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // console.log(errors.name?.type);
  // console.log(errors.name?.message);

  // // console.log(useForm());
  // // console.log({ ...register }); - carielia
  // async function submitHandler(data) {
  //   console.log(data);
  //   console.log(data.name);
  // }
  return (
    <>
      {/* <form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="name">Name</label>
        <input
          className={`${
            errors.name?.message
              ? "border border-solid  border-rose-400"
              : "border border-solid border-sky-500 "
          }`}
          type="text"
          placeholder="name"
          id="name"
          {...register("name", {
            required: "Name field is required",
            minLength: {
              value: 4,
              message: "Min Length is 4",
            },
          })}
        ></input>
        <p>{errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          className={`${
            errors.email?.message
              ? "border border-solid  border-rose-400"
              : "border border-solid border-sky-500 "
          }`}
          type="email"
          placeholder="email"
          id="email"
          {...register("email", { required: "Email field is required" })}
        ></input>
        <p>{errors.email?.message}</p>
        <label htmlFor="password">password</label>
        <input
          className={`${
            errors.password?.message
              ? "border border-solid  border-rose-400"
              : "border border-solid border-sky-500 "
          }`}
          type="password"
          placeholder="password"
          id="password"
          {...register("password", { required: "Password is required" })}
        ></input>
        <p>{errors.password?.message}</p>
        <button type="submit">Submit</button>
      </form> */}
      <div>
        <StateComp></StateComp>
      </div>
    </>
  );
}

export default App;
