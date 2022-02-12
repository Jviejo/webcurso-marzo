import { Link } from "react-router-dom";

export default function Sesion() {
    return <article className="prose lg:prose-xl">
        <h1>Introdución</h1>
        <h2>Objetivos de la sesión</h2>
        <ul>
            <li>Definir los elementos que son necesarios para empezar en la programación</li>
            <li>Empezar con el HTML, base de la construción de páginas web</li>
            <li>Practicar con las hojas de estilo en cascada</li>
        </ul>
        <h2>Contenidos</h2>
        <ul>
            <li><a href="https://docs.google.com/document/d/1Ibkao-MZSDVoX4_V7rAzQHiEBwlw-YoC/edit?usp=sharing&ouid=116269000545785053716&rtpof=true&sd=true" target="_blank">01_01 HTML BASICO</a></li>
            <li><a href="https://docs.google.com/document/d/1bWlZkFgd5uv6MT17YNnfjKGy3XdpkPoE/edit?usp=sharing&ouid=116269000545785053716&rtpof=true&sd=true" target="_blank">01_10 HTML_ESTRUCTURA</a></li>
            <li><a href="https://docs.google.com/document/d/17SF4XkxUkAF_NXpQrl2n3f7s6vgUzn44/edit?usp=sharing&ouid=116269000545785053716&rtpof=true&sd=true" target="_blank">01_20 HTML FORM</a></li>
            <li><a href="https://docs.google.com/document/d/1x6nKoW-ttXffzNYg9wMSfVex2iWsoGsi/edit?usp=sharing&ouid=116269000545785053716&rtpof=true&sd=true" target="_blank">01_30 HTML_MULTIMEDIA</a></li>
            <li><a href="https://docs.google.com/document/d/1v6dXLWe9jeTsB8U4imRwZ1AVLpokOijC/edit?usp=sharing&ouid=116269000545785053716&rtpof=true&sd=true" target="_blank">02_01 CSS BASICO</a></li>
        </ul>

        <h2>Cuestionarios</h2>
        <ul>
            <li><Link to="/curso/quizz/html" >html</Link></li>
        </ul>

    </article>
}

