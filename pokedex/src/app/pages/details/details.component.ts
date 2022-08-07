import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

//Services
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGerPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGerPokemons(`${this.urlName}/${id}`);

    // Ele vai faz as duas buscas e só irá retornar 
    // o valor quando terminar as duas.
    return forkJoin([pokemon, name]).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
