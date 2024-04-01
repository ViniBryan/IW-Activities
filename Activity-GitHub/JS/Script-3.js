        // document.getElementById()
        //Esta função retorna o elemento HTML que possui o ID especificado.
        const elemento1 = document.getElementById("exemplo1");
        console.log(elemento1.textContent); // Saída: Este é um exemplo de div com ID

        // document.getElementsByTagName()
        //Esta função retorna uma coleção de elementos com o nome da tag especificada.
        const itens = document.getElementsByTagName("li");
        for (let i = 0; i < itens.length; i++) {
            console.log(itens[i].textContent); // Saída: Item 1, Item 2, Item 3
        }

        // document.getElementsByClassName()
        //Esta função retorna uma coleção de elementos que possuem a classe especificada.
        const elementos2 = document.getElementsByClassName("exemplo2");
        for (let i = 0; i < elementos2.length; i++) {
            console.log(elementos2[i].textContent); // Saída: Elemento 1, Elemento 2, Elemento 3
        }

        // document.querySelector()
        //Esta função retorna o primeiro elemento dentro do documento que corresponde ao seletor CSS especificado.
        const elemento3 = document.querySelector(".exemplo2");
        console.log(elemento3.textContent); // Saída: Elemento 1

        // document.querySelectorAll()
        //Esta função retorna todos os elementos dentro do documento que correspondem ao seletor CSS especificado, em uma NodeList.
        const elementos4 = document.querySelectorAll("ul li");
        elementos4.forEach(item => {
            console.log(item.textContent); // Saída: Item 1, Item 2, Item 3
        });