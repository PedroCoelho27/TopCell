function pesquisar(){
    // Define uma função chamada 'pesquisar' que será responsável por executar a lógica de busca.
    
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a referência para a seção HTML onde os resultados da pesquisa serão exibidos, utilizando o ID "resultados-pesquisa".
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Obtém o valor do campo de pesquisa, que é o texto digitado pelo usuário.
  
    function caracEspeciais(str){
      // Define uma função auxiliar para verificar se uma string contém caracteres especiais.
      const crtEspeciais =  /[!@#$%^&*(),.?":{}|<>\s]/g;
      // Cria uma expressão regular para identificar caracteres especiais.
      return crtEspeciais.test(str);
      // Retorna true se a string contém caracteres especiais, false caso contrário.
    }
  
    if (!campoPesquisa || caracEspeciais(campoPesquisa)) {
      // Verifica se o campo de pesquisa está vazio ou contém caracteres especiais.
      section.innerHTML = '<p id="vazio">Nada! Insira alguma informação para realizar a busca.</p>';
      // Se a condição for verdadeira, exibe uma mensagem informando que o campo está vazio ou contém caracteres inválidos.
      return;
      // Interrompe a execução da função.
    }
  
    campoPesquisa = campoPesquisa.toLowerCase();
    // Converte o termo de pesquisa para letras minúsculas, para tornar a busca case-insensitive.
  
    let resultados = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let titulo = "";
    // Variáveis para armazenar temporariamente o título, descrição e tags de cada item.
    let descricao = "";
    let tags = "";
  
    for (dado of dados){
      // Itera sobre cada item (dado) em um array chamado 'dados' (não mostrado no código).
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      // Converte o título, descrição e tags do item atual para letras minúsculas.
  
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ){
        // Verifica se o termo de pesquisa está presente no título, descrição ou tags do item.
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Informações técnicas deste aparelho.</a>
          </div>
        `;
        // Se o termo de pesquisa foi encontrado, adiciona o item aos resultados da pesquisa.
      } 
    }
  
    if (!resultados){
      // Verifica se nenhum resultado foi encontrado.
      resultados = '<p id= "no-result">Nada relacionado ao que você queria :( </p>';
      // Se nenhum resultado foi encontrado, exibe uma mensagem informando isso.
    }
  
    section.innerHTML = resultados;
    // Atualiza o conteúdo da seção de resultados com a string 'resultados', que contém os itens encontrados ou a mensagem de "nenhum resultado".
  }