import Navbar from "@/components/Navbar";
import { blogs } from "@/data";
import Image from "next/image";
const page = ({ params }) => {
  const id = params.id;
  const newBlog = blogs.find((blog) => blog._id === id);
  return (
    <div>
      <Navbar />
      <div className="mt-3 bg-[#e7eced] rounded-xl p-5">
        <div className="relative w-full h-[250px] sm:h-[270px] border border-[#D8A47F] rounded-xl">
          <Image
            src={newBlog.img}
            alt={newBlog.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="py-3">
          <h1 className="text-2xl capitalize font-extrabold text-[#0f7173]">
            {newBlog.title}
          </h1>
          <p className="w-full text-lg text-[#272932]">{newBlog.content}</p>
        </div>
      </div>
    </div>
  );
};
export default page;
