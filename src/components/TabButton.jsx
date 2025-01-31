// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>; // children is a special prop that contains the content between the opening and closing tags of the component
// }

export default function TabButton({children,onSelect,isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}