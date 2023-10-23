"use client";
import { DATA_PER_PAGE } from "@/util/base";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type Props = {
  data: Cabins[] | Bookings[];
};

const Pagination: React.FC<Props> = function ({ data }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;

  const totalPage = Math.ceil(data.length / DATA_PER_PAGE);

  const nextPage = () => {
    const next = currentPage === totalPage ? currentPage : currentPage + 1;

    const params = new URLSearchParams(searchParams);
    params.set("page", next.toString());
    router.push(`${pathName}?${params.toString()}`);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    const params = new URLSearchParams(searchParams);
    params.set("page", prev.toString());
    router.push(`${pathName}?${params.toString()}`);
  };
  
  if(totalPage <= 1){
    return null;
  }

  return (
    <div className="bg-grey-100 px-[2.4rem] text-[15px] font-normal flex items-center w-[938px] justify-between py-[1.2rem]">
      <div>
        Showing <span className="font-[700]">{(currentPage - 1) * DATA_PER_PAGE + 1}</span> to{" "}
        <span className="font-[700]">
          {currentPage === totalPage
            ? data.length
            : currentPage * DATA_PER_PAGE}
        </span>{" "}
        of <span className="font-[700]">{data.length}</span> results
      </div>
      <div className="flex items-center gap-4">
        <div
          className="flex items-center font-[500] cursor-pointer py-[5px] px-[8px] hover:bg-primary-600 hover:text-primary-50 rounded-md justify-center"
          onClick={prevPage}
        >
          <span>
            <BiChevronLeft size={25} />
          </span>
          Previous
        </div>
        <div
          className="flex items-center font-[500] cursor-pointer py-[5px] px-[8px] hover:bg-primary-600 hover:text-primary-50 rounded-md justify-center"
          onClick={nextPage}
        >
          Next
          <span>
            <BiChevronRight size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
