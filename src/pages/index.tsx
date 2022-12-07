import Head from "next/head";
import { CoHome } from "../components/home";
import { Homes } from "../components/home/inicio";
import { Botao } from "../components/home/inicio/botao";

export default function Home() {

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main>
               <CoHome/>
            </main>



        </>
    )
}
  
