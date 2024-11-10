import Link from "next/link"
import Image from "next/image"

export default function Navbar (){
    return(
        <div className="flex w-full h-24 items-center justify-between bg-yellow-500 rounded-md">
          
          {/* Left Section*/}
          <div className="flex w-1/5 h-24 justify-start items-center">
          <Image className="ml-4"src="https://img.icons8.com/?size=100&id=9684&format=png&color=000000"
                            width={50}
                            height={50} 
                            alt="Logo"
                        />

            <p className="text-slate-950 font-extrabold text-xl p-4">MY RESUME</p>
          </div>
          
          {/* Navigation bar */}
          <div className="flex w-1/2 h-16 justify-center items-center space-x-4">
            <div className="w-auto h-10 flex justify-center items-center">
              <p className="text-center text-slate-50 p-2 font-bold font-serif hover:text-slate-950 transition-colors duration-200">
                <Link href="/">Home</Link>
              </p>
            </div>
            <div className="w-auto h-10 flex justify-center items-center">
              <p className="text-center text-slate-50 p-2 font-bold font-serif hover:text-slate-950 transition-colors duration-200">
                <Link href="/education">Education</Link>
              </p>
            </div>
            <div className="w-auto h-10 flex justify-center items-center">
              <p className="text-center text-slate-50 p-2 font-bold font-serif hover:text-slate-950 transition-colors duration-200">
                <Link href="/training">Training</Link>
              </p>
            </div>
            <div className="w-auto h-10 flex justify-center items-center">
              <p className="text-center text-slate-50 p-2 font-bold font-serif hover:text-slate-950 transition-colors duration-200">
                <Link href="/experience">Experience</Link>
              </p>
            </div>
            <div className="w-auto h-10 flex justify-center items-center">
              <p className="text-center text-slate-50 p-2 font-bold font-serif hover:text-slate-950 transition-colors duration-200">
                <Link href="/skills">Skills</Link>
              </p>
            </div>
            <div className="w-auto h-10 flex justify-center items-center">
              <p className="text-center text-slate-50 p-2 font-bold font-serif hover:text-slate-950 transition-colors duration-200">
                <Link href="/research">Research</Link>
              </p>
            </div>
            <div className="w-auto h-10 flex justify-center items-center">
              <p className="text-center text-slate-50 p-2 font-bold font-serif hover:text-slate-950 transition-colors duration-200">
                <Link href="/contact">Contact</Link>
              </p>
            </div>
          </div>
          
          {/* Right Section*/}
          <div className="flex w-1/5 h-24 justify-center items-center space-x-4">
          <div className="bg-slate-900 w-20 h-10 hover:bg-yellow-500 p-1 rounded-md justify-center items-center transition-colors duration-200"><p className="text-center text-white mt-1 font-sans"><Link href="/builder">Create</Link></p></div>
          <div className="bg-yellow-500 w-20 h-10 hover:bg-slate-900 p-1 rounded-md justify-center items-center transition-colors duration-200"><p className="text-center text-white mt-1 font-sans font-semibold"><Link href="/builder">Login</Link></p></div>
          </div>
 
        </div>
    )
}