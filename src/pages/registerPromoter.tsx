import { useState } from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

import api from '../services/api';

import { RegisterMargin } from "../styles/pages/registerPage";

interface RegisterData {
    name: string,
    birthdate: number,
    email: string,
    phone: number,
    gender: string,
    password: string,
    confirmPassword: string,
    role: string,
}

export default function RegisterPromoter(){

    const { register, handleSubmit, errors, getValues } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: RegisterData) => { 
        data.role = 'promoter';
        console.log(data)
        api.post('api/register', data).then(response => {
            console.log('Cadastro feito com sucesso!')
            alert('Cadastro feito com sucesso!')
        });
    };

    const onError = (errors: Object) => { console.log(errors) };

    const [name, setName] = useState("");
    const [birthdate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return(
        <RegisterMargin>
            <h1> Cadastre sua conta </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-margin">
                <div>
                        <label>Nome:</label>
                        <input name="name" value={name} type="text" onChange={(e) => setName(e.target.value)}  ref={register({ required: true, maxLength: 20 })}/> {errors.name && <span>Preencha esse campo</span>}
                </div>
                <div>
                        <label>Data de nascimento:</label>
                        <input name="birthdate" value={birthdate} type="date"  onChange={(e) => setBirthDate(e.target.value)} ref={register({ required: true})}/> {errors.birthdate && <span>Preencha esse campo</span>}
                </div>
                <div>
                        <label>E-mail:</label>
                        <input name="email" value={email} placeholder="seuemail@email.com" type="email" onChange={(e) => setEmail(e.target.value)} ref={register({ required: true})} /> {errors.email && <span>Preencha esse campo</span>}
                </div>
                <div>
                        <label>Telefone:</label>
                        <InputMask type="tel" name="phone" value={phone} mask="(99) 99999-9999"   onChange={(e) => setPhone(e.target.value)}/> {errors.phone && <span>Preencha esse campo</span>}
                </div>
                <div>
                        <label>Senha:</label>
                        <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} ref={register({ required: true, minLength: 8})}/> {errors.password && <span>Preencha esse campo</span>}
                </div>
                <div>
                    <label>Confirme a sua senha:</label>
                    <input name="confirmPassword" value={confirmPassword} type="password" 
                            onChange={(e) => setConfirmPassword(e.target.value)} ref={register({
                            required: true,
                            validate: {
                                matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || 'As senhas não coincidem!';
                                },
                            }
                            })} /> {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>
                <button type="submit" onClick={handleSubmit(onSubmit, onError)}> Cadastre-se </button>
            </form>
        </RegisterMargin>
    );
}
