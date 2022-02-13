import { doc, getDoc } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../main";

function createMarkup(cadena: any) {
    return {
        __html: cadena
    };
}
export default function Dinamico() {
    const params = useParams()
    const [contenido, setContenido] = useState<string>("")
    useEffect(() => {
        const docRef = doc(db, "statics", ""+ params.fichero);
        const docSnap = async () => await getDoc(docRef);
        docSnap().then((data: any) => {
            setContenido(data.data().data)
        })
    })

    return <article className="prose lg:prose-xl">
        {contenido && <span dangerouslySetInnerHTML={createMarkup(contenido)}></span>}
    </article>
}