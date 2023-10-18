import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const Pagination=function(){
    return <div className="bg-grey-100 px-[2.4rem] text-[15px] font-normal flex items-center w-[938px] justify-between py-[1.2rem]">
    <div>
      Showing <span className="font-[700]">1</span> to{" "}
      <span className="font-[700]">10</span> of{" "}
      <span className="font-[700]">24</span> results
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center font-[500] cursor-pointer py-[5px] px-[8px] hover:bg-primary-600 hover:text-primary-50 rounded-md justify-center">
        <span>
          <BiChevronLeft size={25} />
        </span>
        Previous
      </div>
      <div className="flex items-center font-[500] cursor-pointer py-[5px] px-[8px] hover:bg-primary-600 hover:text-primary-50 rounded-md justify-center">
        Next
        <span>
          <BiChevronRight size={25} />
        </span>
      </div>
    </div>
  </div>
}
export default Pagination;