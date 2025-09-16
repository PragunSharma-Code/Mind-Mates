import { Link } from "react-router-dom";

function Button1({ label, linkTo }) {
    return (
        <Link to={linkTo}>
            <div className=" text-white px-4 py-2 border border-white rounded-lg cursor-pointer hover:bg-white hover:text-[#1b3ba3] transition duration-300">
                {label}
            </div>
        </Link>
    );
};

export default Button1;