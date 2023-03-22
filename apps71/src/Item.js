export function Item(props){
    const it = props.valor;
    return (
        <li>
            {it.Nombre} {it.Apellido}
        </li>
    );
}
