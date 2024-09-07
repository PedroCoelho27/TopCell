let dados = [
    // Aqui começa a definição do array "dados"
  
    {
      // Este é o primeiro objeto do array, representando o celular Xiaomi Poco X6 Pro
      titulo: "Xiaomi Poco X6 Pro", // Define o título do celular
      descricao: "Destaca-se como uma excelente opção para gamers, com um processador potente e tela fluida. Seu design moderno e bateria de longa duração também são pontos fortes.", // Descrição detalhada do celular
      link: "https://www.tudocelular.com/Poco/fichas-tecnicas/n9034/Poco-X6-Pro.html", // Link para mais informações sobre o celular
      tags: "poco x6 pro xiaomi xiao xia" // Array de tags relacionadas ao celular, como palavras-chave para busca
    },
  
    // Segundo objeto, representando o Samsung Galaxy M54
    {
      titulo: "Samsung Galaxy M54",
      descricao: "Oferece um ótimo equilíbrio entre desempenho, câmera e bateria. Ideal para quem busca um celular versátil para o dia a dia.",
      link: "https://www.tudocelular.com/Samsung/fichas-tecnicas/n8562/Samsung-Galaxy-M54.html",
      tags: "galaxy m54 samsung sansumg"
    },
  
    // Terceiro objeto, representando o Motorola G84
    {
      titulo: "Motorola G84",
      descricao: "Um dos destaques da Motorola, com um bom conjunto de câmeras e desempenho satisfatório. Seu design elegante e preço acessível o tornam uma opção atraente.",
      link: "https://www.tudocelular.com/Motorola/fichas-tecnicas/n8867/Motorola-Moto-G84.html",
      tags: "motorola g84 moto"
    }
  
    // Fechamento do array "dados"
  ];

function adicionarCelular(titulo, descricao, link, tags) {
    // Define uma função chamada 'adicionarCelular' que recebe quatro parâmetros:
    // - titulo: o título do celular
    // - descricao: a descrição do celular
    // - link: o link para mais informações
    // - tags: um array de tags relacionadas ao celular
  
    const novoCelular = {
      // Cria um novo objeto literal (constante) para representar um celular.
      titulo: titulo,
      // Atribui o valor do parâmetro 'titulo' à propriedade 'titulo' do objeto.
      descricao: descricao,
      // Atribui o valor do parâmetro 'descricao' à propriedade 'descricao' do objeto.
      link: link,
      // Atribui o valor do parâmetro 'link' à propriedade 'link' do objeto.
      tags: tags
      // Atribui o valor do parâmetro 'tags' à propriedade 'tags' do objeto.
    };
  
    dados.push(novoCelular);
    // Adiciona o objeto 'novoCelular' ao final do array 'dados'.
    // O array 'dados' deve existir no escopo externo e é onde os dados dos celulares são armazenados.
  }
  
  // Chama a função 'adicionarCelular' passando todos os argumentos declarados na função.
  adicionarCelular("Redmi Note 13", "Um dos modelos mais populares da Xiaomi, com um ótimo custo-benefício. Oferece um bom desempenho, tela de qualidade e bateria duradoura.", "https://www.tudocelular.com/Redmi/fichas-tecnicas/n9102/Redmi-Note-13.html", "redmi note noute red"
  );
