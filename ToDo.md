# 🏋️‍♂️ Tracker de Treinos PRO - Roadmap de Desenvolvimento

## FASE 1: O Coração Relacional (Backend)
- [x] Definir a nova arquitetura relacional (`schema.prisma`) com catálogos, treinos e séries.
- [x] Executar a migração do Prisma para formatar o SQLite (`npx prisma migrate dev`).
- [x] Reestruturar as rotas do `server.ts` para suportar a nova arquitetura.
- [x] 💾 **Commit:** `refactor: nova arquitetura relacional de dados`

## FASE 2: Fundação Mobile-First (Frontend)
- [x] Instalar o React Router (`react-router-dom`).
- [x] Configurar a navegação inferior (BottomNav) e as páginas base (Home, Workout, Profile).
- [x] Reestruturar o `App.scss` para o tema Dark Mode (inspirado no Hevy).
- [x] 💾 **Commit:** `feat: setup react-router e tema dark mode base`

## FASE 3: Motor de Treino (O Core da Aplicação)
- [ ] Criar a página de catálogo e busca global de exercícios.
- [ ] Implementar a interface de "Começar Treino".
- [ ] Desenvolver o motor dinâmico de adição de séries (peso e repetições por exercício).
- [ ] Integrar com a API para gravar o objeto complexo do treino finalizado.
- [ ] 💾 **Commit:** `feat: motor de registo de treino em tempo real`

## FASE 4: Histórico e Analytics (Dashboards)
- [ ] Construir o feed cronológico de treinos na página Home.
- [ ] Criar a vista detalhada de leitura de um treino já gravado.
- [ ] Desenvolver os gráficos de distribuição muscular e estatísticas de volume no Perfil.
- [ ] 💾 **Commit:** `feat: dashboards de histórico e perfil analítico`

## FASE 5: Barreira de Segurança (Full-Stack)
- [ ] Configurar a tabela de utilizadores e a encriptação de senhas.
- [ ] Implementar endpoints de Login/Registo com tokens JWT.
- [ ] Proteger as rotas do Frontend para exigir autenticação.
- [ ] 💾 **Commit:** `feat: sistema auth jwt e base de dados de utilizadores`