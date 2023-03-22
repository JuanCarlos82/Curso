import { Item } from "./Item";
export function Lista(props){
    const lst = props.items;
    return (
        <ul>
            {
                lst.map((it, idx) =>
                 (<Item key={idx} valor={it}/>))
            }
        </ul>
    );
}
