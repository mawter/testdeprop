const groupsData = [
  { name: "Social Media", image: "https://i.ibb.co/N7LH737/socail-meddia.png" },
  { name: "Apps and Games", image: "https://i.ibb.co/gMsFDvd/apps-and-games.png" },
  { name: "Food", image: "https://i.ibb.co/cyxYVgL/food.png" },
  { name: "Clothes", image: "https://i.ibb.co/rQcRjRx/clothes.png" },
  { name: "Electronic Stuff", image: "https://i.ibb.co/wN1v5bv/electronixc.png" },
  { name: "Others", image: "https://i.ibb.co/6yXj52c/others.png" }
];

document.addEventListener("DOMContentLoaded", function() {
  const groupList = document.getElementById("groups");

  groupsData.slice(0, 6).forEach(function(group) {
    const div = document.createElement("div");
    div.classList.add("group-card");

    const groupImage = document.createElement("div");
    groupImage.classList.add("group-image");

    const img = document.createElement("img");
    img.src = group.image;
    img.alt = group.name;

    const h3 = document.createElement("h3");
    h3.textContent = group.name;

    const p = document.createElement("p");
    p.textContent = group.description;

    const button = document.createElement("button");
    button.textContent = "Explore";

    groupImage.appendChild(img);
    div.appendChild(groupImage);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);

    groupList.appendChild(div);


  });
});
