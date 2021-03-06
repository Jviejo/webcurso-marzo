import { doc, getDoc } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";
import { db } from "../main";

function createMarkup(cadena: any) {
    return {
        __html: cadena
    };
}
export default function Calendario() {
    const [contenido, setContenido] = useState<string>("")
    useEffect(() => {
        const docRef = doc(db, "statics", "calendario.html");
        const docSnap = async () => await getDoc(docRef);
        docSnap().then((data: any) => {
            console.log(data.data().data)
            setContenido(data.data().data)
        })
    })

    return <article className="prose lg:prose-xl">
        {contenido && <span dangerouslySetInnerHTML={createMarkup(contenido)}></span>}
    </article>
}