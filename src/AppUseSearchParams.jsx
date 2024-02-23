import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.get('type'))
    // console.log(searchParams.toString())
    const typeFilter = searchParams.get('type')

    const displayedCharacters = typeFilter
        ? swCharacters.filter(char=>char.type.toLocaleLowerCase() === typeFilter)
        : swCharacters

    const charEls = displayedCharacters
        .map(char => (
            <div key={char.name}>
                <h3
                style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
                >
                Name: {char.name}
                </h3>
                <p>Type: {char.type}</p>
                <hr />
            </div>
        ))

    // vannilla f()
    function genNewSearchParamStr(key, value){
        const sp = new URLSearchParams(searchParams)
        if(value === null){
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        return `?${sp.toString()}`;
    }

    function handleFilterChange(key, value){
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <main>
        <h2>Home</h2>
        {/* hard coded search params */}
        <div>
            <Link to={genNewSearchParamStr('type', 'jedi')}>Jedi</Link>  
            <Link to={genNewSearchParamStr('type', 'sith')}>Sith</Link>
            <Link to={genNewSearchParamStr('type', null)}>Clear</Link>
        </div>
        <div>
            <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
            <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
            <button onClick={() => handleFilterChange("type", null)}>Clear</button>
        </div>
        {charEls}
        </main>
    );
}


export default function AppUseSearchParams() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/characters" element={<HomePage />} />
        </Routes>
        </BrowserRouter>
    )
}

