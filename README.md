# Descubra Seu Stand

Quiz de personalidade com 10 perguntas e 8 Stands originais. Só HTML, CSS e JavaScript: sem backend, sem build, sem login.

## Arquivos
- `index.html`: estrutura das telas
- `style.css`: visual, cores e animações
- `data.js`: perguntas e Stands (o que você mais vai editar)
- `app.js`: lógica, pontuação e compartilhamento

## 1. Instalar
Não precisa instalar nada. Baixe a pasta.

## 2. Rodar localmente
Abra `index.html` no navegador. Se preferir um servidor local:
```
python3 -m http.server 8000
```
e acesse http://localhost:8000.

## 3. Publicar no GitHub Pages
1. Crie um repositório e envie os 5 arquivos para a raiz (branch `main`).
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Em poucos minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## 4. Publicar na Vercel
1. Envie o projeto para o GitHub.
2. Na Vercel, **Add New → Project** e importe o repositório.
3. Framework Preset: **Other**. Deixe build command e output directory em branco. Clique em **Deploy**.

(Netlify: arraste a pasta em app.netlify.com/drop.)

## 5. Alterar as perguntas
Em `data.js`, no array `QUESTIONS`. Cada alternativa é `["texto", "ARQUÉTIPO PRINCIPAL", "ARQUÉTIPO SECUNDÁRIO"]`. O principal vale 2 pontos e o secundário 1. Mantenha 4 alternativas por pergunta. Se mudar o número de perguntas, o contador e a barra se ajustam sozinhos.

Códigos: `EST` estrategista, `REB` rebelde, `PRO` protetor, `EXP` explorador, `MAN` manipulador, `VIS` visionário, `SOB` sobrevivente, `CAO` caótico criativo.

## 6. Adicionar novos Stands
1. Em `STANDS`, crie uma chave nova (ex.: `GUA`) copiando um bloco existente.
2. O campo `st` tem 6 letras A–E, na ordem: Poder, Velocidade, Alcance, Durabilidade, Precisão, Potencial.
3. Use o novo código nas alternativas de `QUESTIONS`. Dê a ele alternativas principais suficientes para ter chance real de vencer.

Empates são resolvidos automaticamente (mais pontos, depois mais respostas principais, depois ordem fixa), então sempre há um resultado.

## 7. Alterar cores e textos
- Cores e fontes: variáveis no topo de `style.css` (`:root`).
- Textos das telas inicial e de carregamento: `index.html`.
- Mensagem de compartilhamento: variável `shareText` em `app.js`.

## Atalhos e acessibilidade
Teclas 1–4 escolhem alternativas. Botões têm foco visível, a alternativa marcada mostra "✔ ESCOLHIDA" além da cor, e as animações são desligadas se o sistema pedir movimento reduzido.
