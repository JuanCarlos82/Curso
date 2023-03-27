import { useContext } from "react";
import { ClienteContexto } from "./ClienteContexto";

export const useCliente = ()=>{
    return useContext(ClienteContexto);
}