
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-escolha-calculo',
  templateUrl: './escolha-calculo.component.html',
  styleUrls: ['./escolha-calculo.component.css']
})
export class EscolhaCalculoComponent implements OnInit {

  showMeAritimetica: boolean = false;
  showMeArea: boolean = false;
  showMeReajuste: boolean = false;
  showMeIndice: boolean = false;
  showMeVogal: boolean = false;
  showMeInverter: boolean = false;
  showMeFatorial: boolean = false;



  n1: number = 0
  n2: number = 0
  n3: number = 0

  palavra: string = ""
  novaPalavra: string = ""

  meuArray = [2, 3, 5, 20, 10]
  totalMedia: number = 0
  area: number = 0
  novoSalario: number = 0



  constructor() { }

  ngOnInit(): void {
  }
  toogleTag() {
    this.showMeAritimetica = !this.showMeAritimetica;
    this.showMeArea = false;
    this.showMeReajuste = false;
    this.showMeIndice = false;
    this.showMeVogal = false;
    this.showMeInverter = false;
    this.showMeFatorial = false;

  }

  toogleTagArea() {
    this.showMeArea = !this.showMeArea;
    this.showMeAritimetica = false;
    this.showMeReajuste = false;
    this.showMeIndice = false;
    this.showMeVogal = false;
    this.showMeInverter = false;
    this.showMeFatorial = false;
  }

  toogleTagReajuste() {
    this.showMeReajuste = !this.showMeReajuste;
    this.showMeArea = false;
    this.showMeAritimetica = false;
    this.showMeIndice = false;
    this.showMeVogal = false;
    this.showMeInverter = false;
    this.showMeFatorial = false;
  }

  toogleTagIndice() {
    this.showMeIndice = !this.showMeIndice;
    this.showMeReajuste = false;
    this.showMeArea = false;
    this.showMeAritimetica = false;
    this.showMeVogal = false;
    this.showMeInverter = false;
    this.showMeFatorial = false;
  }

  toogleTagVogal() {
    this.showMeVogal = !this.showMeVogal;
    this.showMeReajuste = false;
    this.showMeArea = false;
    this.showMeAritimetica = false;
    this.showMeIndice = false;
    this.showMeInverter = false;
    this.showMeFatorial = false;
  }

  toogleTagInverter() {
    this.showMeInverter = !this.showMeInverter;
    this.showMeReajuste = false;
    this.showMeArea = false;
    this.showMeAritimetica = false;
    this.showMeIndice = false;
    this.showMeVogal = false;
    this.showMeFatorial = false;
  }

  toogleTagFatorial() {
    this.showMeFatorial = !this.showMeFatorial;
    this.showMeReajuste = false;
    this.showMeArea = false;
    this.showMeAritimetica = false;
    this.showMeIndice = false;
    this.showMeVogal = false;
    this.showMeInverter = false;

  }

  calculoMedia() {
    this.totalMedia = (this.n1 + this.n2 + this.n3) / 3
    alert('Média igual a : ' + this.totalMedia.toFixed(2))
    this.n1 = 0
    this.n2 = 0
    this.n3 = 0
    this.totalMedia = 0
  }

  calculoArea() {
    this.area = (this.n1 * this.n2);
    alert('Área igual a : ' + this.area.toFixed(2) + 'cm')
    this.n1 = 0
    this.n2 = 0
    this.area = 0
  }

  calculaReajuste() {
    this.novoSalario = (this.n1) + ((this.n2 / 100) * this.n1);
    alert('Novo salário é igual a : ' + 'R$' + this.novoSalario.toFixed(2) + ' Reais')
    this.n1 = 0
    this.n2 = 0
    this.novoSalario = 0
  }

  acharIndice() {



    var maior = 0;
    var menor = 0

    let array = this.meuArray;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[maior]) {
        maior = i;

      }

      if (array[i] < array[menor]) {
        menor = i;
      }
    }
    alert('Índice de maior valor na posição : ' + maior)
    alert('Índice de menor valor na posição : ' + menor)

  }

  acharVogal() {

    contarVogais(this.palavra)

    function contarVogais(texto: string) {

      let instancias = texto.match(/[aeiou]/gi);


      if (instancias) {
        alert('Quantidade de vogais : ' + instancias.length)
        return instancias.length
      } else {
        return 0
      }


    }

    this.palavra = "";

  }

  inverterPalavra() {

    this.novaPalavra = this.palavra.split('').reverse().join('');
    alert('Palavra ao contrário : ' + this.novaPalavra);

    this.palavra = "";

  }

  fatorar() {

    fatorial(this.n1)

    function fatorial(n: number) {




      var resultado = n;

      if (n == 0) {
        alert('Fatorial de ' + n + ' = ' + '1')
      }
      else if (n >= 2) {

        for (let i = 1; i < n; i++) {
          resultado = resultado * i;
        }

        alert('Fatorial de ' + n + ' = ' + resultado.toLocaleString('pt-BR'))

      }

      else if (n > 0 && n < 2) {
        for (let i = 1; i < n; i++) {
          resultado = (i * resultado) - (n - 1);
        }
        alert('Fatorial de ' + n + ' = ' + resultado);


      }









    }
    this.n1 = 0;



  }


}