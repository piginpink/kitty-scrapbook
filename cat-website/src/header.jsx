export default function Header() {
    return (
        <div className="topnav">
            <nav>
                <ul>
                    <CustomLink href="/">Home</CustomLink>
                    <CustomLink href="/Toby">Toby</CustomLink>
                    <CustomLink href="/Lucy">Lucy</CustomLink>
                    <CustomLink href="/Siblings">Their Journey as Siblings!</CustomLink>
                </ul>
            </nav>
        </div>
    )
}
function CustomLink( { href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li>
            <a className={path === href ? "active" : ""} href={href} {...props}>{children}</a>
        </li>
    )
}
