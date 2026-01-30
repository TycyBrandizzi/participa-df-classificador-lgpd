# Participa DF Inteligente  
## Classificador LGPD para Pedidos de Acesso à Informação

### Visão Geral
O **Participa DF Inteligente** é uma solução modular proposta para o 1º Hackathon em Controle Social – Desafio Participa DF, com foco no fortalecimento da transparência pública, da participação cidadã e da proteção de dados pessoais.

Este projeto apresenta um **MVP funcional** do módulo de **Acesso à Informação**, capaz de identificar automaticamente dados pessoais em pedidos públicos, auxiliando na tomada de decisão sobre sua publicação, em conformidade com a LGPD.

---

### Problema
Pedidos de acesso à informação, quando disponibilizados publicamente sem análise prévia adequada, podem conter dados pessoais ou sensíveis, gerando:
- riscos jurídicos relacionados à LGPD
- exposição indevida de cidadãos
- aumento do retrabalho manual para servidores públicos

---

### Solução Desenvolvida
O projeto implementa um **classificador automático de risco LGPD**, que analisa o texto de pedidos de acesso à informação e retorna uma classificação clara, explicável e auditável.

Classificações possíveis:
- 🟢 **Apto para publicação**
- 🟡 **Requer revisão humana**
- 🔴 **Contém dados pessoais sensíveis**

Além da classificação, o sistema apresenta a **justificativa da decisão**, indicando quais tipos de dados foram identificados no texto analisado.

---

### Diferenciais do MVP
- Interface institucional e intuitiva
- Feedback visual claro e imediato
- Explicabilidade da decisão (transparência algorítmica)
- Foco no usuário cidadão e no servidor público
- Arquitetura simples, escalável e de fácil integração futura

---

### Como Utilizar
1. Acesse o sistema pelo navegador
2. Cole o texto do pedido de acesso à informação
3. Clique em **Analisar pedido**
4. Visualize a classificação de risco e a justificativa apresentada

---

### Tecnologias Utilizadas
- HTML
- CSS
- JavaScript (JS puro)

---

### Escopo do MVP
Este MVP utiliza regras simples de detecção baseadas em padrões e palavras-chave, validando a lógica central da solução.

A proposta foi pensada para futura evolução com:
- técnicas de Processamento de Linguagem Natural (NLP)
- integração direta com o Participa DF
- expansão para módulos de Ouvidoria e acompanhamento da participação cidadã

---

### Alinhamento com o Desafio
O foco deste projeto não foi criar mais um sistema, mas **resolver exatamente os gargalos reais do Participa DF**, promovendo uma participação social mais segura, transparente e confiável.

Link do site: https://participa-df-classificador-lgpd.netlify.app/
