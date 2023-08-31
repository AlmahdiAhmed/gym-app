import Blogs from "./Blogs";
import Featured from "./Featured";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <div>
      <Navbar />
      <Featured />
      <Blogs />
    </div>
  );
};
export default Container;
