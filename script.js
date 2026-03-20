// Função para buscar resultados da API
async function buscarResultados() {
    const url = "https://loteriascaixa-api.herokuapp.com/api/megasena";

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        // Pega apenas os números dos concursos
        let resultados = dados.map(concurso =>
            concurso.dezenas.map(num => Number(num))
        );

        return resultados;
    } catch (erro) {
        console.warn("Erro ao buscar da API:", erro);
        
        // Retorna dados de exemplo se API falhar
        return [
            [5, 18, 19, 31, 34, 59],
            [9, 17, 22, 32, 46, 59],
            [1, 6, 7, 14, 42, 50],
            [12, 33, 48, 55, 56, 57],
            [9, 20, 38, 39, 42, 54],
            [10, 15, 25, 35, 45, 55],
            [2, 12, 22, 32, 42, 52],
            [7, 17, 27, 37, 47, 57],
            [3, 13, 23, 33, 43, 53],
            [4, 14, 24, 34, 44, 54]
        ];
    }
}

// Função para contar frequência (1 a 60)
function contarFrequencia(resultados) {
    let freq = {};

    for (let i = 1; i <= 60; i++) {
        freq[i] = 0;
    }

    resultados.forEach(jogo => {
        jogo.forEach(num => {
            freq[num]++;
        });
    });

    return freq;
}

// Função para gerar aposta inteligente
function gerarApostaInteligente(freq) {
    function escolher(min, max) {
        let candidatos = [];

        for (let i = min; i <= max; i++) {
            candidatos.push({ num: i, freq: freq[i] });
        }

        // Ordena pelos mais sorteados
        candidatos.sort((a, b) => b.freq - a.freq);

        // Pega entre os TOP (mais fortes)
        let top = candidatos.slice(0, 10);

        return top[Math.floor(Math.random() * top.length)].num;
    }

    let aposta = [
        escolher(1, 20),
        escolher(5, 32),
        escolher(10, 40),
        escolher(26, 40),
        escolher(35, 50),
        escolher(49, 60)
    ];

    // Remove repetidos
    aposta = [...new Set(aposta)];

    // Se faltar número (por causa de repetição)
    while (aposta.length < 6) {
        aposta.push(Math.floor(Math.random() * 60) + 1);
    }

    return aposta.sort((a, b) => a - b);
}

// Função principal para gerar a aposta
async function gerar() {
    const btnGerar = document.getElementById("btnGerar");
    const resultado = document.getElementById("resultado");
    const status = document.getElementById("status");
    const numerosContainer = document.getElementById("numerosContainer");

    // Desabilita o botão durante o processamento
    btnGerar.disabled = true;
    status.className = "status loading";
    status.innerText = "Carregando dados e gerando aposta...";
    resultado.style.display = "none";
    numerosContainer.style.display = "none";

    try {
        // Buscar resultados
        let resultados = await buscarResultados();

        // Contar frequência
        let freq = contarFrequencia(resultados);

        // Gerar aposta inteligente
        let aposta = gerarApostaInteligente(freq);

        // Exibir resultado
        resultado.innerText = aposta.join(" - ");
        resultado.style.display = "flex";

        // Exibir números em badges
        numerosContainer.innerHTML = "";
        aposta.forEach(num => {
            const badge = document.createElement("div");
            badge.className = "numero-badge";
            badge.innerText = num;
            numerosContainer.appendChild(badge);
        });
        numerosContainer.style.display = "grid";

        // Status de sucesso
        status.className = "status success";
        status.innerText = "✓ Aposta gerada com sucesso!";

    } catch (erro) {
        console.error("Erro:", erro);
        status.className = "status error";
        status.innerText = "❌ Erro: " + erro.message;
        resultado.innerText = "Erro ao gerar aposta";
        resultado.style.display = "flex";
    } finally {
        // Reabilita o botão
        btnGerar.disabled = false;
    }
}
