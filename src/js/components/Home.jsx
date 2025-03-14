import React from "react";
import PokemonPicker from "./PokemonPicker";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <PokemonPicker />
		</div>
	);
};

export default Home;