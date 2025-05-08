import img_1 from '../imgs/gallery/img-1.jpeg'
import img_2 from '../imgs/gallery/img-2.jpeg'
import img_3 from '../imgs/gallery/img-3.jpeg'
import img_4 from '../imgs/gallery/img-4.jpeg'
import img_5 from '../imgs/gallery/img-5.jpeg'
import img_6 from '../imgs/gallery/img-6.jpeg'
import img_7 from '../imgs/gallery/img-7.jpeg'
import img_8 from '../imgs/gallery/img-8.jpeg'
import img_9 from '../imgs/gallery/img-9.jpeg'
import img_10 from '../imgs/gallery/img-10.jpeg'
import img_11 from '../imgs/gallery/img-11.jpeg'
import img_12 from '../imgs/gallery/img-12.jpeg'
import img_13 from '../imgs/gallery/img-13.jpeg'
import img_14 from '../imgs/gallery/img-14.jpeg'
import img_15 from '../imgs/gallery/img-15.jpeg'
import img_16 from '../imgs/gallery/img-16.jpeg'
import img_17 from '../imgs/gallery/img-17.jpeg'
import img_18 from '../imgs/gallery/img-18.jpeg'
import img_19 from '../imgs/gallery/img-19.jpeg'
import img_20 from '../imgs/gallery/img-20.jpeg'
import img_21 from '../imgs/gallery/img-21.jpeg'
import img_22 from '../imgs/gallery/img-22.jpeg'
import img_23 from '../imgs/gallery/img-23.jpeg'
import img_24 from '../imgs/gallery/img-24.jpeg'
import img_25 from '../imgs/gallery/img-25.jpeg'
import img_26 from '../imgs/gallery/img-26.jpeg'
import img_27 from '../imgs/gallery/img-27.jpeg'
import img_28 from '../imgs/gallery/img-28.jpeg'
import img_29 from '../imgs/gallery/img-29.jpeg'
import img_30 from '../imgs/gallery/img-30.jpeg'
import img_31 from '../imgs/gallery/img-31.jpeg'
import img_32 from '../imgs/gallery/img-32.jpeg'
import img_33 from '../imgs/gallery/img-33.jpeg'
import img_34 from '../imgs/gallery/img-34.jpeg'
import video_1 from '../imgs/gallery/video-1.mp4'
import video_2 from '../imgs/gallery/video-2.mp4'

const media = [
    { type: "video", src: video_1, content: <div className='bg-cmi-2 flex p-4 rounded mt-2 justify-center'>
        <FaVideo/>
    </div>},
    { type: "video", src: video_2, content: <div className='bg-cmi-2 flex p-4 rounded mt-2 justify-center'>
        <FaVideo/>
    </div>},
    { type: "image", src: img_22, content: ""},
    { type: "image", src: img_23, content: ""},
    { type: "image", src: img_24, content: ""},
    { type: "image", src: img_25, content: ""},
    { type: "image", src: img_26, content: ""},
    { type: "image", src: img_27, content: ""},
    { type: "image", src: img_28, content: ""},
    { type: "image", src: img_29, content: ""},
    { type: "image", src: img_30, content: ""},
    { type: "image", src: img_31, content: ""},
    { type: "image", src: img_32, content: ""},
    { type: "image", src: img_33, content: ""},
    { type: "image", src: img_34, content: ""},
    { type: "image", src: img_1, content: ""},
    { type: "image", src: img_2, content: ""},
    { type: "image", src: img_3, content: ""},
    { type: "image", src: img_4, content: ""},
    { type: "image", src: img_5, content: ""},
    { type: "image", src: img_6, content: ""},
    { type: "image", src: img_7, content: ""},
    { type: "image", src: img_8, content: ""},
    { type: "image", src: img_9, content: ""},
    { type: "image", src: img_10, content: ""},
    { type: "image", src: img_11, content: ""},
    { type: "image", src: img_12, content: ""},
    { type: "image", src: img_13, content: ""},
    { type: "image", src: img_14, content: ""},
    { type: "image", src: img_15, content: ""},
    { type: "image", src: img_16, content: ""},
    { type: "image", src: img_17, content: ""},
    { type: "image", src: img_18, content: ""},
    { type: "image", src: img_19, content: ""},
    { type: "image", src: img_20, content: ""},
    { type: "image", src: img_21, content: ""},

  ];
  

import { useState, useRef, useEffect } from "react";
import { FaVideo, FaRegFolder } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Gallery() {
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
          content='Galeria de fotos e videos das reformas e alugueis de elevadores da CMI' 
        />
        <link rel="canonical" href="https://cmiengenharia.com.br/galeria" />
      </Helmet>
      <div className='w-full'>
          <h1 className="text-2xl text-black font-bold mb-8">GALERIA</h1>
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
        <div className='bg-cmi-2 rounded-lg flex items-center justify-center text-3xl flex-col cursor-pointer'>
          <Link to='vendas-midas'>
            <FaRegFolder/>
            <p className='pt-4 font-bold'>Venda Midas</p>
          </Link>
        </div>
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
                className="w-full h-40 object-cover rounded-lg"
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