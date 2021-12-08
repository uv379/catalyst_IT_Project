import { useForm } from "react-hook-form";

import "./form.css";

const Form = () => {
  // for error
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  }; // your form submit function which will invoke after successful validation



  return (
    <div className="container__form">
      <h1 className="form__h1">
        Fill the Form
      </h1>
      <div className="control">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form__label">Title</label>
          <input className="form__input"
            {...register("title", {
              required: true

            })}
          />
          {errors?.title?.type === "required" && <p className="p_tage">Title field is required</p>}


          <label className="form__label">Description</label>
          <input className="form__input"
            {...register("description", { required: true })} />
          {errors?.description?.type === "required" && <p className="p_tage">Description field is required</p>}

          <label className="form__label">Footer</label>
          <input className="form__input"
            {...register("footer", { required: true })} />
          {errors?.footer?.type === "required" && <p className="p_tage">Footer field is required</p>}
          <input className="button__form" type="submit" />
        </form>
      </div>

    </div>
  );
};

export default Form;
