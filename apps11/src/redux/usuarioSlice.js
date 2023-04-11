import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    nombre : null,
    login : null,
    email : null
}

export const usuarioSlice = createSlice({
    name : 'usuario',
    initialState,
    reducers : {
        agregarUsuario: (estado, accion)=>{
            const {nombre, login, email} = accion.payload
            estado.nombre = nombre;
            estado.login = login;
            estado.email = email;
        },
        cambiarNombre : (estado, accion)=>{
            estado.nombre = accion.payload;
        },
    }
});

export const {agregarUsuario, cambiarNombre} = usuarioSlice.actions;
export default usuarioSlice.reducer;