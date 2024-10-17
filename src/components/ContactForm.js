import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-7 w-1/2">
      <h1 className="text-3xl mb-3">Contact us</h1>
      <p className="mb-5">
        궁금한 점이 있으시면 아래로 연락주시기 바랍니다. 담담당자가 확인 후
        순차적으로 연연락드리겠습니다.
      </p>
      <CustomInput
        type="text"
        placeholder="Enter your name"
        name="name"
        labelName="Name"
      />
      <CustomInput
        type="email"
        placeholder="Enter your email"
        name="email"
        labelName="Email Address"
      />
      <div className="flex flex-col">
        <label
          className="uppercase text-sm tracking-wider mb-4 block"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="border px-4 py-3 resize-vertical min-h-40 font-normal focus:outline-dashed"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Hi there, I am reaching out because I think we can collaborate..."
        ></textarea>
      </div>
      <CustomButton title={"Submit"} />
    </form>
  );
};

export default ContactForm;
