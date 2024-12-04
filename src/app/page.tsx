const Page = () => {
  return (
    <div className="w-screen h-screen p-5 bg-gray-900">
      <div className="mt-5">
        <h1 className="text-3xl text-center font-bold">Faça seu login abaixo </h1>

        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField">Endereço de email</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500" type='email'id='emailField'/>
        </div>

        <div>
          <label className="block text-lg mb-2" htmlFor="passwField">Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500" type='password'id='passwField'/>
        </div>
        <div>
          <button className="w-full p-2 mt-4 rounded-md text-lg font-bold text-white bg-yellow-500 border-none">Entrar</button>
        </div>
      </div>
      <div className="text-center text-gray-400">
        Não é membro? <a className="underline text-yellow-600" href=""> Faça seu cadastro agora</a>
      </div>
    </div>
  )
}

export default Page;