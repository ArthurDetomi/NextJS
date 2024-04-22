import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Subdivisao from "@/components/Subdivisao";
import Linha from "@/components/Linha";
import Tabuleiro from "@/components/Tabuleiro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Tabuleiro />
    </>
  );
}
