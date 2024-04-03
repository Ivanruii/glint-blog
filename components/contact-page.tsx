import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";
import { toast } from "sonner";
import { Container, Header, Layout } from "./";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactPage: React.FC = ({ preview = false }: any) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast("Contacto", {
      description: "Tu mensaje ha sido enviado correctamente.",
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
              <label htmlFor="name" className="block mb-2 font-bold">
                Nombre
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-bold">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              ></Textarea>
            </div>
            <Alert variant="default" className="mb-4">
              <ExclamationTriangleIcon className="w-4 h-4" />
              <AlertTitle>Mantenimiento</AlertTitle>
              <AlertDescription>
                El sistema de mensajería no esta disponible por el momento.
              </AlertDescription>
            </Alert>
            <div className="flex justify-end">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </article>
      </Container>
    </Layout>
  );
};
