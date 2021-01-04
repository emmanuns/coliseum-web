import React, { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormProps {
    email: string;
    password: string;
}

function LoginForm(props: FormProps){

    const { register, handleSubmit, errors} = useForm<FormProps>();
    const onSubmit: SubmitHandler<FormProps> = data => console.log(data);
  

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submit(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append("email", email);
        data.append("password", password);

        alert("Cadastro realizado com sucesso!");

        console.log({
            email,
            password
        })
    };

    return(
        <div>
            <h1> Login </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>E-mail:</label>
                    <input name="email" value={email} placeholder="seuemail@email.com" type="email" onChange={(e) => setEmail(e.target.value)} ref={register({ required: true})} /> {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label>Senha:</label>
                    <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} ref={register({ required: true, minLength: 8})}/> {errors.password && <span>This field is required</span>}
                </div>
                <button type="submit">
                    Cadastre-se
                </button>
            </form>
        </div>
    );
}

export default LoginForm;