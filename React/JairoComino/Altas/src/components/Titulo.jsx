import React from "react";

const Titulo = () => {
    return (
        <>
            <header class="bg-white p-8">
                <div class="flex items-center justify-center">
                    <div class="mr-8">
                        <img
                            src="/public/imagenes/dgt-logo2.jpg"
                            alt=""
                            class="w-40 h-auto"
                        />
                    </div>
                    <div class="text-center">
                        <h1 class="text-4xl font-bold text-blue-700">NEW </h1>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Titulo;
