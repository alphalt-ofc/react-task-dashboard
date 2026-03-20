import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Task Dashboard</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;