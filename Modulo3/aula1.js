
class Elemento {
    texto;
    // link;
    background_image;
    nota;
    genero;

    constructor(
        texto,
        // link,
        background_image,
        nota,
        genero
    ) {
        this.texto = texto;
        // this.link = link;
        this.background_image = background_image;
        this.nota = nota;
        this.genero = genero;
        this.element = document.createElement("div");
    }


    renderizar() {
        const container = document.getElementById('container');
        const ancor = document.createElement("h3");
        const div_nota = document.createElement('div');
        const grade = document.createElement("h2");
        const gender = document.createElement("h4");
        // ancor.setAttribute('href',this.link);
        ancor.setAttribute('id',this.texto)
        ancor.innerText = this.texto;
        this.element.append(ancor);
        grade.innerText = this.nota;
        div_nota.append(grade);
        div_nota.classList.add('nota');

        this.element.append(div_nota);
        gender.innerText = this.genero;
        this.element.append(gender);

        container.append(this.element);
        this.estilizar();
        // console.log(this.background_image);
    }

    estilizar(){
        this.element.classList.add('dashes');
        this.element.style.backgroundImage = `url(${this.background_image})`;
        // this.element.style.backgroundRepeat = 'no-repeat';
        // this.element.style.backgroundAttachment = 'fixed';
        this.element.style.backgroundSize = 'cover';
        this.element.style.backgroundPosition = 'center';    
    }

}


// const Xbox = new Elemento('Xbox','./dash.html');
// Xbox.renderizar();
// const Nintendo = new Elemento('Nintendo','./dash.html');
// Nintendo.renderizar();


const apiKey = 'a77441e5704f4d97a9f64e48d3298197';

fetch(`https://rawg.io/api/users/orels1/games?token&key=${apiKey}`)
  .then(res => res.json())
//   .then(data => data.results.map(gameData => console.log(gameData)))
  .catch(error => console.error('Error:', error));

const fetchgame = async () => {
    APIResponse = await fetch(`https://rawg.io/api/games?token&key=${apiKey}`);
if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
}
}


const rendergame = async () => { 
    const data = await fetchgame();
    const total_data = data.results;
    // const name = data.results[0].name
    // const background_image = data.results[0].background_image

    // const creation = new Elemento(name,'./dash.html',background_image);
    // creation.renderizar();

    total_data.forEach(element => {
        const creation = new Elemento(element.name,element.background_image,element.metacritic,element.genres[0].name);
    creation.renderizar();
    });
    console.log(total_data)
    // return nome
}

rendergame();

// const button1 = document.getElementById('Portal 2');
// button1.addEventListener("click", function(){opacidade('box1')});

// console.log(rendergame());

// const Xbox = new Elemento('Xbox','./dash.html','https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg');
// const Xbox = new Elemento('Xbox','./dash.html',rendergame());
// Xbox.renderizar();