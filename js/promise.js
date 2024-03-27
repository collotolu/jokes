const category = document.getElementById("randomPart");
const jokesCategories = document.querySelector(".jokes-categories");
const jokesPart = document.getElementById("jokeSection");
console.log(jokesPart);
console.log(jokesCategories);
console.log(category);

const random = document.getElementById("randomSection");
console.log(random);

function jokeSection1() {
  const url1 = "https://api.chucknorris.io/jokes/random";

  const result = fetch(url1)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      random.innerHTML = `<h2>${data.value}</h2>`;
    });
  //   console.log(result);
}
jokeSection1();

function jokeSection2() {
  const url2 = "https://api.chucknorris.io/jokes/categories";

  const list = fetch(url2)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.map((category) => {
        const li = document.createElement("li");
        li.classList.add("category");
        li.textContent = category;
        jokesCategories.append(li);
      });
    });

  category.addEventListener("click", () => {});
}
jokeSection2();

function jokeSection3(category) {
  const url3 = `https://api.chucknorris.io/jokes/random?category=${category}`;

  fetch(url3)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
       jokesPart.textContent = data.value
    });

}
jokeSection3();

jokesCategories.addEventListener("click", (e) => {
  if (e.target.classList.contains("category")) {
    jokeSection3(e.target.textContent);
  }
});
