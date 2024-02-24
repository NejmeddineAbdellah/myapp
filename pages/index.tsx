
import { Inter } from "next/font/google";
import App from './app';
import About from './aboutus'
import Header from '../component/Header';
import Footer from '../component/Footer';


export default function Home() {
  return (
    <>
    <div className="container" style={{backgroundColor:'#1E2E5C'}}>
    <Header/>
    <About/>
    <Footer/>
    </div>
    </>
  );
}
