import { useContext } from "react";
import { ApiContext } from "../provider";

export function useApi(){
  const context = useContext(ApiContext)
  if (!context){
    throw new Error('Use hook precisa está coberto pelo ApiProvider')
  } return context
}