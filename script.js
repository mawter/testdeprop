const groupsData = [
  { name: "Social Media", description: "Lorem ipsum dolor sit amet.", image: "file:///C:/Users/kal71/OneDrive/Bureau/DeProp/images/socail%20meddia.png" },
  { name: "Apps and Games", description: "Consectetur adipiscing elit.", image: "file:///C:/Users/kal71/OneDrive/Bureau/DeProp/images/apps%20and%20games.png" },
  { name: "Food", description: "Sed do eiusmod tempor incididunt.", image: "file:///C:/Users/kal71/OneDrive/Bureau/DeProp/images/food.png" },
  { name: "Clothes", description: "Ut labore et dolore magna aliqua.", image: "file:///C:/Users/kal71/OneDrive/Bureau/DeProp/images/clothes.png" },
  { name: "Electronic Stuff", description: "Ut enim ad minim veniam.", image: "file:///C:/Users/kal71/OneDrive/Bureau/DeProp/images/electronixc.png" },
  { name: "Others", description: "Quis nostrud exercitation ullamco.", image: "file:///C:/Users/kal71/OneDrive/Bureau/DeProp/images/others.png" }
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
