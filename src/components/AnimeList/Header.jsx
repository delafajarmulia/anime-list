import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return(
        <div className="p-4 pb-2 pt-5 flex justify-between">
            <h1 className="md:text-2xl text-xl font-semibold text-color-accent">{title}</h1>
            {
                linkHref && linkTitle ? 
                <Link
                    href={linkHref}
                    className="md:text-base text-sm md:pt-0.5 pt-1 underline hover:text-color-accent text-color-primary tansition-all">
                        {linkTitle}
                </Link>
                : null
            }
        </div>
    )
}

export default Header