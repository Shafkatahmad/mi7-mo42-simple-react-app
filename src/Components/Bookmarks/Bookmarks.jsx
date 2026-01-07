import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => { 
  return (
    <div className="w-1/3">
      <div className="bg-[#c7c3dd] px-10 py-5 rounded-xl mb-6 border-[#6047EC] border-2">
        <h3 className="text-[#6047EC] text-2xl">Spent time on read : {readingTime} min</h3>
      </div>
      <div className="h-full bg-[rgba(17,17,17,0.05)] p-8 rounded-lg">
        <h2 className="mb-4">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
      </div>
    </div>
  );
};

export default Bookmarks;