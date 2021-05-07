import React, {Component} from 'react';
import '../css/Card.css';

export default class Card extends Component{

    constructor(props){
        super(props);



        this.criarCard = this.criarCard.bind(this);


    }

    criarCard(pokemon){

        return(

            pokemon.pokemon.sprites ? (
                        
                this.card(pokemon)
                        
                
            ) :(

                null

            )

        )
        

    }

    card(pokemon){

        return(

            <div>

                <h1> Nome: {pokemon.pokemon.name} </h1>

                <img src={pokemon.pokemon.sprites.front_default} className="Pokemon-imagem"></img>
            
                <h2> Tipo: {pokemon.pokemon.types.map(item => ' ' + item.type.name).toString()} </h2>
            
                <h2> Peso: {pokemon.pokemon.weight}  </h2>
            
                <h2> Altura: {pokemon.pokemon.height}  </h2>

            </div>

        )

    }


    render(){

        const pokemon = this.props.pokemon;

        let pokeName = pokemon.pokemon.name;

        
        return(


            <div>
                {this.criarCard(pokemon)}


            </div>


        )


    }
    


}