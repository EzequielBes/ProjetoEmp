import React, { useContext, useState } from "react";
import { createContext } from "react";

interface IMovie {
  nome: string;
  genero: string;
}

interface IMovieContex {
  setMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
  movie?: IMovie;
}

const contextMovie = createContext({} as IMovieContex);

export function MovieContext({ children }: any) {
  // ao envolver um componente com isso todos os filhos deste componente teram  acesso aos dados dese componente
  const [movie, setMovie] = useState<IMovie>();
  return <contextMovie.Provider value={{ setMovie, movie }}>{children}</contextMovie.Provider>
};

export const useMovieContextHook = () => {
  // isso é um hook
  const context = useContext(contextMovie)
  return context;
}