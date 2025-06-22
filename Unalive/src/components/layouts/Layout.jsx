export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>
        </header>
    )

    const footer = (
        <footer>
            <small>Created by</small>
            <a target="_blank" href="https://www.linkedin.com/in/kirandeep-singh-maan/">
                <p>Kirandeep Singh</p>
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            < main >
                {children}
            </main >
            {footer}
        </>
    )
}