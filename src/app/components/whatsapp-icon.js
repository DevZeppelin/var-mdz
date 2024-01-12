import Image from "next/image";

const WhatsappIcon = () => {
  return (
    <a
      href="https://chat.whatsapp.com/LEFY87p16mS7pZwp4xI097"
      target="_blank"
      rel="noreferrer"
    >
      <div className="fixed bottom-10 right-3 md:right-10 cursor-pointer z-40 h-16 w-16">
        <Image
          src="/whatsapp.webp"
          width={200}
          height={200}
          alt="whatsapp icon logo dev zeppelin webs pages www perfomance "
                     
        />
      </div>
    </a>
  );
};

export default WhatsappIcon;