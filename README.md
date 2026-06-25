# Trabalho Final
Trabalho final da matéria de introdução ao html, css e javascript.

# Algumas das tags utilizadas e vistas em aula
## Tags Semânticas

"!DOCTYPE html": Informa ao navegador que este é um documento moderno do padrão HTML5.

"html": É a tag raiz que envolve todo o conteúdo da sua página.

"head": A "cabeça" do site. Aqui ficam as configurações ocultas, como o título da aba (<title>) e o link que puxa o arquivo CSS (<link rel="stylesheet"...>).

"body": O "corpo" do site. Tudo o que realmente aparece visualmente na tela para o usuário fica aqui dentro.

"header": O cabeçalho da página. Usamos para guardar o menu de navegação e o seu nome (logo).

"nav": Define um bloco de links de navegação. É a tag ideal para criar menus.

"main": Define o conteúdo principal e exclusivo daquela página específica (o miolo do site).

"section": Agrupa conteúdos que têm o mesmo assunto (como a seção "Sobre Mim").

"footer": O rodapé do site, usado no final da página para direitos autorais e créditos.

# Conteúdo e Elementos Visuais
## 📝 2. Tags de Conteúdo e Elementos Visuais
Elementos utilizados para inserir os textos, mídias e componentes interativos com os quais o usuário final lê e interage.

### 🔤 Textos e Destaques
* `<h1>` e `<h2>`: Tags de títulos hierárquicos. O `<h1>` é o título de maior importância da página (utiliza-se um por tela), enquanto o `<h2>` atua como subtítulo das seções.
* `<p>`: Define blocos de parágrafos para textos comuns.
* `<strong>`: Altera o texto visualmente para negrito, indicando que a palavra ou termo possui grande relevância semântica.
* `<em>`: Renderiza o texto em itálico, aplicando ênfase estilística (usado para destacar termos específicos ou nomes estrangeiros).
* `<span>`: Tag genérica de linha (*inline*) utilizada para isolar partes específicas de um texto e aplicar regras de estilo personalizadas via CSS (como a terminação amarela `.dev`).

### 📋 Listas (Aulas de 30/Abr e 13/Mai)
* `<ul>`: Inicializa uma **Lista Não Ordenada** (*Unordered List*), agrupando os itens com marcadores de pontos visuais por padrão.
* `<li>`: Define cada **Item da Lista** (*List Item*), devendo obrigatoriamente estar contido em uma tag de lista (`<ul>` ou `<ol>`).

### 📊 Tabelas (Aula de 28/Mai)
* `<table>`: Abre a estrutura de dados matriciais (linhas e colunas) na tela.
* `<thead>`: Agrupa o elemento de cabeçalho da tabela, onde se definem os títulos informativos.
* `<tbody>`: Delimita o corpo da tabela, onde se concentram os dados e registros principais.
* `<tr>`: Cria uma **Linha da Tabela** (*Table Row*), servindo de container horizontal tanto para títulos quanto para dados.
* `<th>`: Define uma **Célula de Cabeçalho** (*Table Header*), cujo texto adquire estilização em negrito e centralizada automaticamente.
* `<td>`: Representa uma **Célula de Dado** (*Table Data*), contendo a informação padrão de intersecção da tabela.

### 📩 Formulários e Links (Aula de 03/Jun)
* `<a>`: Elemento de **Âncora** (Link). Utiliza o atributo `href` para mapear o destino da navegação e o atributo `target="_blank"` para forçar a abertura em uma aba externa.
* `<form>`: Cria a área delimitadora para coleta de dados e interações do usuário.
* `<label>`: Atribui uma etiqueta descritiva textual para um campo de entrada, melhorando expressivamente a acessibilidade.
* `<input>`: Campo de entrada de dados. O tipo `type="text"` especifica um campo de texto linear e o atributo nativo `required` impede o envio caso o campo esteja vazio.
* `<button>`: Componente de gatilho para cliques. Definido com `type="submit"`, ele sinaliza ao navegador o envio dos dados do formulário, interceptado pela lógica em JavaScript.
