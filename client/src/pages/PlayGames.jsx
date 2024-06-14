function PlayGames() {
    return (
        <div className="playGamesBody">
            <header>
                <h1>App Name</h1>
                <h2>Welcome to East to West/ Sea to Shining Sea/ Cruise. The interactive family game for road trips, car trips and interactive learning about the country and states you live in!</h2>
                <nav>
                    <h2><a className='toHomeLink' href="/">Cover</a></h2>
                </nav>
            </header>
            <body>
                <h1>Would you like to:</h1>
                    <h2><a>Play On Your Own</a></h2>
                    <h2><a>Play Against The Computer</a></h2>
                    <h2><a>Play a Family Team Game</a></h2>
                    <h2><a>Play Against Others in Your Car</a></h2>
                    <h2><a>Play With Others in Your Car</a></h2>
                    <h2><a>Play On a Random Team</a></h2>
                    <h2><a>Play Against Anyone in the USA</a></h2>
            </body>
        </div>
    );
}

export default PlayGames;