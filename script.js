
//App config

const API = "https://api.lyrics.ovh/";

const search = document.querySelector(".search");

const form = document.querySelector(".form");

const content = document.querySelector(".content");

// Listen form submits

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("you must ");
    return;
  }

  searchSong(searchTerm);
});

let data = {}

async function searchSong(search) {
  const request = await fetch(`${API}/suggest/${search}`);
  const response = await request.json();
  data = response.data;
  let a = JSON.stringify(data);
  console.log('2'+a)
  showSong(data);
  return data
}

function showSong(songs) {
  content.innerHTML = `
        <ul class="songs">
            ${songs
              .map((song) => {
                return `<li class="song">
                    <span>${song.title} by ${song.artist.name}</span>
                    <button id="show">Show Lyric</button>
                    </li>`;
              })
              .join("")}
        </ul>
    `;

    setTimeout(esperar, 1000)

}

function mostrar () {
    console.log('aca estoy en data' + JSON.stringify(data))
}

function esperar () {
    const picture = document.querySelector("#show")
    console.log(picture)

    picture.addEventListener("click", mostrar)
}
    


