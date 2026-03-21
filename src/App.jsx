import { useEffect, useState } from "react";
import { api } from "./services/api";
import Navbar from "./components/Navbar";
import ListUsers from "./components/ListUsers";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("listar");
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect (() => {
    setMessage("")
  }, [view]);

  function handleCreateUser() {
    if (!name.trim()) return;

    const newUser = {
      id: users.length + 1,
      name: name,
    };

    setUsers([...users, newUser]);
    setName("");
    setMessage("Usuário criado com sucesso");
  }

  function handleDeleteUser(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
    setMessage("Usuário apagado com sucesso");
  }

  function startEdit(user) {
    setEditingId(user.id);
    setName(user.name);
    setView("editar");
  }

  function handleUpdateUser() {
    const updatedUsers = users.map((user) =>
      user.id === editingId ? { ...user, name } : user
    );

    setUsers(updatedUsers);
    setEditingId("");
    setName("");
    setMessage("Usuário atualizado com sucesso");
  }

  function renderView() {
    if (view === "listar") {
      return <ListUsers users={users} />;
    }

    if (view === "criar") {
      return (
        <CreateUser
          name={name}
          setName={setName}
          handleCreateUser={handleCreateUser}
        />
      );
    }

    if (view === "editar") {
      return (
        <EditUser
          users={users}
          name={name}
          setName={setName}
          startEdit={startEdit}
          handleUpdateUser={handleUpdateUser}
        />
      );
    }

    if (view === "apagar") {
      return (
        <DeleteUser
          users={users}
          handleDeleteUser={handleDeleteUser}
        />
      );
    }
  }

  return (
    <div className="pt-10 flex flex-col justify-center text-center gap-7 w-full">
      <h1 className="text-5xl">CRUD de Usuários</h1>
      <Navbar setView={setView} view={view}/>
      {message && <p>{message}</p>}
      {renderView()}
    </div>
  );
}

export default App;