function NavButton({label, onClick, active}){
    return (
        <button 
        
        onClick={onClick}
        className={` text-black font-medium border-2 w-50 h-[80px] rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transition 
        ${active ? "bg-blue-500 text-white" : "bg-white"}`}
        >{label}</button>
    )
}

export default NavButton;