import { useState } from "react";
import styles from './CadastrarCarro.module.css';

const CadastrarCarro = () => {
    const [form, setForm] = useState({
        marca: "",
        modelo: "",
        ano: "",
        cor: "",
        preco: "",
        quilometragem: "",
        combustivel: "",
        status: "disponível",
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage("");

        const dadosParaEnviar = {
            ...form,
            ano: Number(form.ano),
            preco: Number(form.preco),
            // Trata quilometragem, garantindo que seja um número mesmo que vazia/zero
            quilometragem: Number(form.quilometragem) || 0, 
        };

        try {
            const response = await fetch("http://localhost:3000/carros", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosParaEnviar),
            });
            
            if (!response.ok) throw new Error("Erro ao cadastrar.");

            setMessage("Carro cadastrado com sucesso!");
            setForm({
                marca: "", modelo: "", ano: "", cor: "", preco: "", quilometragem: "", combustivel: "", status: "disponível",
            });
        } catch (error) {
            setMessage("Erro ao salvar o carro: " + error.message);
        }
    }

    return (
        <div>
            <h1>Cadastrar novo carro</h1>
            {message && <p>{message}</p>}

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <input name="marca" value={form.marca} onChange={handleChange} placeholder="Marca" />
                <input name="modelo" value={form.modelo} onChange={handleChange} placeholder="Modelo" />
                <input name="ano" type="number" value={form.ano} onChange={handleChange} placeholder="Ano" />
                <input name="cor" value={form.cor} onChange={handleChange} placeholder="Cor" />
                <input name="preco" type="number" value={form.preco} onChange={handleChange} placeholder="Preço" />
                <input name="quilometragem" type="number" value={form.quilometragem} onChange={handleChange} placeholder="Quilometragem" />
                <input name="combustivel" value={form.combustivel} onChange={handleChange} placeholder="Combustível" />

                <select name="status" value={form.status} onChange={handleChange}>
                    <option value="disponível">Disponível</option>
                    <option value="vendido">Vendido</option>
                </select>

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default CadastrarCarro;