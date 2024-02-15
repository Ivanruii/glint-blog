import React, { useState } from "react";
import { Container, Header, Layout } from "./";
import { Button } from "./ui/button";

export const ContactPage: React.FC = ({ preview = false }: any) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una llamada a una API o enviar por correo electrónico
        console.log(formData);
        // Luego puedes reiniciar el formulario si lo deseas
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                <article className="mb-10">
                    <header>
                        <h1 className="my-4 text-3xl font-bold">Contacto</h1>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Nombre</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Mensaje</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">Enviar</Button>
                        </div>
                    </form>
                </article>
            </Container>
        </Layout>
    );
};
