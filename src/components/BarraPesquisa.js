import React, {Component} from 'react'

export default class BarraPesquisa extends Component{

    constructor(props){
        super(props);

        this.state = {
            pokemon_nome: "",
            pokemon: "",
        }

        this.requisicaoSite = this.requisicaoSite.bind(this);

    }
  
    requisicaoSite(){

        const url = 'https://pokeapi.co/api/v2/pokemon/';

        let pokeNome = this.state.pokemon_nome.toLowerCase();
        
        fetch(url+pokeNome)
            .then(res=>{
                return res.json()
            })
            .then(json=>{
                let pokemon = json;
                this.setState({pokemon})
            })
            .catch(error => {
                if (typeof error.json == "function") {
                    error.json().then(jsonError => {
                        console.log("Json ERROR FROM API");
                        console.log(jsonError);
                    }).catch (genericError => {
                        console.log("GENERIC ERROR FROM API");
                        console.log(error.statusText);
                    });
                }
                else{
                    alert("POKEMON NÃO ENCONTRADO");
                    console.log(error);
                }
            })
        
        
        return this.state.pokemon;

        
    }

    


    render(){
        return(

            <div>
                <h2> Insira o nome do pokemon e clique em pesquisar </h2>
                <input type="text" placeholder="Insira o nome do pokemon" onChange={(event)=>{this.setState({pokemon_nome:event.target.value})}}></input>
                <input type="button" value="Pesquisar" onClick={this.requisicaoSite}></input>

                <div>
                    {this.props.render(this.state)}
                </div>
            </div>

        )
    }
}