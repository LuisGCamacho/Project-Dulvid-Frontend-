//Esta función crea una pausa asíncrona durante una cantidad de milisegundos.
export const sleep = (ms: number = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
