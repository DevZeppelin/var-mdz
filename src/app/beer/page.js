import Layout from "@/app/components/Layout";
import Back_button from "../components/back_button";
import Header from "../components/header";

const beer = () => {
  return (
    <Layout>
      <div className="p-10 md:p-16 space-y-2 text-center">
        <p>After (juntada de informáticos /var/mdz)</p>
        <p>📆 viernes 12 de Enero</p>
        <p>📍 Héroes carranza GC</p>
        <p>⏰ 20:00hs</p>
        <p>
          ¡Los esperamos a todos para tomar una buena birra y hablar de todos
          los temas nerds que nos encantan!
        </p>{" "}
        <p>
          Ubicación del bar:{" "}
          <a href="https://maps.app.goo.gl/NT6N7a8M323EDRmu5" target="_blank" className="text-lime-600">
            UBICACIÓN
          </a>
        </p>
      </div>
      <Back_button />
    </Layout>
  );
};

export default beer;
