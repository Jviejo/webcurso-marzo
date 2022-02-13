import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../main";
function createMarkup(cadena: any) {
    return {
        __html: cadena
    };
}

export default function Sesion() {
    const [contenido, setContenido] = useState<string>("")
    useEffect(() => {
        const docRef = doc(db, "statics", "s1.html");
        const docSnap = async () => await getDoc(docRef);
        docSnap().then((data: any) => {
            console.log(data.data().data)
            setContenido(data.data().data)
        })
    })

    return <article className="prose lg:prose-xl">
        {contenido && <span dangerouslySetInnerHTML={createMarkup(contenido)}></span>}
        <h2>Cuestionarios</h2>
        <ul>
        <li>
                <Link to="/curso/quizz/html">html</Link>
            </li>
            <li>
                <Link to="/curso/quizz/css">css</Link>
            </li>
            <li>
                <Link to="/curso/quizz/bs5">css bootstrap</Link>
            </li>
        </ul>
    </article>
}
