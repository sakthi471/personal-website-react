import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocilaLinks = () => {


  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('public/SAKTHI RESUME.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SAKTHI RESUME.pdf';
            alink.click();
        })
    })
}

    const SocialLink=[
        {
            id:1,
            child:(
                <>
                Linkedian <FaLinkedin size={25}/>
               </>
            ),
            href:"https:github.com",
            style:"rounded-tr-md"
            
        },
        {
            id:2,
            child:(
                <>
                Github < FaGithub size={25}/>
               </>
            ),
            href:"https://github.com/sakthi471",
            
        }
        ,
        {
            id:3,
            child:(
                <>
               Mail <HiOutlineMail size={25}/>
               </>
            ),
            href:"https:sakthim61797@gmail.com",
            
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={25}/>
               </>
            ),
            href:"public/model resume.pdf",
            style:"rounded-br-md",
            
        }
    ]
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed  ">
      <ul>
        { SocialLink.map(({id,child,href,style})=>(
            (
                <li key={id} className={
                    `bg-gray-500 flex justify-between items-center w-40 h-11  px-4  ml-[-110px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`
                }>
                <a href={href} onClick={onButtonClick} target="_blank"  rel="noreferrer" className="text-white flex w-full justify-between items-center">
                  {child}
                </a>
              </li>
            )
        ))
        }
       
      </ul>
    </div>
  );
};

export default SocilaLinks;
