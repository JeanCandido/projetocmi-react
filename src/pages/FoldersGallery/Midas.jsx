import img_01 from '../../imgs/gallery/venda_midas/img_midas01.jpg'
import img_02 from '../../imgs/gallery/venda_midas/img_midas02.jpg'
import img_03 from '../../imgs/gallery/venda_midas/img_midas03.jpg'
import img_04 from '../../imgs/gallery/venda_midas/img_midas04.jpg'
import img_05 from '../../imgs/gallery/venda_midas/img_midas05.jpg'
import img_06 from '../../imgs/gallery/venda_midas/img_midas06.jpg'
import img_07 from '../../imgs/gallery/venda_midas/img_midas07.jpg'
import img_08 from '../../imgs/gallery/venda_midas/img_midas08.jpg'
import img_09 from '../../imgs/gallery/venda_midas/img_midas09.jpg'
import img_10 from '../../imgs/gallery/venda_midas/img_midas10.jpg'
import img_11 from '../../imgs/gallery/venda_midas/img_midas11.jpg'
import img_12 from '../../imgs/gallery/venda_midas/img_midas12.jpg'
import img_13 from '../../imgs/gallery/venda_midas/img_midas13.jpg'
import img_14 from '../../imgs/gallery/venda_midas/img_midas14.jpg'

const media = [
    { type: "image", src: img_01, content: ""},
    { type: "image", src: img_02, content: ""},
    { type: "image", src: img_03, content: ""},
    { type: "image", src: img_04, content: ""},
    { type: "image", src: img_05, content: ""},
    { type: "image", src: img_06, content: ""},
    { type: "image", src: img_07, content: ""},
    { type: "image", src: img_08, content: ""},
    { type: "image", src: img_09, content: ""},
    { type: "image", src: img_10, content: ""},
    { type: "image", src: img_11, content: ""},
    { type: "image", src: img_12, content: ""},
    { type: "image", src: img_13, content: ""},
    { type: "image", src: img_14, content: ""},

  ];
  

import { useState, useRef, useEffect } from "react";
import { Helmet } from 'react-helmet-async'

export default function Midas() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedMedia?.type === "video" && videoRef.current) {
      videoRef.current.play().catch((error) => console.log("Erro ao reproduzir:", error));
    }
  }, [selectedMedia]);
  useEffect(() => {
    window.scrollTo(0, 0); // Faz a rolagem para o topo da página
  }, []);


  return (
    <div className="flex flex-col items-center p-4">
      <Helmet>
        <title>Galeria - Cmi Engenharia</title>
        <meta
          name='description'
          content='Fotos e Videos da Venda dos elevadores cremalheiras para a Midas' 
        />
        <link rel="canonical" href="https://cmiengenharia.com.br/galeria/vendas_midas/" />
      </Helmet>
      <div className='w-full'>
          <h1 className="text-2xl text-black font-bold mb-8">Venda Midas</h1>
      </div>
      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setSelectedMedia(null)}
          >
            &times;
          </button>

          {selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src}
              alt="Selecionada"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          ) : (
            <video
              ref={videoRef}
              muted
              autoPlay
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            >
              <source src={selectedMedia.src} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {media.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Mídia ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg"
              />
            ) : (
              <video className="w-full h-40 object-cover rounded-lg">
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}