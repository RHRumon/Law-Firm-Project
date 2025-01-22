import bg_contact from "../../assets/bg-contact.png";
import "../../../src/style/Style.css";
import { FiSend } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactService = () => {
    return (
       <div className="max-w-[1320px] mx-auto w-full lg:py-[75px] md:py-[64px] py-[27px] xl:px-5 md:px-7 smaller:px-8 small:px-4 work-sans ">
         <div className="relative min-h-[738px] rounded-[20px]">
           
           <div
             style={{ backgroundImage: `url(${bg_contact})` }}
             className="absolute inset-0 bg-cover bg-center brightness-50 rounded-[20px] z-0"
           ></div>
   
           <div className="relative z-10 grid lg:grid-cols-2 grid-cols-1 text-black md:py-[52px] py-[15px] md:px-10 px-4 lg:gap-2  gap-10">
             {/* div 1 */}
             <div className="rounded-[20px] bg-white md:pt-[60px] md:pb-[81px] pt-[43px] pb-[51px]  lg:min-h-[658px] md:px-10 px-4 order-2">
               {/* name */}
               <label for="name" className="block font-medium text-lg mb-2">
                 Your name
               </label>
               <input
                 type="text"
                 id="name"
                 className="w-full px-4 py-4 md:h-[72px] h-[50px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="Enter your name"
               />
   
               {/* email */}
               <label for="email" className="block font-medium text-lg mb-2 mt-6">
                 Your email
               </label>
               <input
                 type="email"
                 id="email"
                 className="w-full px-4 py-4 md:h-[72px] h-[50px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="Enter your email"
               />
   
               {/* message */}
               <label
                 for="message"
                 className="block font-medium text-lg mb-2 mt-6"
               >
                 Your message
               </label>
               <textarea
                 type="text"
                 id="message"
                 className="w-full px-4 py-2 lg:h-36 md:h-[5.5rem] h-[4rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                 placeholder="Enter your message"
               />
               <button className="bg-[#B68C5A] lg:px-5 px-2 lg:py-3 py-2 rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1  text-white border mt-[50px]">
                 <FiSend />
                 Send Message
               </button>
             </div>
             {/* div 2 */}
             <div className="md:px-10 px-4 eb-garamond text-center text-white big-mid:mt-0 mt-7 order-1">
               <div className="flex justify-center">
                 <button className="bg-[#B68C5A] lg:px-3 px-2  lg:py-3 py-2 rounded-[40px] font-medium whitespace-nowrap lg:w-[127px] lg:text-lg text-base text-white">
                   Contact Us
                 </button>
               </div>
               <div className="mt-[40px] space-y-8">
                 <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium leading-[62px] text-[#D4AF37]">
                   How Can We Assist You?
                 </h1>
                 <p className="font-medium md:leading-[27px] work-sans">
                   We’re here to help with your legal needs. Reach out for expert
                   advice, answers to your questions, or support tailored to your
                   case. Let us assist you every step of the way
                 </p>
               </div>
   
               <div className="flex big-mid:justify-start justify-center">
                 <div className="md:mt-[60px] mt-7 px-7 space-y-9 ">
                   <div className="flex flex-col md:flex-row items-center big-mid:text-start text-center gap-2 font-medium text-xl">
                     <MdMailOutline className="h-6 w-6" />
                     <p>support@appstick.com</p>
                   </div>
                   <div className="flex flex-col md:flex-row items-center md:items-start gap-2 font-medium text-xl">
                     <FiPhone className="h-6 w-6"></FiPhone>
                     <p>+880 1404049797</p>
                   </div>
                   <div className="flex flex-col md:flex-row items-center md:items-start gap-2 font-medium text-xl">
                     <IoLocationOutline className="h-6 w-6"></IoLocationOutline>
                     <p>Sonadanga, Khulna</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
};

export default ContactService;