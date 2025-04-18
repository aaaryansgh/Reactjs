import { useState } from "react";
const Slotbookingdetail = (props) =>{
    const {slotData}=props;
    console.log(slotData);
    const [dropdownDates,setDropdownDates]=useState(false);
    const handleDate=()=>{
        setDropdownDates(!dropdownDates);
    }
     return (
     <div className="flex justify-center flex-col gap-4 my-10">
      <h2 className="text-2xl font-bold ml-8">Select your booking detail</h2>
      <div className="flex flex-wrap mx-8">
        <div className=" relative border border-gray-300 rounded-lg p-3 m-4 w-1/4 flex justify-between items-center cursor-pointer">
          <span>Today</span>
          <span onClick={handleDate} className="cursor-pointer">🔽</span>
          {dropdownDates && (
              <ul className="flex flex-col">
                <li className="absolute text-black p-1.5 mt-2 rounded-lg">{slotData?.drop_down_dates.map((dates)=>dates.label)}</li>
             </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Slotbookingdetail;


