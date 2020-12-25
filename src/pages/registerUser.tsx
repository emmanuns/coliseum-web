import { useState } from "react";
import InputMask from 'react-input-mask';
import { useForm, SubmitHandler } from "react-hook-form";

interface FormProps {
    name: string;
    birth: number;
    email: string;
    telephone: number;
    password: string;
    confirmPassword: string
}

function RegisterUser(props: FormProps){

    const { register, handleSubmit, errors, getValues } = useForm<FormProps>();
    const onSubmit: SubmitHandler<FormProps> = data => console.log(data);

    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return(
        <div>
            <h1> Cadastre sua conta </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome:</label>
                    <input name="name" value={name} type="text" onChange={(e) => setName(e.target.value)}  ref={register({ required: true, maxLength: 20 })}/> {errors.name && <span>This field is required</span>}
                </div>
                <div>
                    <label>Data de nascimento:</label>
                    <input name="birth" value={birth} type="date"  onChange={(e) => setBirth(e.target.value)} ref={register({ required: true})}/> {errors.birth && <span>This field is required</span>}
                </div>
                <div>
                    <label>E-mail:</label>
                    <input name="email" value={email} placeholder="seuemail@email.com" type="email" onChange={(e) => setEmail(e.target.value)} ref={register({ required: true})} /> {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label>Telefone:</label>
                    <InputMask type="tel" name="telephone" value={telephone} mask="(99) 99999-9999"   onChange={(e) => setTelephone(e.target.value)}/> {errors.telephone && <span>This field is required</span>}
                </div>
                <div>
                    <label>Senha:</label>
                    <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} ref={register({ required: true, minLength: 8})}/> {errors.password && <span>This field is required</span>}
                </div>
                <div>
                    <label>Confirme a sua senha:</label>
                    <input name="confirmPassword" value={confirmPassword} type="password" 
                            onChange={(e) => setConfirmPassword(e.target.value)} ref={register({
                            required: true,
                            validate: {
                                matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || 'Passwords should match!';
                                },
                            }
                            })} /> {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>
                <button type="submit">
                    Cadastre-se
                </button>
            </form>
        </div>
    );
}
export default RegisterUser;