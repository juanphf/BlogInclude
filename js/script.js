document.addEventListener("DOMContentLoaded", function () {
    const postContainer = document.getElementById("post-container");
    const addPostForm = document.getElementById("add-post-form");

    addPostForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const titleInput = document.querySelector(".form-input-title");
        const bodyInput = document.querySelector(".form-corpo");
        const imageInput = document.querySelector(".form-input-img");
        const linkInput = document.querySelector(".form-input-link");

        const title = titleInput.value; // Titulo
        const body = bodyInput.value; // Corpo do texto
        const image = imageInput.value; // Imagem
        const link = linkInput.value; // Link do projeto

        if (!title || !body || !image || !link) {
            alert("Preencha todos os campos do formulário.");
            return;
        }

        // Crie um novo post
        const postElement = document.createElement("div");
        postElement.className = "post";

        postElement.innerHTML = `
            <h2>${title}</h2>
                <span class="data-post">${new Date().toLocaleDateString()}</span>
                <img src="${image}">
                <p>${body}</p>
                <a href="${link}" target="_blank">Ver projeto</a>
            <button class="toggle-button">Ocultar</button>
        `;

        // Adicione a nova postagem à classe "post-container"
        postContainer.appendChild(postElement);

        // Limpe o formulário
        titleInput.value = "";
        bodyInput.value = "";
        imageInput.value = "";
        linkInput.value = "";
    });
});


// Ocultar post

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const post = this.parentElement; // Obtém o elemento do post pai
            const content = post.querySelector(".apagar"); // Obtém o elemento do conteúdo do post

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block"; // Mostra o conteúdo
                this.textContent = "Ocultar"; // Altera o texto do botão para "Ocultar"
            } else {
                content.style.display = "none"; // Oculta o conteúdo
                this.textContent = "Mostrar"; // Altera o texto do botão para "Mostrar"
            }
        });
    });
});


