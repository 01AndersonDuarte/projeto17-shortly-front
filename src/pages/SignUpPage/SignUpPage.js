import Header from "../../components/Header/Header";

export default function SignInPage(){
    return(
        <>
            <Header activePage={2}/>
        </>
        // <ContainerSignIn>
        //     <form onSubmit={singIn}>
        //         <input
        //             placeholder="Nome"
        //             type="text"
        //             name="name"
        //             required
        //             onChange={insertLoginData}
        //             onInvalid={(event) => event.target.setCustomValidity('Preencha este campo.')}
        //         />
        //         <input
        //             placeholder="E-mail"
        //             type="email"
        //             name="email"
        //             required
        //             onChange={insertLoginData}
        //             onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um e-mail válido.')}
        //         />
        //         <input
        //             placeholder="Senha"
        //             type="password"
        //             name="password"
        //             required
        //             onChange={insertLoginData}
        //             onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
        //         />
        //         <input
        //             placeholder="Confirme sua senha"
        //             type="password"
        //             name="password"
        //             required
        //             onChange={insertLoginData}
        //             onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
        //         />
        //         <button type="submit">Entrar</button>
        //     </form>
    );
}