import NavButton from "./ui/NavButton";

function Navbar({setView, view}) {
  return (
    <div className="flex gap-7 justify-center">
        <NavButton active={view === "listar"} onClick={() => setView("listar")} label={"Listar"}/>
        <NavButton active={view === "criar"} onClick={() => setView("criar")} label={"criar"}/>
        <NavButton active={view === "editar"} onClick={() => setView("editar")} label={"editar"}/>
        <NavButton active={view === "apagar"} onClick={() => setView("apagar")} label={"apagar"}/>
    </div>
  );
}

export default Navbar;