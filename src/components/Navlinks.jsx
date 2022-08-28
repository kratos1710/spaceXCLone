export default function Navlink(props) {
  return (
    <li
      className={` ${
        props.vis ? " hidden lg:block " : " lg:hidden"
      } border-b-[0.5px] border-[#ffffff67] text-white text-right px-3 py-3 mx-5 my-1`}
    >
      <a href="">{props.name}</a>
    </li>
  );
}
