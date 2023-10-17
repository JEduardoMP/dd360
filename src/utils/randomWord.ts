export const randomWord = (listaDePalabras: string[]) => {
  const indiceAleatorio = Math.floor(Math.random() * listaDePalabras.length);
  return listaDePalabras[indiceAleatorio];
}
