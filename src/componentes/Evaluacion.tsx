import { useForm } from 'react-hook-form';
import { db } from '../main'
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Message from './Message';

export default function Evaluacion() {
    const auth = getAuth();
    const [grabado, setGrabado] = useState<Boolean>(false)
    const [err, setErr] = useState<Boolean>(false)
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm(

    );

    useEffect(() => {
        const docRef = doc(db, "students", "" + auth.currentUser?.email);

        const docSnap = async () => {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log(docSnap.data().profile)
                const profile = docSnap.data().profile
                Object.keys(profile).forEach(i => {
                    setValue(i, profile[i])
                })

            }
        }
        docSnap();


    }, []);
    const onSubmit = async (data: any) => {
        const docRef = doc(db, "students", "" + auth.currentUser?.email);
        const evaluacion = { profile: data }
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            await updateDoc(docRef, evaluacion);
            setGrabado(true);
        }
        else {
            try {
                await setDoc(docRef, evaluacion);
                setGrabado(true)
            } catch (e) {
                setErr(true)
                console.error("Error adding document: ", e);
            }
        }
    }
    return <div>
        <Message open={grabado} setOpen={setGrabado} title="Grabación correcta" description="" ifError={false} ></Message>
        <Message open={err} setOpen={setErr} title="Grabación incorrecta" description="" ifError={true} ></Message>

        <h1 className="text-3xl text-gray-700 ">Formulario de Evaluación grabado {grabado}</h1>
        <h3>{auth.currentUser?.email}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-8">
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input {...register('hasProgramado')} type="checkbox" />
                                    <span className="ml-2">Has programado en algún lenguaje</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input {...register('hasWeb')} type="checkbox" />
                                    <span className="ml-2">Has desarrollado alguna página web</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input {...register('hasCurso')} type="checkbox" />
                                    <span className="ml-2">Has hecho algún curso de informática anteriormente</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input {...register('hasSql')} type="checkbox" />
                                    <span className="ml-2">Conoces el lenguaje de base de datos SQL</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <label className="block">
                        <span className="text-gray-700">Otros datos relacionados con vuestro conocimiento sobre programación</span>
                        <textarea  {...register('otrosDatos')} className="mt-1 block w-full" rows={3}></textarea>
                    </label>
                </div>
                <div className="block">
                    <button
                        type="submit"
                        className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        </form>
    </div>
}