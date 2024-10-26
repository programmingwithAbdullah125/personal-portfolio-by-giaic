import Navbar from '../header/navbar';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="main-container">
      <div className="myinfo">
        <h1>Hello!</h1>
        <h1>I'm Abdullah</h1>
        <p>Hello I'm Abdullah <br /> I am in FSc- II and i am learning next.js and artificial intellegence</p>
      </div>
      <div className="image-container">
        <Image
        src="/myimage.jpg" alt="profile picture"height={300} width={300} className="image-container"></Image>        
    </div>
    </div>
  );
}
