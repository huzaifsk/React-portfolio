import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import React from "react";


function Header() {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-4xl mx-auto">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }} className="flex flex-row items-center">
                <img src="{/src/assets/img.png}" alt="" />
                <h4 className="font-semibold text-xl text-black pt-2 z-20 xl:items-center">Huzaif shaikh</h4>
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center">
                <SocialIcon
                    url="https://www.linkedin.com/in/huzaif-shaikh-6ab8b918b/"
                    fgColor="black"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/huzaifsk"
                    fgColor="black"
                    bgColor="transparent"
                />
                <SocialIcon
                    className="curson-pointer"
                    network="email"
                    fgColor="black"
                    bgColor="transparent"
                />
                <p className="uppercase  hidden md:inline-flex font-bold text-sm text-black">Get in touch</p>
            </motion.div>
        </header>
    );
}

export default Header;

// initial = {{
//     x: -500,
//         opacity: 0,
//             scale: 0.5
// }}
// animate = {{
//     x: 0,
//         opacity: 1,
//             scale: 1
// }}
// transition = {{
//     duration: 1.5,
//                     }}