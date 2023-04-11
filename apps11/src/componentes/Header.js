import { useSelector } from "react-redux";
import {Divider, List, ListItem, ListItemText} from '@mui/material'

export function Header(){
    const usuario = useSelector((estado)=> estado.usuario);

    return (
        <List component="nav" aria-label="mailbox folders">
            <ListItem>
                <ListItemText primary={usuario.nombre}/>
            </ListItem>
            <Divider/>
            <ListItem button divider>
                <ListItemText primary={usuario.login}/>
            </ListItem>
            <ListItem button>
                <ListItemText primary={usuario.email}/>
            </ListItem>
        </List>
    );
}