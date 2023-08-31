import { blogs } from "@/data";
import Image from "next/image";
import Link from "next/link";
const Blogs = ({ category }) => {
  let blogList = blogs;
  if (category !== "all") {
    blogList = blogList.filter((blog) => blog.category === category);
  }
  return (
    <div className="mt-4 mx-auto w-full flex flex-col gap-5  bg-[#E7ECEF] rounded-xl p-2 sm:p-5">
      <div>
        <h1 className="capitalize text-2xl font-extrabold text-[#0f7173] underline decoration-[#F05D5E]">
          {category}
        </h1>
      </div>

      {blogList.map((blog) => {
        const { _id, title, img, content } = blog;
        return (
          <Link key={_id} href={`/${_id}`}>
            <div className="w-full border border-[#D8A47F] p-3 items-center justify-center flex flex-col rounded-xl">
              <div className="relative w-full h-[210px] sm:h-[250px]">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="w-full mt-2">
                <h2 className="text-2xl capitalize font-extrabold text-[#0f7173]">
                  {title}
                </h2>
                <p className="w-full text-lg text-[#272932] whitespace-nowrap overflow-hidden text-ellipsis">
                  {content}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Blogs;
