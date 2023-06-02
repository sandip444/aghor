import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    
    return (
        <div className="flex justify-center items-center relative">
            {isVisible && (
                <div className="top-btn text-xl w-[50px] h-[50px] text-white bg-gradient-to-r from-[#80652e] to-[#f6d98d] rounded-full fixed sm:bottom-6 sm:right-6 bottom-4 right-4 z-50 flex justify-center items-center text-center cursor-pointer" onClick={goToBtn}>
                    <BsArrowUp className="top-btn--icon" />
                </div>
            )}
        </div>
    );
};



export default GoToTop;