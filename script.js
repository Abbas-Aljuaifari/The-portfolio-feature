//  Work Projects Data
const projects = [
  {
    main: true,
    name: "Multi-Post Stories",
    image: "./images/Img Placeholder.png",
    image2: "./images/ImgPlaceholder.png",
    image3: "./images/modal.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ["HTML", "CSS", "Bootstrap", "Ruby"],
    demoLink: "https://abbas-aljuaifari.github.io/The-Portfolio/",
    codeLink: "https://github.com/Abbas-Aljuaifari/The-Portfolio",
  },

  {
    main: false,
    name: "Profesional Art Printing Data More",
    image: "./images/Img-Placeholder-2.png",
    image2: "./images/ImgPlaceholder.png",
    image3: "./images/6-2-vector-free-download-png.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    demoLink: "https://abbas-aljuaifari.github.io/The-Portfolio/",
    codeLink: "https://github.com/Abbas-Aljuaifari/The-Portfolio",
  },
  {
    main: false,
    name: "Multi-Post Stories",
    image: "./images/Multipost.png",
    image2: "./images/ImgPlaceholder.png",
    image3: "./images/Img Placeholder.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    demoLink: "https://abbas-aljuaifari.github.io/The-Portfolio/",
    codeLink: "https://github.com/Abbas-Aljuaifari/The-Portfolio",
  },
  {
    main: false,
    name: "Website Portfolio ",
    image: "./images/webportfolio.png",
    image2: "./images/ImgPlaceholder.png",
    image3: "./images/modal.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    demoLink: "https://abbas-aljuaifari.github.io/The-Portfolio/",
    codeLink: "https://github.com/Abbas-Aljuaifari/The-Portfolio",
  },

  {
    main: false,
    name: "Profesional Art Printing Data More",
    image: "./images/Img-Placeholder-2.png",
    image2: "./images/ImgPlaceholder.png",
    image3: "./images/6-2-vector-free-download-png.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    demoLink: "https://abbas-aljuaifari.github.io/The-Portfolio/",
    codeLink: "https://github.com/Abbas-Aljuaifari/The-Portfolio",
  },
  {
    main: false,
    name: "Multi-Post Stories",
    image: "./images/Multipost.png",
    image2: "./images/ImgPlaceholder.png",
    image3: "./images/Img Placeholder.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    demoLink: "https://abbas-aljuaifari.github.io/The-Portfolio/",
    codeLink: "https://github.com/Abbas-Aljuaifari/The-Portfolio",
  },
  {
    main: false,
    name: "Website Portfolio ",
    image: "./images/webportfolio.png",
    image2: "./images/ImgPlaceholder.png",
    image3: "./images/modal.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    demoLink: "https://abbas-aljuaifari.github.io/The-Portfolio/",
    codeLink: "https://github.com/Abbas-Aljuaifari/The-Portfolio",
  },
];

const projectsContainer = document.querySelector("#main-work-card");
const projectCardsContainer = document.querySelector("#card-container");

projects.forEach((project, index) => {
  if (project.main) {
    const tagsList = project.tags
      .map((tag) => `<li class="card-items">${tag}</li>`)
      .join("");

    const imageElement = document.createElement("img");
    imageElement.classList.add("placeholder-image");
    imageElement.src = project.image;
    imageElement.alt = project.image2;

    const workTitlePostDiv = document.createElement("div");
    workTitlePostDiv.classList.add("work-title-post");

    const headingElement = document.createElement("h2");
    headingElement.classList.add("post-heading");
    headingElement.textContent = project.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("post-description");
    descriptionElement.textContent = project.description;

    const tagListElement = document.createElement("ul");
    tagListElement.classList.add("tag-list");
    tagListElement.innerHTML = tagsList;

    const projectButtonLink = document.createElement("a");
    projectButtonLink.classList.add("project-button", "btn");
    projectButtonLink.dataset.index = index;
    projectButtonLink.textContent = "See Project";

    workTitlePostDiv.appendChild(headingElement);
    workTitlePostDiv.appendChild(descriptionElement);
    workTitlePostDiv.appendChild(tagListElement);
    workTitlePostDiv.appendChild(projectButtonLink);

    projectsContainer.appendChild(imageElement);
    projectsContainer.appendChild(workTitlePostDiv);
  } else {
    const tagsList = project.tags
      .map((tag) => `<li class="card-items">${tag}</li>`)
      .join("");

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const infoHolderDiv = document.createElement("div");
    infoHolderDiv.classList.add("info-holder");

    const headingElement = document.createElement("h2");
    headingElement.classList.add("project-heading");
    headingElement.textContent = project.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("card-description");
    descriptionElement.textContent = project.description;

    const tagListElement = document.createElement("ul");
    tagListElement.classList.add("tag-list");
    tagListElement.innerHTML = tagsList;

    const buttonSectionDiv = document.createElement("div");
    buttonSectionDiv.classList.add("button-section");

    const projectButtonLink = document.createElement("a");
    projectButtonLink.id = `cardButton${index}`;
    projectButtonLink.classList.add("flex-center", "card-button", "btn");
    projectButtonLink.dataset.index = index;
    projectButtonLink.textContent = "See Project";

    infoHolderDiv.appendChild(headingElement);
    infoHolderDiv.appendChild(descriptionElement);
    infoHolderDiv.appendChild(tagListElement);

    buttonSectionDiv.appendChild(projectButtonLink);

    projectCard.appendChild(infoHolderDiv);
    projectCard.appendChild(buttonSectionDiv);

    const cardHolder = document.createElement("div");
    cardHolder.classList.add("work-card");
    cardHolder.style.backgroundImage = `url(${project.image})`;
    cardHolder.appendChild(projectCard);

    // Add event listener to change background image on hover
    cardHolder.addEventListener("mouseenter", () => {
      cardHolder.style.backgroundImage = `url(${project.image2})`;
    });
    cardHolder.addEventListener("mouseleave", () => {
      cardHolder.style.backgroundImage = `url(${project.image})`;
    });

    projectCardsContainer.appendChild(cardHolder);
  }
});

//  Deatils Popup window

const popup = document.createElement("div");

function createPopup(project) {
  const popupContainer = document.createElement("div");
  popupContainer.id = "popup-container";
  popupContainer.className = "popup-window";

  const popupHolder = document.createElement("div");
  popupHolder.className = "popup-holder";
  popupContainer.appendChild(popupHolder);

  const closeBtnHolder = document.createElement("div");
  closeBtnHolder.className = "popup-close-btn-holder";
  popupHolder.appendChild(closeBtnHolder);

  const titleXBtn = document.createElement("div");
  titleXBtn.className = "title-xbtn";
  closeBtnHolder.appendChild(titleXBtn);

  const popupHeader = document.createElement("h1");
  popupHeader.id = "popup-header";
  popupHeader.className = "project-heading-pop";
  popupHeader.textContent = project.name;
  titleXBtn.appendChild(popupHeader);

  const xBtnSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  xBtnSvg.id = "x-popup";
  xBtnSvg.className = ".xBtn";
  xBtnSvg.setAttribute("width", "30");
  xBtnSvg.setAttribute("height", "30");
  xBtnSvg.setAttribute("viewBox", "0 0 24 24");
  titleXBtn.appendChild(xBtnSvg);

  const xBtnPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  xBtnPath.setAttribute("fill", "#67798e");
  xBtnPath.setAttribute(
    "d",
    "M12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
  );
  xBtnSvg.appendChild(xBtnPath);

  const popupTagList = document.createElement("ul");
  popupTagList.className = "popup-tag-list";
  closeBtnHolder.appendChild(popupTagList);

  for (const tag of project.tags) {
    const tagItem = document.createElement("li");
    tagItem.className = "tag-items popup-feature";
    tagItem.textContent = tag;
    popupTagList.appendChild(tagItem);
  }

  const popupInfo = document.createElement("div");
  popupInfo.className = "popup-info";
  popupHolder.appendChild(popupInfo);

  const popupImage = document.createElement("img");
  popupImage.id = "popup-image";
  popupImage.className = "popup-image";
  popupImage.src = project.image3;
  popupImage.alt = "post image";
  popupInfo.appendChild(popupImage);

  const popupInfoHolder = document.createElement("div");
  popupInfoHolder.className = "popup-info-holder";
  popupInfo.appendChild(popupInfoHolder);

  const popupDescription = document.createElement("p");
  popupDescription.id = "popup-description";
  popupDescription.className = "popup-description";
  popupDescription.textContent = project.description;
  popupInfoHolder.appendChild(popupDescription);

  const popupDescription1 = document.createElement("p");
  popupDescription1.id = "popup-description1";
  popupDescription1.className = "popup-description desktop-des1";
  popupDescription1.textContent = project.description;
  popupInfoHolder.appendChild(popupDescription1);

  const popupBtnHolder = document.createElement("div");
  popupBtnHolder.className = "popup-btn-holder";
  popupInfoHolder.appendChild(popupBtnHolder);

  const seeLivePopup = document.createElement("a");
  seeLivePopup.id = "seeLivePopup";
  seeLivePopup.className = "popup-btn btn";
  seeLivePopup.href = project.demoLink;
  seeLivePopup.textContent = "See live";
  popupBtnHolder.appendChild(seeLivePopup);

  const seeLiveSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  seeLiveSvg.setAttribute("width", "18");
  seeLiveSvg.setAttribute("height", "18");
  seeLiveSvg.setAttribute("viewBox", "0 0 18 18");
  seeLivePopup.appendChild(seeLiveSvg);

  const seeLivePath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  seeLivePath.setAttribute("fill-rule", "evenodd");
  seeLivePath.setAttribute("clip-rule", "evenodd");
  seeLivePath.setAttribute(
    "d",
    "M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9Z"
  );
  seeLiveSvg.appendChild(seeLivePath);

  const seeSourcePopup = document.createElement("a");
  seeSourcePopup.id = "seeSourcePopup";
  seeSourcePopup.className = "popup-btn btn";
  seeSourcePopup.href = project.codeLink;
  seeSourcePopup.textContent = "See source";
  popupBtnHolder.appendChild(seeSourcePopup);

  const seeSourceSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  seeSourceSvg.setAttribute("width", "18");
  seeSourceSvg.setAttribute("height", "20");
  seeSourceSvg.setAttribute("viewBox", "0 0 18 20");
  seeSourcePopup.appendChild(seeSourceSvg);

  const seeSourcePath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  seeSourcePath.setAttribute(
    "d",
    "M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
  );
  seeSourceSvg.appendChild(seeSourcePath);

  document.body.appendChild(popupContainer);
  const xPopup = document.querySelector(".title-xbtn");
  xPopup.addEventListener("click", () => {
    popupContainer.remove();
  });
}

const buttons = document.querySelectorAll(".card-button, .project-button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const project = projects[index];
    createPopup(project);
  });
});
