export default function ({title, children,...props}) { //...props is a rest parameter that collects all the remaining props in an object(id,className,style,etc)
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}