import { useRef } from "react";

function ContactInput(props) {
  const InpFoucus = useRef();

  return (
    <div className="bg-[#edf6fd] flex align-middle gap-2 p-2 rounded-2xl w-full">
      {props.typeIn === "TextArea" ? (
        <textarea
          ref={InpFoucus}
          className="h-52 bg-transparent text-xl text-black focus:outline-none focus:border-none w-full"
          onChange={props.onChange}
          value={props.value}
          name={props.name} 
          placeholder={props.placeholder}
        ></textarea>
      ) : (
        <div className="flex items-center gap-2 w-full">
          <img
            onClick={() => {
              InpFoucus.current.focus();
            }}
            src={props.imageSrc}
            className="w-7"
            alt=""
          />
          <input
            ref={InpFoucus}
            className="bg-transparent text-xl text-black focus:outline-none focus:border-none w-full"
            onChange={props.onChange}
            value={props.value}
            type={props.typeIn}
            name={props.name} 
            placeholder={props.placeholder}
          />
        </div>
      )}
    </div>
  );
}

export default ContactInput;
