import { useState } from "react";

export default function Admin() {
  const [login, setLogin] = useState("");

  const adminPanelLogin = () => {
    console.log("oi");
  };

  return (
    <div className="my-5 mx-auto w-10/12">
      <form
        className="p-10 mb-10 rounded-lg bg-purple-200 shadow-lg flex flex-col justify-center items-center "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="login">
          Usuário
          <input
            className="w-60 my-2"
            type="text"
            id="login"
            required
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            value={login}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            className="w-60 my-2"
            type="password"
            required
            id="password"
            onChange={(e) => setLogin(e.target.value)}
            onBlur={(e) => setLogin(e.target.value)}
          />
        </label>
        <button
          onSubmit={adminPanelLogin}
          className="rounded bg-purple-500 px-6 py-2 color text-white hover:opacity-50 border-none"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
