import Navbar from './components/Navbar';
import Newfoot from './components/Newfoot';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex w-screen h-full m-4 justify-center'>
        <div className='flex-col w-11/12 h-72 justify-center bg-yellow-500 rounded-lg bg-opacity-50 backdrop-blur-2xl shadow-inner'>
          <p className='font-sans font-bold text-7xl m-2 text-center'>SIBGHAT ULLAH</p>
          <p className='font-sans m-2 text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus ipsa perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci nulla mollitia unde dignissimos corporis corrupti recusandae dolor fugit! Illum earum repellat ea ullam laboriosam impedit voluptate expedita recusandae odit.</p>
          
          <div className='flex justify-center p-2 space-x-8'>
          <div className="bg-slate-900 w-20 h-10 hover:bg-yellow-500 p-1 rounded-md justify-center items-center transition-colors duration-200"><p className="text-center text-white mt-1 font-sans"><Link href="/builder">Create</Link></p></div>
          <div className="bg-yellow-500 w-20 h-10 hover:bg-slate-900 p-1 rounded-md justify-center items-center transition-colors duration-200"><p className="text-center text-white mt-1 font-sans font-semibold"><Link href="/login">Login</Link></p></div>
          </div>
        </div>
      </div>

      <div className='flex justify-center w-full h-auto'>
        <div className="flex justify-between w-11/12 p-4 h-[300px]">
       
        <div className="w-5/12 bg-yellow-500 h-300 rounded-md shadow-lg p-2 m-2">
            <Image
              src="/"
              alt="Image 1"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            />
          </div>

          <div className="w-5/12 bg-slate-900 h-300 rounded-md shadow-lg p-2 m-2">
            <Image
              src="/"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            />

          </div>
          <div className="w-5/12 bg-yellow-500 h-300 rounded-md shadow-lg p-2 m-2">
            <Image
              src="/"
              alt="Image 3"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            />

          </div>
          <div className="w-5/12 bg-slate-900 h-300 rounded-md shadow-lg p-2 m-2">
            <Image
              src="/"
              alt="Image 4"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            />

          </div>
      </div>
      </div>

      <div className='flex w-screen h-full m-4 justify-center'>
        <div className='flex-col w-11/12 h-72 justify-center bg-slate-900 rounded-lg bg-opacity-50 backdrop-blur-2xl shadow-inner'>
          <p className='font-sans font-bold text-4xl p-4'>SUMMARY</p>
          <p className='font-sans p-4'>An energetic individual with great passion for Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus ipsa perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci nulla mollitia unde dignissimos corporis corrupti recusandae dolor fugit! Illum earum repellat ea ullam laboriosam impedit voluptate expedita recusandae odit.</p>
        </div>
      </div>
      <Newfoot></Newfoot>
    </div>
  );
}