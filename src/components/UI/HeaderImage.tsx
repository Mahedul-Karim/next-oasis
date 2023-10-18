const HeaderImage = function () {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/assets/img/default-user.jpg"
        alt="user"
        className="w-[40px] h-[40px] rounded-full"
      />
      <span className="text-lg capitalize">Hello</span>
    </div>
  );
};

export default HeaderImage;
