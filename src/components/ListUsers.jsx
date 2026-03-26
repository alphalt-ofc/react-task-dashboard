function ListUsers({users}) {
  return (
    <div className="flex w-full justify-center">
        <div className="flex flex-col gap-7 w-100">
            <h2 className="text-4xl mb-6">Lista de usuários</h2>
            <ul className="flex flex-col gap-3">
                {users.map((user) => (
                <li className="flex flex-col text-start" key={user.id}>
                    <div className="flex justify-between">
                        <span>{user.name}</span>
                        <span>{user.id}</span> 
                    </div>
                    <span className="text-[12px] text-gray-400">{user.email}</span>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default ListUsers;