function GenericButton({onClick, label}) {
    return (
        <button
        onClick={onClick}
        className="border-1 rounded-full px-3 cursor-pointer hover:bg-white hover:text-black transition"
        >{label}</button>
    )
}

export default GenericButton