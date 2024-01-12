import Link from "next/link";

const Back_button = () => {
  return (
    <div>
      <Link href="/">
        <div className="border-2 rounded-lg m-8 p-4 bg-lime-700 hover:bg-lime-400 hover:text-black font-bold mt-8">
          HOME
        </div>
      </Link>
    </div>
  );
};

export default Back_button;
