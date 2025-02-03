// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>; // children is a special prop that contains the content between the opening and closing tags of the component
// }

export default function TabButton({children,isSelected,...props}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}