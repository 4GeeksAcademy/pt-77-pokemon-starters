import React, { useState } from "react";
import Card from "./Card";

const PokemonPicker = () => {
    const [selected, setSelected] = useState("Charmander")
    const [hidden, setHidden] = useState(true)

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center ">
                <div onClick={() => setSelected("Charmander")}>
                    <Card glow={selected == "Charmander" ? true : false} title="Charmander" img="https://static.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest/scale-to-width-down/200?cb=20130714191911" />
                </div>
                <div onClick={() => setSelected("Bulbasaur")}>
                    <Card glow={selected == "Bulbasaur" ? true : false} title="Bulbasaur" img="https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" />
                </div>
                <div onClick={() => setSelected("Squitle")}>
                    <Card glow={selected == "Squitle" ? true : false} title="Squitle" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2jf81oqFiMNS1xuIJUg6ax04-CMv3IesEQ&s" />
                </div>
            </div>
            <button className="btn btn-warning mt-3" onClick={() => setHidden(!hidden)}>All the other pokemon are taken</button>
            <div className={hidden == true ? "hidden" : "d-flex justify-content-center my-5"} onClick={() => setSelected("Pikachu")}>
                <Card glow={selected == "Pikachu" ? true : false} title="Pikachu" img="https://i.pinimg.com/736x/ab/92/0f/ab920f503c6ea441e15c2536487669d7.jpg" />
            </div>
        </div>
    );
};
// () => setHidden(!hidden)
// !true <false
// !false <- true

export default PokemonPicker;