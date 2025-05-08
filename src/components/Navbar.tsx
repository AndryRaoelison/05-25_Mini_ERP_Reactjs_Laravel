import { notification, profileIcon, reactLogo, searchIcon } from "../assets/icons"

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center p-[20px] gap-2 cursor-pointer   mx-0!">
        <img src={reactLogo} alt="react-logo" />
        <h1>Dashboard</h1>
      </div>
      <div className="flex gap-8  p-[20px] mx-0!">
        <img src={searchIcon} className="h-[30px] cursor-pointer  w-[30px]" alt="search-icon" />
        <div className="flex relative cursor-pointer ">
          <img src={notification} alt="notification-icon" className="h-[30px] w-[30px]" />
          <span className="absolute right-[-10px] text-[0.7rem] font-semibold top-[-10px] bg-red-500  flex items-center justify-center w-[20px] h-[20px] rounded-full"> 1 </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer ">
          <img src={profileIcon} alt="notification-icon" className="h-[30px] w-[30px] bg-gray-400 p-1 rounded-full " />
          <h3> User </h3>
          </div>
          <p className="cursor-pointer ">Log out</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar

