document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("https://www.boredapi.com/api/activity?participants=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let h3 = document.createElement("h3");
        h3.textContent = `Type : ${data.type}`;
        h3.className = "h3";
        let p = document.createElement("p");
        p.textContent = `${data.activity}`;
        p.className = "paragragh";
        let dataContainer = document.getElementById("data-container");
        dataContainer.innerHTML = "";
        dataContainer.append(h3, p);
      });
  }

  fetchData();

  let nextButton = document.getElementById("btn");
  nextButton.addEventListener("click", () => {
    fetchData();
  });
});
