import GenericButton from "./ui/GenericButton";
import GenericInput from "./ui/GenericInput";

function EditUser({users, name, setName, startEdit, handleUpdateUser, email, setEmail}) {
  return (
    <div className="flex w-full justify-center">
        <div className="flex flex-col gap-7 w-100">
            <h2 className="text-4xl mb-6">Editar usuário</h2>

            <ul className="flex flex-col gap-3">
                {users.map((user) => (
                <li className="flex justify-between" key={user.id}>
                    {user.name}
                    <GenericButton 
                    onClick={() => startEdit(user)} 
                    label={"Selecionar"}
                    />
                </li>
                ))}
            </ul>

            <GenericInput
                type="text"
                placeholder="Novo nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <GenericInput
                type="text"
                placeholder="Novo email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleUpdateUser}>Atualizar</button>
        </div>
    </div>
  );
}

export default EditUser;