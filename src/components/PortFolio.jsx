// import React from "react";
// import java from "/images/new.png";
// import python from "/images/second.png";
// import mongoDB from "/images/new1.png";
// import express from "/images/new2.png";
// import reactjs from "/images/seven.png";
// import nodejs from "/images/sixth.png";
// function PortFolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: express,
//       name: "PizzaMax",
//       desc: "Built a full-featured Pizza Order app using JavaScript and Redux. With add-to-cart functionality and product filtering etc.",
//     },
//     {
//       id: 2,
//       logo: mongoDB,
//       name: "MyShop",
//       desc: "Buid a Basic level E-commerce Website using React Js and Tailwind CSS. Fully responsive on mutilple devices",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "Alzheimer's Detection",
//       desc: "Developed an Alzheimer's detection website featuring user authentication and MRI analysis via a deployed ML model on Django Rest API",
//     },
//     {
//       id: 4,
//       logo: nodejs,
//       name: "SocialX",
//       desc: "Develop a Social Media interface using ReactJs and Bootstrap with Light Mode and Dark Mode functionality etc ",
//     },
//     {
//       id: 5,
//       logo: python,
//       name: "React_Recipy",
//       desc: "Created a React-based recipe site featuring international dishes with detailed recipes, leveraging the DB Meal Free API.",
//     },
//     {
//       id: 6,
//       logo: java,
//       name: "Phone Mart",
//       desc: "Built a smartphone-selling webstore in React, with a Flipkart-like interface and Firebase for real-time inventory and secure customer data management.",
//     },
//   ];
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
//         <span className=" underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5 justify-cente">
//           {cardItem.map(({ id, logo, name, desc }) => (
//             <div
//               className="md:w-[300px] h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-full h-[120px] p-1 rounded-md border-[2px]"
//                 alt=""
//               />
//               <div>
//                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                 <p className="px-2 text-gray-700">{desc}</p>
//               </div>
//               <div className="flex px-6 py-3 space-x-3 justify-around">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 rounded">
//                   Live
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Source code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;
import React from "react";
import java from "/images/new.png";
import python from "/images/second.png";
import mongoDB from "/images/new1.png";
import express from "/images/new2.png";
import reactjs from "/images/seven.png";
import nodejs from "/images/sixth.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: express,
      name: "PizzaMax",
      desc: "Built a full-featured Pizza Order app using JavaScript and Redux. With add-to-cart functionality and product filtering etc.",
    },
    {
      id: 2,
      logo: mongoDB,
      name: "MyShop",
      desc: "Buid a Basic level E-commerce Website using React Js and Tailwind CSS. Fully responsive on mutilple devices",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Alzheimer's Detection",
      desc: "Developed an Alzheimer's detection website featuring user authentication and MRI analysis via a deployed ML model on Django Rest API",
    },
    {
      id: 4,
      logo: nodejs,
      name: "SocialX",
      desc: "Develop a Social Media interface using ReactJs and Bootstrap with Light Mode and Dark Mode functionality etc ",
    },
    {
      id: 5,
      logo: python,
      name: "React_Recipy",
      desc: "Created a React-based recipe site featuring international dishes with detailed recipes, leveraging the DB Meal Free API.",
    },
    {
      id: 6,
      logo: java,
      name: "Phone Mart",
      desc: "Built a smartphone-selling webstore in React, with a Flipkart-like interface and Firebase for real-time inventory and secure customer data management.",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 my-5 justify-cente">
          <div className="md:w-[300px] h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="/images/new2.png"
              className="w-full h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">PizzaMax</div>
              <p className="px-2 text-gray-700">
                "Built a full-featured Pizza Order app using JavaScript and
                Redux. With add-to-cart functionality and product filtering
                etc."
              </p>
            </div>
            <div className="flex px-6 py-3 space-x-3 lg:justify-around">
              <button
                onClick={() => window.open("https://my-pizza-sooty.vercel.app/")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 rounded"
              >
                Live
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/waqar606/MyPizza")
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source code
              </button>
            </div>
          </div>
          <div className="md:w-[300px] h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="/images/new1.png"
              className="w-full h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">MyShop</div>
              <p className="px-2 text-gray-700">
                "Buid a Basic level E-commerce Website using React Js and
                Tailwind CSS. Fully responsive on mutilple devices."
              </p>
            </div>
            <div className="flex px-6 py-3 space-x-3 lg:justify-around">
              <button
                onClick={() =>
                  window.open("https://shopify-dun-mu.vercel.app/")
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 rounded"
              >
                Live
              </button>

              <button
                onClick={() =>
                  window.open("https://github.com/waqar606/MyShop")
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source code
              </button>
            </div>
          </div>
          <div className="md:w-[300px] h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="/images/sixth.png"
              className="w-full h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">SocialX</div>
              <p className="px-2 text-gray-700">
                "Develop a Social Media interface using ReactJs and Bootstrap
                with Light Mode and Dark Mode functionality etc. Also fixed
                sidebars responsive interface"
              </p>
            </div>
            <div className="flex px-6 py-3 space-x-3 lg:justify-around">
              <button
                onClick={() =>
                  window.open("https://github.com/waqar606/SocialX")
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source code
              </button>
            </div>
          </div>
          <div className="md:w-[300px] h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="/images/seven.png"
              className="w-full h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">
                Alzheimer's Detection
              </div>
              <p className="px-2 text-gray-700">
                "Developed an Alzheimer's detection website featuring user
                authentication and MRI analysis via a deployed ML model on
                Django Rest API."
              </p>
            </div>
            <div className="flex px-6 py-3 space-x-3 lg:justify-around">
              <button
                onClick={() =>
                  window.open("https://github.com/waqar606/FYP_Web")
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source code
              </button>
            </div>
          </div>
          <div className="md:w-[300px] h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="/images/second.png"
              className="w-full h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">React_Recipy</div>
              <p className="px-2 text-gray-700">
                "Created a React-based recipe site featuring international
                dishes with detailed recipes, leveraging the DB Meal Free API."
              </p>
            </div>
            <div className="flex px-6 py-3 space-x-3 lg:justify-around">
               <button
                onClick={() => window.open("https://react-recipy.vercel.app/")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 rounded"
              >
                Live
              </button>
              
              <button
                onClick={() =>
                  window.open("https://github.com/waqar606/React-Recipy")
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source code
              </button>
            </div>
          </div>
          <div className="md:w-[300px] h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="/images/new.png"
              className="w-full h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">Phone Mart</div>
              <p className="px-2 text-gray-700">
                "Built a smartphone-selling webstore in React, with a
                Flipkart-like interface and Firebase for real-time inventory and
                secure customer data management."
              </p>
            </div>
            <div className="flex px-6 py-3 space-x-3 lg:justify-around">
              <button
                onClick={() => window.open("https://phone-mart.vercel.app/")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 rounded"
              >
                Live
              </button>

              <button
                onClick={() =>
                  window.open("https://github.com/waqar606/PhoneMart")
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
