import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function LoginBTN() {
    return (
        <div className="flex items-center justify-center gap-3">
            <Link to="/login" className="hover:text-slate-400 transition inline-block font-normal">Login</Link>
            <Link to="/signup">
                <button className="loginbtn text-white border rounded-md px-3 py-1 transition duration-200 bg-gray-800 hover:bg-gray-700">
                    Sign Up
                </button>
            </Link>
        </div>
    );
}
