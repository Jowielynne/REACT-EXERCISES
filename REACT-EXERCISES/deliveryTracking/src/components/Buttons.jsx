import { MdHome } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { TbTrolley } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

const Buttons = () => {
    return (
        <>
            <div className="button__container">
                <MdHome size={40}/>
                <IoMdMail />
                <TbTrolley />
                <IoMdSettings />
            </div>
        </>
    );
}

export default Buttons;