// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>; // children is a special prop that contains the content between the opening and closing tags of the component
// }

export default function TabButton({children,onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}