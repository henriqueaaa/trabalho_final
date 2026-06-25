# Trabalho Final
Trabalho final da matéria de introdução ao html, css e javascript.

# Algumas das tags utilizadas e vistas em aula
## 🏛️ 1. Organização do Site (Tags Semânticas)
Essas tags servem para dividir o site em partes e mostrar para o navegador o que é o menu, o meio da tela e o rodapé.

* `<!DOCTYPE html>`: Avisa ao navegador que o arquivo está usando o HTML mais moderno (HTML5).
* `<html>`: É a tag principal, que abraça todo o código do site.
* `<head>`: A "cabeça" do site. Fica escondida do usuário, mas serve para dar nome à aba do navegador (`<title>`) e puxar o nosso arquivo de estilo (`<link rel="stylesheet">`).
* `<body>`: O "corpo" do site. Tudo o que a gente realmente consegue ver na tela fica guardado aqui dentro.
* `<header>`: O topo da página. Usei para colocar o menu de links.
* `<nav>`: Mostra que aquela parte é o menu de navegação do site.
* `<main>`: Mostra qual é o conteúdo principal de cada página (o miolo).
* `<section>`: Serve para criar uma área sobre o mesmo assunto (usei para a parte do "Sobre Mim").
* `<footer>`: O rodapé. Fica lá embaixo na página com o meu nome e os direitos autorais.

---

## 📝 2. Conteúdos e Textos

### 🔤 Textos e Títulos
* `<h1>` e `<h2>`: Tags de título. O `<h1>` é o maior e mais importante da página (usei no meu nome). O `<h2>` usei para os subtítulos das outras páginas.
* `<p>`: Serve para escrever textos e parágrafos normais.
* `<strong>`: Deixa as letras em **negrito** para destacar coisas importantes (usei no Serviço Militar, TCS e Raio de Luz).
* `<em>`: Deixa a letra em *itálico* (usei para destacar o nome da paróquia).
* `<span>`: Serve para isolar um pedacinho de texto e mudar a cor dele no CSS (usei para deixar o `.dev` amarelo).

### 📋 Listas (Aulas de 30/Abr e 13/Mai)
* `<ul>`: Cria uma lista com pontinhos, que não é numerada.
* `<li>`: É cada linha ou item que fica dentro da nossa lista.

### 📊 Tabelas (Aula de 28/Mai)
* `<table>`: Cria a tabela na tela.
* `<thead>`: A parte de cima da tabela (os títulos das colunas).
* `<tbody>`: Onde ficam as informações reais da tabela.
* `<tr>`: Cria uma linha horizontal na tabela.
* `<th>`: O título de cada coluna (deixa a letra em negrito e centralizada automaticamente).
* `<td>`: O texto ou dado comum dentro de cada quadradinho da tabela.

### 📩 Formulários e Links (Aula de 03/Jun)
* `<a>`: Cria um link para outra página. Usei o `href` para dar o endereço do link e o `target="_blank"` para abrir o GitHub e o LinkedIn em uma aba nova.
* `<form>`: Cria a caixinha do formulário para o usuário preencher.
* `<label>`: O texto que avisa o que a pessoa tem que digitar (ex: "Deixe seu nome para contato:").
* `<input>`: A caixinha branca onde o usuário digita o texto. Usei o `required` para o botão só funcionar se o campo estiver preenchido.
* `<button>`: O botão de enviar do formulário. Quando clicado, ele avisa o JavaScript para rodar a nossa função.campo esteja vazio.
* `<button>`: Componente de gatilho para cliques. Definido com `type="submit"`, ele sinaliza ao navegador o envio dos dados do formulário, interceptado pela lógica em JavaScript.
