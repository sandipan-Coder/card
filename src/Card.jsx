import { Heart } from 'lucide-react';
import { HeartOff } from 'lucide-react';

function Card(props) {
  return (
    <div className='w-70 h-100 bg-white rounded-2xl p-2'>
      <div 
        className=" relative h-full bg-cover bg-center rounded-2xl"
        style={{ 
            backgroundImage: `url(${props.image})`,
        }}>
        
        <div className='absolute bottom-0 h-40 w-full flex flex-col bg-black/10 backdrop-blur-xl p-2 rounded-b-2xl gap-2'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-2xl'>{props.place}</h1>
                <p className='text-xl text-amber-300 font-semibold'>{props.country}</p>
            </div>

            <div className='flex justify-between'>
                <div className='flex cursor-pointer'>
                    <Heart />
                    <p className='ml-2'>Like</p>
                </div>

                <div className='flex cursor-pointer'>
                    <HeartOff />
                    <p className='ml-2'>Dislike</p>
                </div>
            </div>

            <button className='p-2 bg-white text-black rounded-4xl hover:bg-blue-600 hover:text-white transition-colors duration-500 ease-in-out cursor-pointer'>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default Card
