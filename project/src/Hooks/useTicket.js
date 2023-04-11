import { useContext } from "react";
import { TicketContexto } from "./TicketContexto";

export const useTicket = ()=>{
    return useContext(TicketContexto);
}