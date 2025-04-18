import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Slotbookingdetail from "./Slotbookingdetail";
import Slottiming from "./Slottiming";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CardSlice";
const SlotMenu=()=>{
    const [slotInfo,setSlotInfo]=useState(null);
    const [selectedSlot,setSelectedSlot]=useState(null);
    const {resname,id}=useParams();
    useEffect(()=>{
        fetchSlotData();
    },[])
    const fetchSlotData=async ()=>{
        const data=await fetch(`https://api.zomato.com/dining-gw/consumer/web/tr/slots?res_id=${id}`)
        const json=await data.json();
        setSlotInfo(json.slots_response)
    }
    const handleslot=(slotid)=>{
        setSelectedSlot(slotid);
    }
    const dispatch=useDispatch();
    const handleAdditem=(slotinfo)=>{
        dispatch(addItems(slotinfo))
    }

    
    return(
        <div>
            <h1 className="text-3xl font-bold mt-10 ml-30 p-2">{resname}</h1>
            <div className="border-b-2 flex justify-start border-b-gray-300 p-3 mx-30 w-10/12 "></div>
            <Slotbookingdetail slotData={slotInfo} />
            <h2 className="text-2xl font-bold ml-8">Slots</h2>
            <div className="flex items-center flex-wrap gap-2 my-10 mx-10">
            {slotInfo?.slots.map((slot)=>(
                <div key={slot.slot_id} className={`border-1 flex flex-wrap items-center ${selectedSlot===slot.slot_id?"border-amber-600":"border-gray-400"} shadow-lg rounded-lg p-2 m-4 w-1/7 cursor-pointer`}
                   onClick={()=>handleslot(slot.slot_id)}>
                    <Slottiming timeData={slot} />
                </div>
            ))}
            </div>
            <button className="border-2 border-gray-300 mx-15 mb-10 p-2 rounded-lg" onClick={()=>handleAdditem(slotInfo)}>Add to cart</button>
        </div>
    )
}
export default SlotMenu;