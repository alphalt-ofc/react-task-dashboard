function ListUsers({users}) {
  return (
    <div className="flex w-full justify-center">
        <div className="flex flex-col gap-7 w-100">
            <h2 className="text-4xl mb-6">Lista de usuários</h2>
            <ul className="flex flex-col gap-3">
                {users.map((user) => (
                <li className="flex justify-between" key={user.id}>
                    <span>{user.name}</span>
                    <span>{user.id}</span> 
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default ListUsers;