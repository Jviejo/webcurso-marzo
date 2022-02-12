export default function Evaluacion() {
    return <div>
        <h1 className="text-3xl text-gray-700 ">Formulario de Evaluación</h1>
        <form action="">
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-8">
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" checked={false} />
                                    <span className="ml-2">Has programado en algún lenguaje</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" checked={false} />
                                    <span className="ml-2">Has desarrollado alguna página web</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" checked={false} />
                                    <span className="ml-2">Has hecho algún curso de informática anteriormente</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" checked={false} />
                                    <span className="ml-2">Conoces el lenguaje de base de datos SQL</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <label className="block">
                        <span className="text-gray-700">Otros datos relacionados con vuestro conocimiento sobre programación</span>
                        <textarea className="mt-1 block w-full" rows={3}></textarea>
                    </label>
                </div>
                <div className="block">
                    <button
                        type="button"
                        className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        </form>
    </div>
}