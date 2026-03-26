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
  const [email, setEmail] = useState("");
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

  async function handleCreateUser() {
    if (!name.trim()) return;

    try {
    const response = await api.post("/users", {
      name,
      email,
    });

    setUsers([...users, response.data]);
    setName("");
    setEmail("");
    setMessage("Usuário criado com sucesso");
    } catch (error) {
      console.log(error);
      setMessage("Erro ao criar usuário");
    }
  }

  async function handleDeleteUser(id) {
    try{
      await api.delete(`/users/${id}`);
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
      setMessage("Usuário apagado com sucesso");
    } catch (error) {
      console.log(error);
      setMessage("Erro ao deleter usuário");
    }
  }

  function startEdit(user) {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
    setView("editar");
  }

  async function handleUpdateUser() {
    try{
      const response = await api.put(`/users/${editingId}`, {
        name,
        email,
      });

      const updatedUsers = users.map((user) =>
        user.id === editingId ? response.data : user
      );

      setUsers(updatedUsers);
      setEditingId(null);
      setName("");
      setEmail("");
      setMessage("Usuário atualizado com sucesso");
    } catch (error) {
      console.log(error);
      setMessage("Erro ao atualizar usuário");
    }
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
          email={email}
          setEmail={setEmail}
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
          email={email}
          setEmail={setEmail}
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