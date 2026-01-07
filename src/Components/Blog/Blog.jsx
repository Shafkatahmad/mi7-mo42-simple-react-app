import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, handleAddToBookmark}) => {
  const {title, cover,author, author_img, reading_time, posted_data, hashtags} = blog
  return (
    <div className="mb-10">
      <img className="w-full mb-8" src={cover} alt={`Cover Picture of the title ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex gap-6">
          <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
          <div>
            <h4 className="text-2xl">{author}</h4>
            <p>{posted_data}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{reading_time} min read</span>
          <button className="leading-none"
          onClick={handleAddToBookmark}
          ><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a className="mr-4" href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};


export default Blog;