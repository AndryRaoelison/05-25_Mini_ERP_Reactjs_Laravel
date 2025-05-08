import { topDealsProfiles } from "../constant";

const TopDealsSection = () => {
  return (
     <div className="mb-2  p-1">
        <h3 className="mb-3 text-3xl font-bold">Top Deals</h3>
        {
            topDealsProfiles.map((topDealsProfile)=>(
            <div key={topDealsProfile.id} className="flex justify-between items-center mb-3">
                <div className="flex gap-2 mx-0">
                    <img src={topDealsProfile.profilePicture} alt="profil-illustration" className="h-[50px] w-[50px] rounded-full object-cover " />
                    <div className="flex flex-col items-start">
                        <span className="mx-0 text-[16px] font-bold">{topDealsProfile.name}</span>
                        <span className="text-[12px] block mx-0  font-light">{topDealsProfile.email}</span>
                    </div>
                </div>
                <div className="mx-0">
                    <span className="text-[14px] font-semibold">${String(topDealsProfile.deal).padEnd(5,"0")}</span>
                </div>
            </div>
            ))
        }
    </div>
  ) 
}

export default TopDealsSection