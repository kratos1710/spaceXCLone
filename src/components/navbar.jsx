import { useState } from "react";
import Navlink from "./Navlinks";
// import NavLinks from "./navTree/NavLinks";

const Navbar = () => {
  const [navVisibily, setVisibility] = useState(false);
  return (
    <nav className="lg:p-8 flex relative items-center p-2 bg-black text-white ">
      <div className="lg:basis-1/6 2xl:basis-1/4  m-auto z-50">
        <svg
          className="w-[150px] h-[18px] lg:w-[210px] lg:h-[27px] 2xl:ml-auto"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 400 50"
        >
          <title>SpaceX Logo</title>
          <g className="letter_s">
            <path
              className="fill-white"
              d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
          c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"
            ></path>
          </g>
          <g className="letter_p">
            <path
              className="fill-white"
              d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
          c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"
            ></path>
          </g>
          <g className="letter_a">
            <polygon
              className="fill-white"
              points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"
            ></polygon>
          </g>
          <g className="letter_c">
            <path
              className="fill-white"
              d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
          c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"
            ></path>
          </g>
          <g className="letter_e">
            <polygon
              className="fill-white"
              points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"
            ></polygon>
            <rect
              className="fill-white"
              x="219.9"
              y="18.6"
              width="41.9"
              height="5.4"
            ></rect>
          </g>
          <g className="letter_x">
            <path
              className="fill-white"
              d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"
            ></path>
            <path
              className="fill-white"
              d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"
            ></path>
          </g>
          <g className="letter_swoosh">
            <path
              className="fill-white"
              d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="hidden mx-6 lg:block flex-1">
        <ul className="flex items-center text-sm font-semibold">
          <li className="px-2">FALCON 9</li>
          <li className="px-2">FACLCON HEAVY</li>
          <li className="px-2">STARSHIP</li>
          <li className="px-2">DRAGON</li>
          <li className="px-2">HUMAN SPACEFLIGHT</li>
          <li className="px-2">RIDESHARE</li>
          <li className="px-2">STARLINK</li>
          <li className="px-2 xl:flex-1 xl:text-right">SHOP</li>
        </ul>
      </div>
      {/* <button className="hidden lg:block text-2xl px-6">X</button> */}
      <button
        className="  text-white px-4"
        onClick={() => {
          setVisibility(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30pt"
          height="30pt"
          version="1.1"
          viewBox="0 0 752 752"
        >
          <path
            d="m574.91 376c0 2.5117-1 4.9219-2.7734 6.6992-1.7773 1.7773-4.1875 2.7734-6.6992 2.7734h-378.86c-5.2305 0-9.4727-4.2383-9.4727-9.4727 0-5.2305 4.2422-9.4688 9.4727-9.4688h378.86c2.5117 0 4.9219 0.99609 6.6992 2.7734 1.7734 1.7773 2.7734 4.1836 2.7734 6.6953zm-388.34-85.242h378.86c5.2305 0 9.4727-4.2422 9.4727-9.4727 0-5.2305-4.2422-9.4727-9.4727-9.4727h-378.86c-5.2305 0-9.4727 4.2422-9.4727 9.4727 0 5.2305 4.2422 9.4727 9.4727 9.4727zm378.86 170.49h-378.86c-5.2305 0-9.4727 4.2422-9.4727 9.4727s4.2422 9.4688 9.4727 9.4688h378.86c5.2305 0 9.4727-4.2383 9.4727-9.4688s-4.2422-9.4727-9.4727-9.4727z"
            fill="#fff"
          />
        </svg>
      </button>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <div
        className={`xl:hidden fixed h-full top-0 left-0 w-full z-20 bg-[#0006] ${
          navVisibily ? " opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <ul
        className={` w-1/2 lg:w-1/4 z-30 bg-black min-h-screen h-fit absolute top-0 left-full transition-all${
          navVisibily ? " -translate-x-full" : " translate-x-full"
        } `}
      >
        <li className="text-right">
          <button
            className="p-3 lg:py-10 lg:px-12 px-10 "
            onClick={() => {
              setVisibility(false);
            }}
          >
            X
          </button>
        </li>
        <Navlink vis={false} name="Falcon 10" />
        <Navlink vis={false} name="Falcon Heavy" />
        <Navlink vis={false} name="Dragon" />
        <Navlink vis={false} name="Starship" />
        <Navlink vis={false} name="Human Spaceflight" />
        <Navlink vis={false} name="Rideshare" />
        <Navlink vis={false} name="Starlink" />
        <Navlink vis={false} name="Mission" />
        <Navlink vis={true} name="Mission" />
        <Navlink vis={true} name="Launches" />
        <Navlink vis={true} name="Careers" />
        <Navlink vis={true} name="Updates" />
        <Navlink vis={true} name="Shop" />
      </ul>

      {/* ///////////////////////////////////////////////////////////////////////////// */}
    </nav>
  );
};
export default Navbar;

///////////////////////////////////

{
  /* <div
        className={` ${
          navVisibily
            ? "fixed left-0 z-20"
            : " pointer-events-none w-0 h-0 -z-30"
        }  bg-[#000000a4] w-full h-screen overflow-hidden`}
      >
        <div
          className={`w-1/3 h-fit relative top-0 left-full ${
            navVisibily ? "-translate-x-full opacity-100" : "opacity-100"
          } transition-all  bg-black pb-3 text-white`}
        >
          <Navlink name="Falcon 10" />
          <Navlink name="Falcon Heavy" />
          <Navlink name="Dragon" />
          <Navlink name="Starship" />
          <Navlink name="Human Spaceflight" />
          <Navlink name="Rideshare" />
          <Navlink name="Starlink" />
          <Navlink name="Mission" />
          <Navlink name="Launches" />
          <Navlink name="Launches" />
          <Navlink name="Launches" />
          <Navlink name="Launches" />
        </div>
      </div> */
}
