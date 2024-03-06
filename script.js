const data = [
  {
    id: 1,
    title: "Bok 1",
    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    readCount: 10,
  },
  {
    id: 2,
    title: "Bok 2",
    body: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
    readCount: 300,
  },
  {
    id: 3,
    title: "Bok 3",
    body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
    readCount: 80,
  },
  {
    id: 4,
    title: "Bok 4",
    body: "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    readCount: 200,
  },
  {
    id: 5,
    title: "Bok 5",
    body: "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
    readCount: 109,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();

  const searchBtn = document.getElementById("searchBtn");
  const resetBtn = document.getElementById("resetBtn");
  const filterInput = document.getElementById("filterInput");

  searchBtn.addEventListener("click", function () {
    const filterText = filterInput.value;
    displayBooks(filterText);
  });

  resetBtn.addEventListener("click", function () {
    filterInput.value = "";
    displayBooks();
  });

  filterInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
    }
  });
});

function displayBooks(filter = "") {
  const booksDisplay = document.getElementById("div");
  booksDisplay.innerHTML = "";

  const filteredData = data.filter((book) =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredData.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
    <div id="divv">
              <h3>${book.title}</h3>
              <p>${book.body}</p>
              <p>Lest: ${book.readCount} ganger</p>
              <button onclick="updateBook(${book.id})">Oppdater</button>
              <button onclick="deleteBook(${book.id})">Slett</button>
              </div>
          `;
    booksDisplay.appendChild(bookElement);
  });
}

function deleteBook(id) {
  const bookIndex = data.findIndex((book) => book.id === id);
  if (bookIndex > -1) {
    data.splice(bookIndex, 1);
    displayBooks();
  } else {
    alert("Bok ikke funnet");
  }
}

function updateBook(id) {
  const book = data.find((book) => book.id === id);
  if (book) {
    const newTitle = prompt("Oppdater tittelen for boken:", book.title);
    if (newTitle) {
      book.title = newTitle;
      displayBooks();
    }
  } else {
    alert("Bok ikke funnet");
  }
}
