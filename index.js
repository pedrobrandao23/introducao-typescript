"use strict";
const posts = [
    {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
];
function postTreatment(posts) {
    for (let post of posts) {
        // console.log(post.name);
    }
}
;
postTreatment(posts);
// ------------------------------------------------------
class Residencia {
    constructor(tipo, area, comodos, garagem, precom2) {
        this.tipo = tipo,
            this.area = area,
            this.comodos = comodos;
        this.garagem = garagem;
        this.precom2 = precom2;
    }
    get preco() {
        return this.area * this.precom2;
    }
}
const casaUm = new Residencia("casa térrea", 60, 5, true, 15000);
console.log(casaUm.preco);
console.log(casaUm);
// ------------------------------------------------------
class Apartamento extends Residencia {
    constructor(tipo, area, comodos, garagem, precom2, andar) {
        super(tipo, area, comodos, garagem, precom2);
        this.andar = andar;
    }
}
const apartamentoUm = new Apartamento("apartamento", 45, 4, false, 11000, 5);
console.log(apartamentoUm);
console.log(apartamentoUm.preco);
