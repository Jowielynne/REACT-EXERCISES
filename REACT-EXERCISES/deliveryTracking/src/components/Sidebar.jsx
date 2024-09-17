import { IoMdHome } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { TbTrolley } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

import Icons from "./Icons";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="pair">
                <Icons className="icons">
                    <IoMdHome className="icon"/>
                </Icons>
                <Icons className="icons">
                    <IoMail className="icon" />
                </Icons>
                <Icons className="icons">
                    <TbTrolley className="icon" />
                </Icons>
            </div>
            <Icons className="icons">
                <IoMdSettings className="icon" />
            </Icons>
        </nav>
    );
};

export default Navbar;