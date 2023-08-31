import Link from "next/link";
import Categories from "./Categories";

const Navbar = ({ category, setCategory }) => {
  return (
    <nav
      className="h-[50px] bg-[#e7ecef] flex justify-between
     items-center mt-3 border-l-2 border-r-2 border-[#f05d5e] px-2 z-20"
    >
      <div>
        <Link href={"/"}>
          <h1 className="font-extrabold text-xl text-[#0f7173]">
            Health <span className="text-[#f05d5e]">&</span> Strength
          </h1>
        </Link>
      </div>
      <div className="relative h-full">
        <Categories category={category} setCategory={setCategory} />
      </div>
    </nav>
  );
};
export default Navbar;
