import GenericButton from "./ui/GenericButton";

function DeleteUser({users, handleDeleteUser}) {
  return (
    <div className="flex w-full justify-center">
        <div className="flex flex-col gap-7 w-100">
            <h2 className="text-4xl mb-6">Apagar usuário</h2>

            <ul className="flex flex-col gap-3">
                {users.map((user) => (
                <li 
                className="flex justify-between"
                key={user.id}>
                    {user.name}

                    <GenericButton 
                    onClick={() => handleDeleteUser(user.id)} 
                    label={"Apagar"}
                    />
                </li>
                ))}
            </ul>
        </div>

    </div>
  );
}

export default DeleteUser;