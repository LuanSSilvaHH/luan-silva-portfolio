# Além da tela — prévia para aprovação

Status: versão aprovada, incorporada à branch main e enviada ao GitHub em 13/10/2026.
Branch: preview/cinema-20261013.

## Direção
Abertura central com planos fotográficos em perspectiva e movimento sutil vinculado à rolagem natural. Uma coleção com acesso direto conduz a cinco cenas: NOIR em fotografia escura; Leal com composição leve e órbitas; Vitta com enquadramento orgânico; PRUMO em grade arquitetônica; IEIÉ como cartaz gastronômico. Os projetos continuam identificados como demonstrações.

Referências pesquisadas: [Unseen Studio](https://unseen.co/projects/) e [The Symphony of Vines](https://symphonyofvines.unseen.co/). Princípios aproveitados: profundidade, narrativa em capítulos, ritmo e continuidade. Identidade, código e composições são próprios deste projeto. Nenhum asset dessas referências foi copiado.

Aplicada a skill CodeMakers-Design encontrada em Documents/skills-web/CodeMakers-Design-Multiplatform/codex/codemakers-design, com capítulos de direção de arte, motion, responsividade e revisão.

## Contratos preservados
- Cinco projetos, nomes e URLs originais.
- Navegação para projetos, sobre, serviços, processo e contato.
- WhatsApp configurável por VITE_WHATSAPP_NUMBER, com o fallback anterior.
- Formulário prepara mensagem e abre WhatsApp; não envia mensagens automaticamente.
- React, Vite e dependências existentes. Nenhuma nova dependência.
- Componentes antigos mantidos no histórico e no checkout; a entrada usa Cinema.jsx e cinema.css.

## Verificação em 13/10/2026
- Build Vite aprovado e git diff --check sem erros.
- Microsoft Edge e Google Chrome reais, em modo headless com perfis isolados.
- Viewports: 1440×900, 390×844, 320×740, 768×1024 e 844×390.
- Largura de conteúdo igual à largura disponível, sem transbordamento horizontal.
- Todas as imagens decodificadas; nenhuma quebrada.
- Cinco links de demonstração conferidos com o código anterior e âncoras internas existentes.
- Menu abre por clique e Enter; Escape fecha e devolve foco ao acionador.
- Expansão da interface por Enter.
- Filtro Aplicação retorna apenas IEIÉ.
- Campo nome obrigatório impede submissão vazia.
- Mensagem do WhatsApp validada por interceptação de window.open; nenhuma mensagem enviada.
- prefers-reduced-motion remove animações, sticky da abertura e rolagem suave.
- Nenhuma exceção JavaScript nos percursos exercitados.
- Capturas anteriores e atuais revisadas visualmente. Comparador local em /review/index.html, excluído do Git e do build.

Limites: tamanhos de celular são emulação de viewport; não houve teste físico em Android/iOS ou Safari, auditoria com leitor de tela nem medição de performance em rede móvel. Testes locais não comprovam disponibilidade futura dos sites externos.

## Revisão
No computador: http://localhost:5173/
Na mesma rede local: http://192.168.0.139:5173/
Comparação: http://192.168.0.139:5173/review/index.html

O IP pode mudar. Se o servidor encerrar, executar npm.cmd run dev -- --host 0.0.0.0 --port 5173 na pasta do projeto.
A publicação de produção é acionada automaticamente pelo push à branch main no Vercel; consulte o status do deploy no projeto.
