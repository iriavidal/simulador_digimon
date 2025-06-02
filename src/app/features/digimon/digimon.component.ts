import { Component } from '@angular/core';
import { CartasService } from '../../core/services/cartas.service';

@Component({
  selector: 'app-digimon',
  standalone: false,
  templateUrl: './digimon.component.html',
  styleUrl: './digimon.component.css',
})
export class DigimonComponent {
  cajaCompleta: any[] = [];
  sobresAbiertos: any[][] = [];
  sobresR: any[] = [];
  cartasEspeciales: any[] = [];

  constructor(private cartasService: CartasService) {}

  ngOnInit(): void {
    this.cartasService.getAllCartas().subscribe({
      next: (data) => {
        //console.log('Datos obtenidos', data);

        const commons = data.filter(
          (carta: any) => carta.rarity === 'C' && carta.alternative === false
        );
        const uncommons = data.filter(
          (carta: any) => carta.rarity === 'U' && carta.alternative === false
        );
        const rares = data.filter(
          (carta: any) => carta.rarity === 'R' && carta.alternative === false
        );
        const superares = data.filter(
          (carta: any) => carta.rarity === 'SR' && carta.alternative === false
        );
        const sec_alt = data.filter(
          (carta: any) => carta.rarity === 'SEC' || carta.alternative === true
        );

        console.log('-----------------------------');
        console.log('Cartas en la bt:');
        console.log('Commons', commons.length);
        console.log('Uncommons', uncommons.length);
        console.log('Rares', rares.length);
        console.log('Superares', superares.length);
        console.log('SEC Y ALT', sec_alt.length);
        console.log('-----------------------------');

        // Obtener un número de cartas aleatorias de un array
        const getRandom = (array: any[], count: number): any[] => {
          const result = [];
          for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * array.length);
            result.push(array[randomIndex]);
          }
          return result;
        };

        // Obtener un número de cartas aleatorias de un array, donde no se pueden repetir cartas
        const getRandomUnique = (array: any[], count: number): any[] => {
          const copy = [...array];
          const result = [];

          for (let i = 0; i < count && copy.length > 0; i++) {
            const index = Math.floor(Math.random() * copy.length);
            result.push(copy.splice(index, 1)[0]);
          }

          return result;
        };

        this.sobresR = getRandom(rares, 24);

        this.cartasEspeciales = [
          ...getRandomUnique(rares, 15),
          ...getRandomUnique(superares, 7),
          ...getRandomUnique(sec_alt, 2),
        ];

        // Obtener caja
        this.cajaCompleta = [
          ...commons,
          ...commons,
          ...commons,
          ...commons,
          ...getRandomUnique(commons, 4),
          ...uncommons,
          ...uncommons,
          ...uncommons,
          ...this.sobresR,
          ...this.cartasEspeciales,
        ];

        // C -> 168
        // U -> 72
        // R -> 39
        // SR -> 7
        // SEC/ALT -> 2

        // Barajamos el array de la caja para repartir las cartas en los sobres de forma aleatoria
        this.cajaCompleta = this.shuffleArray(this.cajaCompleta);

        console.log('Caja preparada:');
        console.log('Total de cartas ->', this.cajaCompleta.length);
        console.log(
          `Cantidad C: ${
            this.cajaCompleta.filter((carta: any) => carta.rarity === 'C')
              .length
          }`
        );
        console.log(
          `Cantidad U: ${
            this.cajaCompleta.filter((carta: any) => carta.rarity === 'U')
              .length
          }`
        );
        console.log(`Cantidad de R normales: ${this.sobresR.length}`);
        console.log(
          `Cantidad de especiales y Rs restantes: ${this.cartasEspeciales.length}`
        );
        console.log(
          '- R:',
          this.cartasEspeciales.filter(
            (carta: any) => carta.rarity === 'R' && carta.alternative === false
          ).length
        );
        console.log(
          '- SR:',
          this.cartasEspeciales.filter(
            (carta: any) => carta.rarity === 'SR' && carta.alternative === false
          ).length
        );
        console.log(
          '- SEC/ALT:',
          this.cartasEspeciales.filter(
            (carta: any) => carta.rarity === 'SEC' || carta.alternative === true
          ).length
        );
        console.table(
          this.cartasEspeciales.filter(
            (carta: any) => carta.rarity === 'SEC' || carta.alternative === true
          )
        );
        console.log('-------------------------------------');
      },
      error: (err) => console.error(err),
    });
  }

  /* abrirSobre(): void {
    if (this.sobresAbiertos.length >= 24) {
      console.log('Ya se han abierto los 24 sobres.');
      return;
    }

    const getAndRemoveRandom = (array: any[], count: number): any[] => {
      const result = [];
      for (let i = 0; i < count && array.length > 0; i++) {
        const index = Math.floor(Math.random() * array.length);
        result.push(array.splice(index, 1)[0]);
      }
      return result;
    };

    const getFromCaja = (rarity: string, cantidad: number): any[] => {
      const seleccionadas: any[] = [];
      for (let i = 0; i < cantidad; i++) {
        const index = this.cajaCompleta.findIndex(
          (carta) => carta.rarity === rarity
        );
        if (index !== -1) {
          const carta = this.cajaCompleta.splice(index, 1)[0];
          const repetida = seleccionadas.findIndex(
            (cart) =>
              cart.id === carta.id && cart.alternative === carta.alternative
          );

          if (repetida !== -1) {
            console.log('Repetida:', repetida);
          }

          seleccionadas.push(carta);
        }
      }
      //console.log(this.cajaCompleta);

      return seleccionadas;
    };

    const sobre: any[] = [];

    sobre.push(...getFromCaja('C', 7));
    sobre.push(...getFromCaja('U', 3));
    sobre.push(...getFromCaja('R', 1));

    const especiales = this.cajaCompleta.filter(
      (carta) =>
        carta.rarity === 'R' || carta.rarity === 'SR' || carta.rarity === 'SEC'
    );

    //console.log(especiales);

    const especial = getAndRemoveRandom(especiales, 1);
    if (especial.length > 0) {
      const index = this.cajaCompleta.findIndex((c) => c === especial[0]);
      if (index !== -1) {
        this.cajaCompleta.splice(index, 1);
      }
      sobre.push(...especial);
    }

    this.sobresAbiertos.push(sobre);
    console.log(`Sobre ${this.sobresAbiertos.length} abierto`, sobre);
    //console.log(this.cajaCompleta);
    console.log(
      `Cantidad C: ${
        this.cajaCompleta.filter((carta: any) => carta.rarity === 'C').length
      }`
    );
    console.log(
      `Cantidad U: ${
        this.cajaCompleta.filter((carta: any) => carta.rarity === 'U').length
      }`
    );
    console.log(
      `Cantidad R: ${
        this.cajaCompleta.filter((carta: any) => carta.rarity === 'R').length
      }`
    );
    console.log(
      `Cantidad SR: ${
        this.cajaCompleta.filter(
          (carta: any) => carta.rarity === 'SR' && carta.alternative === false
        ).length
      }`
    );
    console.log(
      `Cantidad SEC y ALT: ${
        this.cajaCompleta.filter(
          (carta: any) => carta.rarity === 'SEC' || carta.alternative === true
        ).length
      }`
    );
    console.log('-------------------------------------------------------');
  } */

  // Desordena un array
  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  abrirSobre(): void {
    if (this.sobresAbiertos.length >= 24) {
      console.log('Ya se han abierto los 24 sobres.');
      return;
    }

    const getAndRemoveRandom = (array: any[], count: number, r: any): any[] => {
      const result = [];
      for (let i = 0; i < count && array.length > 0; i++) {
        const index = Math.floor(Math.random() * array.length);
        //console.log(array[index]);
        if (array[index].id === r.id) {
          console.log('repetida');
          i--;
        } else {
          result.push(array.splice(index, 1)[0]);
        }
      }
      return result;
    };

    const getFromCaja = (rarity: string, cantidad: number): any[] => {
      const seleccionadas: any[] = [];
      const cartasUnicas = new Map();

      this.cajaCompleta.forEach((carta) => {
        if (carta.rarity === rarity) {
          const clave = `${carta.id}|${carta.alternative}`;
          if (!cartasUnicas.has(clave)) {
            cartasUnicas.set(clave, carta);
          }
        }
      });

      const cartasParaSeleccionar = Array.from(cartasUnicas.values()).slice(
        0,
        cantidad
      );

      cartasParaSeleccionar.forEach((carta) => {
        const index = this.cajaCompleta.findIndex(
          (c) => c.id === carta.id && c.alternative === carta.alternative
        );
        if (index !== -1) {
          this.cajaCompleta.splice(index, 1);
          seleccionadas.push(carta);
        }
      });

      return seleccionadas;
    };

    const sobre: any[] = [];
    sobre.push(...getFromCaja('C', 7));
    sobre.push(...getFromCaja('U', 3));
    const r = this.sobresR.shift();
    sobre.push(r);
    sobre.push(...getAndRemoveRandom(this.cartasEspeciales, 1, r));

    this.sobresAbiertos.push(sobre);
    console.log(`Sobre ${this.sobresAbiertos.length} abierto`);
    console.table(sobre);

    console.log(
      `Cantidad C: ${
        this.cajaCompleta.filter((carta: any) => carta.rarity === 'C').length
      }`
    );
    console.log(
      `Cantidad U: ${
        this.cajaCompleta.filter((carta: any) => carta.rarity === 'U').length
      }`
    );

    console.table(`Cantidad de R normales: ${this.sobresR.length}`);
    console.table(
      `Cantidad de cartas especiales + Rs normales restante: ${this.cartasEspeciales.length}`
    );

    console.log('-------------------------------------');
  }
}
