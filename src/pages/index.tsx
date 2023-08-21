import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import "../styles/Main.module.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Table from "./components/Table";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main-ui">
      <TopBar />
      <Header />
      <Table />
    </div>
  );
}
