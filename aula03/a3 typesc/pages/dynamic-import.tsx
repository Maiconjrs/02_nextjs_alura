import dynamic from 'next/dynamic';
import { useState } from 'react';
//import YouTubeVideo from '../components/DynamicVideo';


//o dynamic carrega conteudo sobe demanda por exemplo lazy load
const YouTubeVideo = dynamic(() => import('../components/DynamicVideo'), {
  loading: () => <p>Loading..</p>
});

export default function DynamicImportPage() {
  const [isVisible, setVideoStatus] = useState(false);
  return (
    <div>
      <p>
        Mostrar Vídeo
        <input
          type="checkbox"
          onChange={() => {
            setVideoStatus(!isVisible);
          }}
        />
      </p>
      {isVisible && <YouTubeVideo />}      
    </div>
  )
}
