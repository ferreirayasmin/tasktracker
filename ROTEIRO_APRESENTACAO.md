# Roteiro da Apresentação - Sprint 2 (10 minutos)

> **Sprint 3:** use o roteiro atualizado em [`ROTEIRO_APRESENTACAO_SPRINT3.md`](./ROTEIRO_APRESENTACAO_SPRINT3.md) — API REST, CRUD completo e apresentação de 15 minutos.

**Título do App:** Agil TaskTracker (Gerenciador de Tarefas)
**Tema:** Aplicativo para criação, visualização e gerenciamento de tarefas ágeis com diferentes níveis de urgência e responsáveis.

---

## 📍 Onde mostrar cada requisito obrigatório no Código e no App

Durante a apresentação, você precisará mostrar o código funcionando e onde ele está no projeto. Siga este roteiro:

### 1. Menu de navegação com pelo menos 3 páginas
*   **No App rodando:** Mostre o menu superior funcionando, clicando nas 3 páginas ("Dashboard", "Nova Tarefa" e "Sobre").
*   **No Código:**
    *   Abra o arquivo `src/App.jsx`: Mostre as rotas configuradas dentro de `<Routes>` (linhas 60-64).
    *   Abra o arquivo `src/components/Navbar.jsx`: Mostre os links de navegação (`<Link>`).

### 2. Formulário controlado com useState (pelo menos 3 campos)
*   **No App rodando:** Vá para a página "Nova Tarefa", preencha os 3 campos e cadastre uma tarefa.
*   **No Código:**
    *   Abra o arquivo `src/components/TaskForm.jsx`: Mostre os `useState` na parte de cima do componente (linhas 6-8) que controlam os estados: `title`, `assignee`, e `urgency`. Mostre também que os `inputs` e o `select` do formulário utilizam o `onChange` para atualizar esses estados.

### 3. Listagem dinâmica dos itens cadastrados
*   **No App rodando:** Vá para o "Dashboard" e mostre a tarefa que você acabou de cadastrar aparecendo na lista. Altere o status de uma tarefa e exclua outra para mostrar que é dinâmico.
*   **No Código:**
    *   Abra o arquivo `src/components/TaskList.jsx`: Mostre o uso da função `.map()` para percorrer o array de `tasks` e renderizar cada item na tela de forma dinâmica.

### 4. Persistência com localStorage
*   **No App rodando:** Com tarefas já cadastradas no Dashboard, atualize a página (F5) para mostrar ao professor que os dados não somem.
*   **No Código:**
    *   Abra o arquivo `src/App.jsx`: Mostre os dois hooks `useEffect` no começo do arquivo (linhas 13 a 31). Um deles é responsável por carregar os itens salvos (`localStorage.getItem`) e o outro é responsável por salvar as alterações (`localStorage.setItem`).

### 5. Pelo menos 2 componentes em arquivos .jsx separados
*   **No App rodando:** Já foi demonstrado pelo uso da aplicação como um todo.
*   **No Código:**
    *   Mostre a pasta `src/components/`. Lá existem 3 componentes separados, cumprindo mais do que a exigência: `Navbar.jsx`, `TaskForm.jsx` e `TaskList.jsx`.

---

## 📝 Estrutura sugerida para a fala (Até 10 min)

1.  **Apresentação da Equipe e do Tema (1 min):** "Bom dia/boa noite, nosso grupo fez o Agil TaskTracker, um app para gestão de tarefas de times ágeis."
2.  **Demonstração do App Rodando (3 min):** Navegue pelo menu, crie uma tarefa com título, responsável e urgência. Vá ao Dashboard e mostre a lista. Dê F5 para provar que salva.
3.  **Demonstração do Código (4 min):**
    *   Mostre o `TaskForm.jsx` para provar os 3 campos controlados (`useState`).
    *   Mostre o `App.jsx` para mostrar as Rotas de navegação e o uso do `localStorage`.
    *   Mostre o `TaskList.jsx` para mostrar a listagem dinâmica com `.map()`.
    *   Mostre a estrutura de pastas comprovando a modularização (os componentes em `.jsx`).
4.  **Dificuldades e Aprendizados (2 min):** Comentem brevemente sobre qual parte foi mais desafiadora (geralmente gerenciar o estado no App.jsx e passar as funções como props para os componentes, ou usar o localStorage com useEffect).
