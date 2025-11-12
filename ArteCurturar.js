/* ======================================================
  🌵 DICIONÁRIO NORDESTINO — Versão Completa Premium
  © 2025 — Feito com carinho nordestino 💛
====================================================== */

const VERBETES = [
  { letra: "A", palavra: "Arretado", significado: "Muito bom, forte, intenso ou valente.", exemplo: "Esse forró tá arretado de bom!", tags: ["adjetivo","elogio"] },
  { letra: "A", palavra: "Abestalhado", significado: "Pessoa boba, atrapalhada.", exemplo: "Deixe de ser abestalhado, homi!", tags: ["adjetivo","humor"] },
  { letra: "A", palavra: "Abirobado", significado: "Besta, idiota.", exemplo: "Eita menino abirobado!", tags: ["adjetivo","ofensa"] },
  { letra: "A", palavra: "Anágua", significado: "Roupa íntima feminina.", exemplo: "Você viu aquela anágua?", tags: ["substantivo","roupa"] },
  { letra: "A", palavra: "Apiar", significado: "Subir, elevar, ir para cima.", exemplo: "Ei! Hora de apiar, menino!", tags: ["verbo","movimento"] },
  { letra: "A", palavra: "Armaria", significado: "Surpresa, espanto.", exemplo: "Armaria! Tudo isso?", tags: ["interjeição","emoção"] },
  { letra: "A", palavra: "Arrebento", significado: "Pessoa que está se dando mal.", exemplo: "Aquele homem? Rapaz, tá meio arrebento", tags: ["adjetivo","situação"] },
  { letra: "A", palavra: "Arreda o pé daqui", significado: "Sair daquele lugar/dali.", exemplo: "Arreda o pé daqui, peste!", tags: ["expressão","comando"] },
  { letra: "B", palavra: "Buchada", significado: "Prato típico feito com vísceras de bode.", exemplo: "Hoje vai ter buchada no almoço.", tags: ["substantivo","culinária"] },
  { letra: "B", palavra: "Bulir", significado: "Mexer, provocar alguém.", exemplo: "Não vai bulir comigo, não!", tags: ["verbo","ação"] },
  { letra: "B", palavra: "Baculejo", significado: "Revistar ou ser revistado.", exemplo: "Acabei de levar um baculejo ali na esquina.", tags: ["substantivo","cotidiano"] },
  { letra: "B", palavra: "Bater as botas", significado: "Falecer, morrer, vir a óbito.", exemplo: "Sinto muito, mas ele bateu as botas.", tags: ["expressão","morte"] },
  { letra: "B", palavra: "Bixim", significado: "Pessoa a qual não se sabe o nome.", exemplo: "Cadê aquele bixim?", tags: ["substantivo","pessoa"] },
  { letra: "C", palavra: "Cabra da peste", significado: "Pessoa valente e corajosa.", exemplo: "Esse cabra da peste enfrentou tudo sozinho.", tags: ["expressão","elogio"] },
  { letra: "C", palavra: "Ceroulas", significado: "Roupa semelhante a cueca.", exemplo: "Já vestiu sua ceroula, filho?", tags: ["substantivo","roupa"] },
  { letra: "C", palavra: "Chepe", significado: "Jumento.", exemplo: "Anda! Puxa o chepe!", tags: ["substantivo","animal"] },
  { letra: "C", palavra: "Culunim", significado: "Menino danado, encrenqueiro.", exemplo: "Ora se eu te pego, culunim!", tags: ["substantivo","criança"] },
  { letra: "C", palavra: "Cangote", significado: "Nuca, parte de trás do pescoço.", exemplo: "Tomou um vento no cangote.", tags: ["substantivo","corpo"] },
  { letra: "D", palavra: "Danado", significado: "Travesso, levado ou muito bom.", exemplo: "Esse menino é danado demais!", tags: ["adjetivo","intensidade"] },
  { letra: "D", palavra: "Desapiar", significado: "Descer, ir para baixo.", exemplo: "Já tá na hora de desapiar!", tags: ["verbo","movimento"] },
  { letra: "E", palavra: "Procurar cachos de coco", significado: "Procurar um namorado", exemplo: "Ela já foi procurar cachos de coco.", tags: ["expressão","romance"] },
  { letra: "F", palavra: "Forró", significado: "Gênero musical e dança típica.", exemplo: "Vamos dançar um forró pé de serra.", tags: ["substantivo","música"] },
  { letra: "F", palavra: "Fulô", significado: "Flor, usado de forma carinhosa.", exemplo: "Ô fulô, chegue mais.", tags: ["substantivo","carinho"] },
  { letra: "F", palavra: "Fogoió", significado: "Cabelo loiro", exemplo: "Isabela tem é um cabelo fogoió", tags: ["adjetivo","aparência"] },
  { letra: "F", palavra: "Foi plantar bananeira", significado: "Procurar algo pra fazer.", exemplo: "Não se preocupe, já foi plantar bananeira", tags: ["expressão","ação"] },
  { letra: "M", palavra: "Mangar", significado: "Zombar, caçoar de alguém.", exemplo: "Deixe de mangar do seu colega.", tags: ["verbo","humor"] },
  { letra: "M", palavra: "Malaro", significado: "Maloqueiro, conhecido como 'vida loka'", exemplo: "Rum, esse daí é malaro.", tags: ["adjetivo","gíria"] },
  { letra: "M", palavra: "Marmota", significado: "Algo ou coisa estranha.", exemplo: "Mais que marmota é essa?", tags: ["substantivo","situação"] },
  { letra: "M", palavra: "Moagem", significado: "Birra, má criação.", exemplo: "Tu deixa de moagem!", tags: ["substantivo","comportamento"] },
  { letra: "O", palavra: "Oxente", significado: "Espanto, surpresa.", exemplo: "Oxente, não acredito nisso!", tags: ["interjeição","emoção"] },
  { letra: "O", palavra: "Oio da pedra", significado: "Fim do mundo", exemplo: "Ah, mas esse oio de pedra não tão ruim.", tags: ["expressão","lugar"] },
  { letra: "O", palavra: "Ósculo", significado: "Beijo, carinho.", exemplo: "Olha aí, já tão de Ósculos.", tags: ["substantivo","romance"] },
  { letra: "P", palavra: "Peia", significado: "Surra, castigo físico (sentido figurado também).", exemplo: "Vai levar uma peia se aprontar.", tags: ["substantivo","ameaça"] },
  { letra: "Q", palavra: "Quengo", significado: "Cabeça.", exemplo: "Protege o quengo do sol!", tags: ["substantivo","corpo"] },
  { letra: "X", palavra: "Xodó", significado: "Algo ou alguém muito querido.", exemplo: "Essa sanfona é meu xodó.", tags: ["substantivo","carinho"] }
];

(function () {
  'use strict';

  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  class DicionarioApp {
    constructor(verbetes) {
      this.VERBETES = verbetes;
      this.verbetesFiltrados = [...verbetes];
      this.filtroAtual = { letra: '', tag: '', busca: '' };
      this.temaAtual = localStorage.getItem('tema') || 'areia';
      this.favoritos = new Set(JSON.parse(localStorage.getItem('favoritos') || '[]'));
    }

    init() {
      this.cacheElements();
      this.aplicarTema(this.temaAtual);
      this.initPoeira();
      this.bindEvents();
      this.gerarFiltros();
      this.renderizarVerbetes();
    }

    cacheElements() {
      this.body = document.body;
      this.capa = $('#capa');
      this.app = $('#app');
      this.btnEntrar = $('#entrar');
      this.btnTemaCapa = $('#temaCapa');
      this.temaSel = $('#tema');
      this.inputBusca = $('#busca');
      this.alfabetoFiltro = $('#alfabetoFiltro');
      this.tagsFiltro = $('#tagsFiltro');
      this.verbetesGrid = $('#verbetesGrid');
      this.resultadoCount = $('#resultadoCount');
    }

    initPoeira() {
      const poeiraContainer = $('#poeira');
      if (!poeiraContainer) return;
      for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.className = 'poeira';
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.animationDelay = `${Math.random() * 12}s`;
        poeiraContainer.appendChild(particula);
      }
    }

    bindEvents() {
      // Botão Entrar
      if (this.btnEntrar) {
        this.btnEntrar.addEventListener('click', () => this.entrarApp());
      }

      // Tema na capa
      if (this.btnTemaCapa) {
        this.atualizarTextoBotaoTema();
        this.btnTemaCapa.addEventListener('click', () => {
          const ordem = ['areia', 'sertao', 'noite'];
          const i = ordem.indexOf(this.temaAtual);
          const prox = ordem[(i + 1) % ordem.length];
          this.aplicarTema(prox);
          this.atualizarTextoBotaoTema();
        });
      }

      // Tema no app
      if (this.temaSel) {
        this.temaSel.value = this.temaAtual;
        this.temaSel.addEventListener('change', (e) => this.aplicarTema(e.target.value));
      }

      // Busca
      if (this.inputBusca) {
        this.inputBusca.addEventListener('input', this.debounce((e) => {
          this.filtroAtual.busca = e.target.value.trim();
          this.aplicarFiltros();
        }, 300));
      }
    }

    entrarApp() {
      if (this.capa) {
        this.capa.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, fill: 'forwards' });
        setTimeout(() => {
          this.capa.hidden = true;
          if (this.app) {
            this.app.hidden = false;
            this.app.style.animation = 'slideInUp 0.6s ease-out';
          }
        }, 600);
      }
    }

    gerarFiltros() {
      // Filtro alfabético
      const letras = [...new Set(this.VERBETES.map(v => v.letra))].sort();
      if (this.alfabetoFiltro) {
        this.alfabetoFiltro.innerHTML = `
          <button class="letra-btn active" data-letra="">Todas</button>
          ${letras.map(l => `<button class="letra-btn" data-letra="${l}">${l}</button>`).join('')}
        `;
        this.alfabetoFiltro.addEventListener('click', (e) => {
          if (e.target.classList.contains('letra-btn')) {
            $$('.letra-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            this.filtroAtual.letra = e.target.dataset.letra;
            this.aplicarFiltros();
          }
        });
      }

      // Filtro por tags
      const todasTags = [...new Set(this.VERBETES.flatMap(v => v.tags))].sort();
      if (this.tagsFiltro) {
        this.tagsFiltro.innerHTML = `
          <button class="tag-btn active" data-tag="">Todas</button>
          ${todasTags.map(t => `<button class="tag-btn" data-tag="${t}">${t}</button>`).join('')}
        `;
        this.tagsFiltro.addEventListener('click', (e) => {
          if (e.target.classList.contains('tag-btn')) {
            $$('.tag-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            this.filtroAtual.tag = e.target.dataset.tag;
            this.aplicarFiltros();
          }
        });
      }
    }

    aplicarFiltros() {
      this.verbetesFiltrados = this.VERBETES.filter(v => {
        const matchLetra = !this.filtroAtual.letra || v.letra === this.filtroAtual.letra;
        const matchTag = !this.filtroAtual.tag || v.tags.includes(this.filtroAtual.tag);
        const matchBusca = !this.filtroAtual.busca || 
          this.normalizar(v.palavra).includes(this.normalizar(this.filtroAtual.busca)) ||
          this.normalizar(v.significado).includes(this.normalizar(this.filtroAtual.busca));
        return matchLetra && matchTag && matchBusca;
      });
      this.renderizarVerbetes();
    }

    renderizarVerbetes() {
      if (!this.verbetesGrid) return;
      
      if (this.verbetesFiltrados.length === 0) {
        this.verbetesGrid.innerHTML = '<div class="sem-resultados">😔 Nenhum verbete encontrado</div>';
        if (this.resultadoCount) this.resultadoCount.textContent = '';
        return;
      }

      this.verbetesGrid.innerHTML = this.verbetesFiltrados.map(v => this.criarCardVerbete(v)).join('');
      
      if (this.resultadoCount) {
        this.resultadoCount.textContent = `${this.verbetesFiltrados.length} palavra${this.verbetesFiltrados.length > 1 ? 's' : ''}`;
      }

      // Event listeners para favoritos
      $$('.btn-fav').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const palavra = e.target.dataset.palavra;
          this.toggleFavorito(palavra, e.target);
        });
      });
    }

    criarCardVerbete(v) {
      const isFav = this.favoritos.has(v.palavra);
      return `
        <article class="verbete-card" data-letra="${v.letra}">
          <div class="card-header">
            <h3>${v.palavra}</h3>
            <button class="btn-fav ${isFav ? 'active' : ''}" data-palavra="${v.palavra}" aria-label="Favoritar">
              ${isFav ? '★' : '☆'}
            </button>
          </div>
          <p class="significado">${v.significado}</p>
          ${v.exemplo ? `<blockquote class="exemplo">💬 "${v.exemplo}"</blockquote>` : ''}
          <div class="tags">
            ${v.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </article>
      `;
    }

    toggleFavorito(palavra, btn) {
      if (this.favoritos.has(palavra)) {
        this.favoritos.delete(palavra);
      } else {
        this.favoritos.add(palavra);
      }
      localStorage.setItem('favoritos', JSON.stringify([...this.favoritos]));
      btn.classList.toggle('active');
      btn.textContent = this.favoritos.has(palavra) ? '★' : '☆';
    }

    aplicarTema(nome) {
      if (this.body) this.body.dataset.theme = nome;
      if (this.temaSel) this.temaSel.value = nome;
      this.temaAtual = nome;
      localStorage.setItem('tema', nome);
    }

    atualizarTextoBotaoTema() {
      if (!this.btnTemaCapa) return;
      const temas = { 'areia': '🌞 Areia', 'sertao': '🌵 Sertão', 'noite': '🌙 Noite' };
      this.btnTemaCapa.textContent = `Tema: ${temas[this.temaAtual] || 'Areia'}`;
    }

    normalizar(texto) {
      return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    debounce(fn, delay) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const app = new DicionarioApp(VERBETES);
    app.init();
    window.__APP = app;
  });

})();
