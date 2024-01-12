import Back_button from "../components/back_button";
import Layout from "../components/Layout";

const events = () => {
  return (
    <Layout>
      <div className="p-10 md:p-16 text-center">
        Prómimamente información del próximo super archi mega /var/mdz{" "}
        <p className="text-5xl text-lime-600">2024</p>
      </div>
      <Back_button />
    </Layout>
  );
};

export default events;
