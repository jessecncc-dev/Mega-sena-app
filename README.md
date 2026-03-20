# Mega-Sena - Gerador de Aposta Inteligente

Aplicativo da Mega-Sena com gerador inteligente de apostas, análise de números mais e menos sorteados, atrasados e geração automática de jogos equilibrados.

## 🎯 Funcionalidades

- **Gerador de Aposta Inteligente**: Utiliza análise de frequência histórica de 2.985 concursos para gerar apostas baseadas em números mais sorteados
- **Estratégia de Segmentação**: Divide os números em 6 faixas (1-20, 5-32, 10-40, 26-40, 35-50, 49-60) e seleciona os mais frequentes de cada faixa
- **Interface Responsiva**: Design moderno e adaptável para dispositivos móveis e desktop
- **Dados Históricos**: Análise completa do histórico da Mega-Sena

## 📊 Dados Utilizados

- **Total de Concursos**: 2.985
- **Números Mais Sorteados**:
  - 10 (352 vezes)
  - 53 (340 vezes)
  - 37 (325 vezes)
  - 5 (323 vezes)
  - 34 (321 vezes)

## 🚀 Como Usar

### Opção 1: Abrir no Navegador

1. Baixe todos os arquivos do repositório
2. Certifique-se de que os seguintes arquivos estão na mesma pasta:
   - `index.html`
   - `style.css`
   - `script.js`
   - `resultados_megasena.json`
3. Abra o arquivo `index.html` em seu navegador web
4. Clique no botão "Gerar Aposta Inteligente"

### Opção 2: Integrar em um Site Existente

Se você deseja integrar o gerador em um site existente:

1. Copie os arquivos `index.html`, `style.css` e `script.js` para seu projeto
2. Certifique-se de que o arquivo `resultados_megasena.json` está no mesmo diretório
3. Adicione um link para a página do gerador em seu site

## 📁 Estrutura de Arquivos

```
Mega-sena-app/
├── index.html                  # Página principal
├── style.css                   # Estilos CSS
├── script.js                   # Lógica JavaScript
├── resultados_megasena.json    # Dados históricos (2.985 concursos)
├── README.md                   # Este arquivo
└── Mega Sena Peneira Completa.pdf  # Documentação da planilha
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilos e responsividade
- **JavaScript (ES6+)**: Lógica do gerador e manipulação do DOM
- **API Loteria Caixa**: Busca de dados em tempo real (com fallback para dados locais)

## 📈 Algoritmo de Geração de Apostas

O gerador utiliza a seguinte estratégia:

1. **Carrega o histórico** de 2.985 concursos
2. **Calcula a frequência** de cada número (1-60)
3. **Divide em 6 faixas**:
   - Faixa 1: 1-20
   - Faixa 2: 5-32
   - Faixa 3: 10-40
   - Faixa 4: 26-40
   - Faixa 5: 35-50
   - Faixa 6: 49-60
4. **Seleciona os TOP 10** números mais frequentes de cada faixa
5. **Escolhe aleatoriamente** um número do TOP 10 de cada faixa
6. **Remove duplicatas** e completa com números aleatórios se necessário
7. **Ordena os números** em ordem crescente

## ⚠️ Disclaimer

Este é um aplicativo educacional para fins de análise estatística. A Mega-Sena é um jogo de azar e nenhum algoritmo pode garantir vitória. Use este gerador apenas para fins de análise e entretenimento.

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👨‍💻 Autor

Desenvolvido com ❤️ por Jesse Neves (jessecncc-dev)

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Última atualização**: Março de 2026