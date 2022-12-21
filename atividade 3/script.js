    

    let videos = [];

    function inicializar() {
    videos = JSON.parse(localStorage.getItem('videos') || '[]');
    exibirVideos();
}

    function salvarVideo(event) {
        event.preventDefault();

        let id = document.querySelector('#idVideo').value;
        let titulo = document.querySelector('#titulo').value;
        let link = document.querySelector('#link').value;
        let desc = document.querySelector('#desc').value;

        if (id) {
            let index = videos.findIndex(f => f.id == id);
            videos[index].titulo = titulo;
            videos[index].link = link;
            videos[index].desc = desc;
        } else{
        let video = {
            id: Math.random().toString(36).substring(2),
            titulo: titulo,
            link: link,
            desc: desc
        };

        videos.push(video);
        }   

        localStorage.setItem('videos', JSON.stringify(videos));    

        console.log(videos);

        exibirVideos();

        id = document.querySelector('#idVideo').value = null;
        titulo = document.querySelector('#titulo').value = null;
        link = document.querySelector('#link').value = null;
        desc = document.querySelector('#desc').value = null;
    }


    function exibirVideos() {
        let template = '';
        for (let i = 0; i < videos.length; i++){
            template = template + `<div class="video-container">`;
            template = template + `<p class="text1">${videos[i].titulo}</p>`;
            template = template + `<p class="text2">${videos[i].desc}</p>`;
            template = template + `<iframe widht = "350px" height = "200px" src="https://www.youtube.com/embed/${videos[i].link}"></iframe>`;
            template = template + `<div class="button-container">` ;  
            template = template + `<button class="material-icons" onclick="editarVideo('${videos[i].id}')">edit</button>`; 
            template = template + `<button class="material-icons" onclick="excluirVideo('${videos[i].id}')">delete</button>`;   
            template = template + `<button class="fa fa-check" onclick="trocarIcon(this)"></button>`;
            template = template + '</div>';
            template = template + '</div>';

        }
        

        document.querySelector('#listaDeVideos').innerHTML = template;
    }

    function excluirVideo(id) {
        if (confirm('Deseja Excluir?')){
        console.log('id', id);
        let index = videos.findIndex(f => f.id == id);
        videos.splice(index, 1);
        localStorage.setItem('videos', JSON.stringify(videos));
        exibirVideos();
        }
    }

    function editarVideo(id) {
        let index = videos.findIndex(f => f.id == id);
        document.querySelector('#idVideo').value = videos[index].id;
        document.querySelector('#titulo').value = videos[index].titulo;
        document.querySelector('#link').value = videos[index].link;
    }

    function trocarIcon(x) {
        x.classList.toggle("fa-list");
      }

