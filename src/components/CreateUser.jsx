import GenericButton from "./ui/GenericButton";
import GenericInput from "./ui/GenericInput";

function CreateUser({name, setName, handleCreateUser, email, setEmail}) {
  return (
    <div className="flex w-full justify-center">
        <div className="flex flex-col gap-7 w-100">
            <h2 className="text-4xl mb-6">Criar usuário</h2>
            <div className="flex flex-col gap-5">
                <GenericInput
                    type={"text"}
                    placeholder={"Digite o nome"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <GenericInput
                    type={"email"}
                    placeholder={"Digite o email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <GenericButton 
                onClick={handleCreateUser} 
                label={"Criar"}
                />
            </div>
        </div>
    </div>
  );
}

export default CreateUser;