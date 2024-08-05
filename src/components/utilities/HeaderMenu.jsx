const HeaderMenu = ({title}) => {
    return(
        <div>
            <div className="p-8">
                <h3 className="md:text-3xl text-2xl text-center text-color-primary">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default HeaderMenu