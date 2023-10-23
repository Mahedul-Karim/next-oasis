'use client';

import { useCtx } from "@/context/ContextProvider";

const HeaderImage = function () {
  const { user }:{user:any} = useCtx();
  return (
    <div className="flex items-center gap-2">
      <img
        src={user?.avatar ? user?.avatar : `/assets/img/default-user.jpg`}
        alt="user"
        className="w-[40px] h-[40px] rounded-full"
      />
      <span className="text-lg capitalize">{user?.name}</span>
    </div>
  );
};

export default HeaderImage;
