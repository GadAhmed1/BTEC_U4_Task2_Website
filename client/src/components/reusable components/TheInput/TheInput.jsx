import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TheInput(props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div>
            {props.type !== 'password' ? (
                <div className="TheInputBody mt-7 mb-2">
                    <p className="my-2 text-md">{props.headText}</p>
                    <div className="rounded-md bg-[#1B1B1B]">
                        <input
                            onChange={props.onChange}
                            type={props.type}
                            className="TheFoucsInput bg-transparent w-full p-2 rounded-md outline-none"
                            placeholder={props.placeholder}
                        />
                    </div>
                </div>
            ) : (
                <div className="TheInputBody mt-7 mb-2">
                    <p className="my-2 text-md">{props.TitleOfPass}</p>
                    <div className="relative flex align-middle TheBorderOfInptu rounded-md bg-[#1B1B1B]">
                        <input
                            onChange={props.onChange}
                            type={isPasswordVisible ? 'text' : 'password'}
                            className="TheFoucsInput bg-transparent w-full p-2 rounded-md outline-none"
                            placeholder="Enter your password"
                        />
                        <i
                            className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} text-gray-500 absolute right-2 TheTop cursor-pointer`}
                            onClick={togglePasswordVisibility}
                        ></i>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheInput;
