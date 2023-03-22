export function Lista({items}){
    return (
        <ul>
            {
                items.map((it) => (
                    <li>
                        {it.Nombre}
                    </li>
                ))
            }
        </ul>
    );
}
