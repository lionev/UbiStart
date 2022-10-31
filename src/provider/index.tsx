import React, { createContext, useMemo } from "react";
import Axios, { AxiosInstance } from 'axios'

export const ApiContext = createContext({} as AxiosInstance)

type ApiProviderProps = {
  children: React.ReactNode;
}

export function ApiProvider({children}: ApiProviderProps) {
  
  const api = useMemo(() => Axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
  }),[])

  return (
    <ApiContext.Provider children={children} value={api} />
  )
}