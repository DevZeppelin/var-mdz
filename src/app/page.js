import Image from "next/image";
import Layout from "./components/Layout";


export default function Home() {


  return (
    <Layout>
      <div>
        {/* <Image
          src="/logo.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="animate-logo"
        /> */}
        <code className="flex justify-center py-4 text-lime-300 text-center">
          Hecho por informáticos para informáticos
        </code>
      </div>
    </Layout> 
  );
}
