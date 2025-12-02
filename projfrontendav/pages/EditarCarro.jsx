import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditarCarro.module.css'

const EditarCarro = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(null);

    useEffect(() => {
        async function loadCarro() {
            const response = await fetch(`http://localhost:3000/carros/${id}`);
            const data = await response.json();
            setForm(data);
        }
        loadCarro();
    }, [id]);

    if (!form) return <p>Carregando...</p>;

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSave() {
        if (!window.confirm("Confirmar alteração?")) return;
        
        try {
            await fetch(`http://localhost:3000/carros/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            alert("Alterações salvas!");
            navigate("/carros");
        } catch {
            alert("Erro ao atualizar.");
        }
    }

    async function handleDelete() {
        if (!window.confirm("Tem certeza que deseja excluir?")) return;

        try {
            await fetch(`http://localhost:3000/carros/${id}`, { method: "DELETE" });
            alert("Carro excluído.");
            navigate("/carros");
        } catch {
            alert("Erro ao excluir.");
        }
    };

    return (
        <div>
            <h1>Editando carro {form.marca} {form.modelo}</h1>

            <input name="marca" value={form.marca} onChange={handleChange} />
            <input name="modelo" value={form.modelo} onChange={handleChange} />
            <input name="ano" type="number" value={form.ano} onChange={handleChange} />
            <input name="cor" value={form.cor} onChange={handleChange} />
            <input name="preco" type="number" value={form.preco} onChange={handleChange} />
            <input name="quilometragem" type="number" value={form.quilometragem} onChange={handleChange} />
            <input name="combustivel" value={form.combustivel} onChange={handleChange} />
            <select name="status" value={form.status} onChange={handleChange}>
                <option value="disponível">Disponível</option>
                <option value="vendido">Vendido</option>
            </select>


            <button onClick={handleSave}>Salvar</button>
            <button onClick={handleDelete}>Excluir</button>
        </div>
    );
};

export default EditarCarro;