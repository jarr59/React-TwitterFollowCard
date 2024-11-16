// eslint-disable-next-line react/prop-types
export function TwitterFollowCard( {children, userName} ) {
    const imageSrc = `https://unavatar.io/${userName}`;

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img alt="Imagen de midudev"
                     src={imageSrc}
                     className="tw-followCard-avatar"/>
                <div className="tw-followCard-info">
                    <strong>
                        {children}
                    </strong>

                    <span className="tw-followCard-infoUserName">
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>

        </article>
    );
}