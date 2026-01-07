const Blog = ({blog}) => {
  const {title, cover,author, author_img, reading_time, posted_data, hashtags} = blog
  return (
    <div>
      <img src={cover} alt={`Cover Picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
          <div>
            <h4 className="text-2xl">{author}</h4>
            <p>{posted_data}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a className="mr-4" href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};


export default Blog;