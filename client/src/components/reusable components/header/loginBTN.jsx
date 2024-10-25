export default function LoginBTN() {
    return (
        <div className="flex items-center justify-center gap-3">
            <a href="#" className="hover:text-slate-400 transition inline-block font-normal">Login</a>
            <button className="loginbtn text-white border rounded-md px-3 py-1 transition duration-200 bg-gray-800 hover:bg-gray-700">
            Sign Up
            </button>
        </div>
    );
}
