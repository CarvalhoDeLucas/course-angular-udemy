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

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGerPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGerPokemons(`${this.urlName}/${id}`);

    // Ele vai faz as duas buscas e só irá retornar 
    // o valor quando terminar as duas.
    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    );
  }

}
