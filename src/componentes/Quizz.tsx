import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../main'
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
export function Quizz() {

    const params = useParams()
    const auth = getAuth();
    const generateState = (lista: any) => {
        return lista.map((q: any, ndx: any) => {
            return {
                question: q,
                answer: null,
                correct: q.split('\n')[q.split('\n').length - 1],
                id: ndx
            }
        }
        )
    }

    const [state, setState] = React.useState<any>()
    useEffect(() => {
        const docRef = doc(db, "quizzes", ""+params.name);
        const docSnap = async () => await getDoc(docRef);
        docSnap().then((data: any) => {
            console.log(data.data().data)
            setState(generateState(data.data().data.split("\n\n").filter((i: string) => i !== '')))
        })
        // fetch('/' + params.name + '.txt').then(response => response.text()).then(text => {
        //     //console.log(text)
        //     //console.log(text.split("\n\n"))
        //     setState(generateState(text.split("\n\n").filter(i => i !== '')))
        // })
    }, [params.name])

    const updateState = (id: any, answer: any) => {
        setState([...state.map((q: any) => q.id == id ? { ...q, answer } : q)])
    }
    const correctas = () => state.filter((q: any) => q.answer == q.correct).length
    if (!state) {
        return <div>Loading...</div>
    }
    const modoHidden = false;
    return (
        <article className="prose lg:prose-xl">
            {/* {JSON.stringify(state)} */}
            <h1>{params.name} quizz, {state.length} preguntas</h1>
            <h3>{auth.currentUser?.email}</h3>
            {
                state.map((q: any, indice: number) =>
                    <div key={indice}>
                        <h2>Question {indice + 1}</h2>
                        {q.answer && !modoHidden ? q.answer == q.correct ? <div className='text-green-500'>Correct</div> : <div className='text-red-500'>Incorrect</div> : null}
                        {q.question.split('\n').filter((i: any) => !i.substring(0).startsWith("ANSWER")).map((line: any, index: number) => {
                            return <div className="" key={index}>
                                {line.substring(1, 2) == '.' ? <input name={"" + indice} className='mr-3' type="radio" onClick={() => updateState(indice, `ANSWER: ${line.substring(0, 1)}`)}></input> : null}
                                {line}
                            </div>
                        })}
                    </div>
                )
            }
            <button className='text-md border rounded-lg p-2  bg-indigo-200 hover:bg-indigo-400'>ENVIAR</button>
            {!modoHidden && <div>Respuesas correctas : {correctas()}</div>}
        </article>
    )
}