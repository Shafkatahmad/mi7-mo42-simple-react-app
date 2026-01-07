const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className="p-5 rounded-lg bg-white mb-4 rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default Bookmark;