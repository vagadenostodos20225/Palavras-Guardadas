/* ======================================================
  🌵 DICIONÁRIO NORDESTINO — ARTE CULTURAL JS (Versão Premium Épica)
  © 2025 — Feito com carinho nordestino 💛
  🔥 Agora com: animações 3D, partículas, sons, microinterações e energia arretada.
====================================================== */

const VERBETES = [
  { letra: "A", palavra: "Arretado", significado: "Muito bom, forte, intenso ou valente.", exemplo: "Esse forró tá arretado de bom!", tags: ["elogio","intensidade"] },
  { letra: "A", palavra: "Abestalhado", significado: "Pessoa boba, atrapalhada.", exemplo: "Deixe de ser abestalhado, homi!", tags: ["brincadeira"] },
  { letra: "A", palavra: "Abirobado", significado: "Besta, idiota.", exemplo: "Eita menino abirobado!", tags: ["ofensa","intensidade"] },
  { letra: "A", palavra: "Anágua", significado: "Roupa íntima feminina.", exemplo: "Você viu aquela anágua?", tags: ["substantivo"] },
  { letra: "A", palavra: "Apiar", significado: "Subir, elevar, ir para cima.", exemplo: "Ei! Hora de apiar, menino!", tags: ["substantivo"] },
  { letra: "A", palavra: "Armaria", significado: "Surpresa, espanto.", exemplo: "Armaria! Tudo isso?", tags: ["substantivo"] },
  { letra: "A", palavra: "Arrebento", significado: "Pessoa que está se dando mal.", exemplo: "Aquele homem? Rapaz, tá meio arrebento", tags: ["substantivo","adjetivo"] },
  { letra: "A", palavra: "Arreda o pé daqui", significado: "Sair daquele lugar/dali.", exemplo: "Arreda o pé daqui, peste!", tags: ["frase"] },
  { letra: "B", palavra: "Buchada", significado: "Prato típico feito com vísceras de bode.", exemplo: "Hoje vai ter buchada no almoço.", tags: ["culinária"] },
  { letra: "B", palavra: "Bulir", significado: "Mexer, provocar alguém.", exemplo: "Não vai bulir comigo, não!", tags: ["ação"] },
  { letra: "B", palavra: "Baculejo", significado: "Revistar ou ser revistado.", exemplo: "Acabei de levar um baculejo ali na esquina.", tags: ["substantivo"]},
  { letra: "B", palavra: "Bacurizim", significado: ".", exemplo: "!", tags: ["!"] },
  { letra: "B", palavra: "Bater as botas", significado: "Falecer, morrer, vir a óbito.", exemplo: "Sinto muito, mas ele bateu as botas.", tags: ["culinária"] },
  { letra: "B", palavra: "Bixim", significado: "Pessoa a qual não se sabe o nome.", exemplo: "Não vai bulir comigo, não!", tags: ["ação"] },
  { letra: "C", palavra: "Cabra da peste/craba 'véi", significado: "Pessoa valente e corajosa.", exemplo: "Esse cabra da peste enfrentou tudo sozinho.", tags: ["elogio","coragem"] },
  { letra: "C", palavra: "Ceroulas", significado: "Roupa semelhante a cueca.", exemplo: "Já vestiu sua ceroula, filho?.", tags: ["corpo"] },
  { letra: "C", palavra: "Chepe", significado: "Jumento.", exemplo: "Anda! Puxa o chepe!", tags: ["animal", "mamífero"] },
  { letra: "C", palavra: "Culunim/Curunim", significado: "Menino danado, encrenqueiro.", exemplo: "Ora se eu te pego, culunim!", tags: ["corpo"] },
  { letra: "C", palavra: "Cangote", significado: "Nuca, parte de trás do pescoço.", exemplo: "Tomou um vento no cangote.", tags: ["corpo"] },
  { letra: "D", palavra: "Danado", significado: "Travesso, levado ou muito bom.", exemplo: "Esse menino é danado demais!", tags: ["brincadeira"] },
  { letra: "D", palavra: "Desapiar", significado: "Descer, ir para baixo.", exemplo: "Já tá na hora de desapiar!", tags: ["verbo"] },
  { letra: "E", palavra: "Ele(a) já vai procurar cachos de coco ", significado: "Procurar um namorado", exemplo: "Nam, ela já foi procurar cachos de coco.", tags: ["Ditado popular"] },
  { letra: "F", palavra: "Forró", significado: "Gênero musical e dança típica.", exemplo: "Vamos dançar um forró pé de serra.", tags: ["música"] },
  { letra: "F", palavra: "Fulô", significado: "Flor, usado de forma carinhosa.", exemplo: "Ô fulô, chegue mais.", tags: ["carinho"] },
  { letra: "F", palavra: "Fogoió", significado: "Cabelo loiro", exemplo: "Isabela tem é um cabelo fogoió", tags: ["música"] },
  { letra: "F", palavra: "Foi plantar bananeira", significado: "Procurar algo pra fazer.", exemplo: "Não se preocupe, já foi plantar bananeira", tags: ["Ditado popular"] },
  { letra: "M", palavra: "Mangar", significado: "Zombar, caçoar de alguém.", exemplo: "Deixe de mangar do seu colega.", tags: ["brincadeira"] },
  { letra: "M", palavra: "Malaro", significado: "Maloqueiro, conhecido como 'vida loka'", exemplo: "Rum, esse daí é malaro.", tags: ["adjetivo"] },
  { letra: "M", palavra: "Marmota", significado: "algo ou coisa estranha.", exemplo: "Mais que marmota é essa?", tags: ["adjetivo"] },
  { letra: "M", palavra: "Moagem", significado: "Birra, má criação.", exemplo: "Tu deixa de moagem!", tags: ["substantivo"] },
  { letra: "O", palavra: "Oxente", significado: "Espanto, surpresa.", exemplo: "Oxente, não acredito nisso!", tags: ["inte"] },
  { letra: "O", palavra: "Oio da pedra", significado: "Fim do mundo", exemplo: "Ah, mas esse oio de pedra não tão ruim.", tags: ["Ditado popular"] },
  { letra: "O", palavra: "Ósculo", significado: "Beijo, carinho.", exemplo: "Olha aí, já tão de Ósculos.", tags: ["substantivo"] },
  { letra: "P", palavra: "Peia", significado: "Surra, castigo físico (sentido figurado também).", exemplo: "Vai levar uma peia se aprontar.", tags: ["ameaça","brincadeira"] },
  { letra: "Q", palavra: "Quengo", significado: "Cabeça.", exemplo: "Protege o quengo do sol!", tags: ["corpo"] },
  { letra: "X", palavra: "Xodó", significado: "Algo ou alguém muito querido.", exemplo: "Essa sanfona é meu xodó.", tags: ["carinho"] }
];

// Duplicate initialization removed - see main implementation below


(function () {
  'use strict';

  // Utilidades
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const debounce = (fn, t = 250) => {
    let id; return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), t); };
  };

  class DictionaryApp {
    constructor(verbetes = []) {
      this.VERBETES = Array.isArray(verbetes) ? verbetes : [];
      this.paginaAtual = 0;
      this.paginasNodes = [];
      this.temaAtual = localStorage.getItem('tema') || 'areia';
      this.dadosAtivos = [...this.VERBETES];
      this.favoritos = new Set(JSON.parse(localStorage.getItem('favoritos') || '[]'));
      this._parallaxRAF = null;
      this._parallaxPos = { x: 0, y: 0 };
      this._touchStartX = null;
      this._touchStartTime = null;
    }

    // === Efeitos extras ===
    initEfeitosExtras() {
      if ($('#efeitos-particulas')) return; // evita duplicar
      this.particleContainer = document.createElement('div');
      this.particleContainer.id = 'efeitos-particulas';
      Object.assign(this.particleContainer.style, {
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 999
      });
      document.body.appendChild(this.particleContainer);
      
      // Inicializar partículas de poeira
      this.initPoeira();
    }

    initPoeira() {
      const poeiraContainer = $('#poeira');
      if (!poeiraContainer) return;
      
      // Criar 20 partículas de poeira
      for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.className = 'poeira';
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.animationDelay = `${Math.random() * 12}s`;
        particula.style.animationDuration = `${8 + Math.random() * 8}s`;
        poeiraContainer.appendChild(particula);
      }
    }

    spawnParticles(x, y, color = '#FFD700') {
      if (!this.particleContainer) return;
      for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'particula';
        Object.assign(p.style, {
          position: 'absolute',
          width: '6px',
          height: '6px',
          background: color,
          borderRadius: '50%',
          left: `${x}px`,
          top: `${y}px`,
          opacity: 1,
          pointerEvents: 'none'
        });
        this.particleContainer.appendChild(p);
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        const anim = p.animate([
          { transform: 'translate(0,0)', opacity: 1 },
          { transform: `translate(${dx}px,${dy}px)`, opacity: 0 }
        ], { duration: 1000 + Math.random() * 300, easing: 'ease-out' });
        anim.onfinish = () => p.remove();
      }
    }

    playSomVirada() {
      const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/10/18/audio_93c7a8e90f.mp3?filename=page-flip-102254.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }

    animacaoEntrada() {
      const capa = this.capa || $('#capa');
      if (!capa) return;
      capa.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, fill: 'forwards' });
    }

    // === Inicialização ===
    init() {
      this.cacheSelectors();
      this.applyTemaInicial();
      this.bindEvents();
      this.initEfeitosExtras();

      // Se houver dados, montar a primeira paginação
      if (this.VERBETES.length) {
        this.montarLivro(this.VERBETES);
        const ultima = parseInt(localStorage.getItem('ultimaPagina') || '0', 10);
        this.mostrarPagina(clamp(ultima, 0, this.paginasNodes.length - 1));
      }
    }

    cacheSelectors() {
      this.body = document.body;
      this.capa = $('#capa');
      this.app = $('#app');
      this.btnEntrar = $('#entrar');
      this.btnTemaCapa = $('#temaCapa');
      this.temaSel = $('#tema');
      this.inputBusca = $('#busca');
      this.btnIndice = $('#indiceBtn');
      this.indice = $('#indice');
      this.btnFecharIndice = $('#fecharIndice');
      this.letras = $('#letras');
      this.listaVerbetes = $('#listaVerbetes');
      this.livro = $('#livro');
      this.btnPrev = $('#prev');
      this.btnNext = $('#next');
      this.indicador = $('#indicador');
      this.efeitoEntrada = $('#efeitoEntrada');
    }

    applyTemaInicial() {
      if (this.body) {
        this.body.dataset.theme = this.temaAtual;
      }
      if (this.temaSel) {
        this.temaSel.value = this.temaAtual;
      }
    }

    bindEvents() {
      // Entrar: esconder capa, mostrar app
      if (this.btnEntrar) {
        this.btnEntrar.addEventListener('click', () => {
          if (this.efeitoEntrada) {
            this.efeitoEntrada.play().catch(() => {});
          }
          this.animacaoEntrada();
          // Alterna visibilidade após a animação
          setTimeout(() => {
            if (this.capa) this.capa.hidden = true;
            if (this.app) this.app.hidden = false;
          }, 700);
        });
      }

      // Trocar tema na capa
      if (this.btnTemaCapa) {
        // Atualizar texto inicial do botão
        this.atualizarTextoBotaoTema();
        
        this.btnTemaCapa.addEventListener('click', () => {
          const ordem = ['areia', 'sertao', 'noite'];
          const i = ordem.indexOf(this.temaAtual);
          const prox = ordem[(i + 1) % ordem.length];
          this.trocarTema(prox);
          this.atualizarTextoBotaoTema();
        });
      }

      // Trocar tema no select
      if (this.temaSel) {
        this.temaSel.addEventListener('change', (e) => this.trocarTema(e.target.value));
      }

      // Busca
      if (this.inputBusca) {
        this.inputBusca.addEventListener('input', debounce((e) => {
          const q = e.target.value.trim();
          this.buscar(q);
        }, 200));
      }

      // Índice
      if (this.btnIndice && this.indice) {
        this.btnIndice.addEventListener('click', () => this.abrirIndice());
      }
      if (this.btnFecharIndice && this.indice) {
        this.btnFecharIndice.addEventListener('click', () => this.fecharPainel());
      }

      // Navegação
      if (this.btnPrev) {
        this.btnPrev.addEventListener('click', () => this.mostrarPagina(this.paginaAtual - 1));
      }
      if (this.btnNext) {
        this.btnNext.addEventListener('click', () => this.mostrarPagina(this.paginaAtual + 1));
      }
    }

    // ==== Abaixo: implementações mínimas para não quebrar ====
    cardHTML(item) {
      const palavra = this.escapeHtml(item.palavra || '');
      const significado = this.escapeHtml(item.significado || '');
      const exemplo = this.escapeHtml(item.exemplo || '');
      const favActive = this.favoritos.has(item.palavra) ? 'active' : '';
      return `
        <article class="verbete-card">
          <header class="card-top">
            <h4>${palavra}</h4>
            <button class="btn-fav ${favActive}" data-palavra="${this.escapeAttr(item.palavra)}">${favActive ? '★' : '☆'}</button>
          </header>
          <p class="significado">${significado}</p>
          ${exemplo ? `<blockquote class="exemplo">${exemplo}</blockquote>` : ''}
          <div class="acoes">
            <button class="btn-ouvir" data-palavra="${this.escapeAttr(item.palavra)}">🔊 Ouvir</button>
          </div>
        </article>
      `;
    }

    paginaHTML(a, b, i) {
      const subset = this.dadosAtivos.slice(a, b);
      const cards = subset.map(x => this.cardHTML(x)).join('');
      return `<section class="pagina" data-idx="${i}">${cards}</section>`;
    }

    montarLivro(data) {
      if (!this.livro) return;
      const porPagina = 10;
      this.dadosAtivos = [...data];
      const total = Math.ceil(this.dadosAtivos.length / porPagina) || 1;
      this.livro.innerHTML = '';
      this.paginasNodes = [];
      for (let i = 0; i < total; i++) {
        const a = i * porPagina;
        const b = a + porPagina;
        const html = this.paginaHTML(a, b, i);
        const node = document.createElement('div');
        node.innerHTML = html;
        const pagina = node.firstElementChild;
        this.livro.appendChild(pagina);
        this.paginasNodes.push(pagina);
      }
      this.atualizarIndicador();
      
      // Configurar eventos apenas uma vez
      if (!this._livroEventoConfigurado) {
        this._livroEventoConfigurado = true;
        // Delegação de eventos para favoritos e ouvir
        this.livro.addEventListener('click', (e) => {
          const fav = e.target.closest('.btn-fav');
          if (fav) {
            const palavra = fav.getAttribute('data-palavra');
            this.toggleFavorito(palavra, fav);
            return;
          }
          const ouvir = e.target.closest('.btn-ouvir');
          if (ouvir) {
            const palavra = ouvir.getAttribute('data-palavra');
            this.falar(palavra);
          }
        });
      }
    }

    mostrarPagina(idx) {
      this.playSomVirada();
      if (!this.paginasNodes.length) return;
      idx = clamp(idx, 0, this.paginasNodes.length - 1);
      
      // Esconder todas as páginas
      this.paginasNodes.forEach(p => {
        p.classList.remove('ativa', 'virando', 'voltando');
      });
      
      // Mostrar a página atual
      const pagina = this.paginasNodes[idx];
      
      // Animação de entrada
      const dir = idx > this.paginaAtual ? 'virando' : 'voltando';
      pagina.classList.add('ativa', dir);
      
      setTimeout(() => {
        pagina.classList.remove(dir);
        this.paginaAtual = idx;
        localStorage.setItem('ultimaPagina', String(idx));
        this.atualizarIndicador();
      }, 50);
    }

    atualizarIndicador() {
      if (!this.indicador) return;
      const total = Math.max(this.paginasNodes.length, 1);
      this.indicador.textContent = `${this.paginaAtual + 1} / ${total}`;
    }

    buscar(q) {
      const termo = (q || '').toLowerCase();
      if (!termo) {
        this.dadosAtivos = [...this.VERBETES];
      } else {
        this.dadosAtivos = this.VERBETES.filter(v => {
          const p = (v.palavra || '').toLowerCase();
          const s = (v.significado || '').toLowerCase();
          const e = (v.exemplo || '').toLowerCase();
          return p.includes(termo) || s.includes(termo) || e.includes(termo);
        });
      }
      this.montarLivro(this.dadosAtivos);
      this.mostrarPagina(0);
    }

    abrirIndice() {
      if (this.indice) this.indice.hidden = false;
      if (this.letras) {
        const letras = [...new Set(this.VERBETES.map(v => (v.palavra || '').charAt(0).toUpperCase()))].sort();
        this.letras.innerHTML = letras.map(l => `<button class="idx-letra" data-letra="${l}">${l}</button>`).join('');
        this.letras.addEventListener('click', (e) => {
          const b = e.target.closest('.idx-letra');
          if (!b) return;
          this.listarLetra(b.getAttribute('data-letra'));
        }, { once: true });
      }
    }

    fecharPainel() {
      if (this.indice) this.indice.hidden = true;
    }

    listarLetra(letra) {
      if (!this.listaVerbetes) return;
      const lista = this.VERBETES.filter(v => (v.palavra || '').toUpperCase().startsWith(letra));
      this.listaVerbetes.innerHTML = lista.map(v => `<button class="idx-item" data-palavra="${this.escapeAttr(v.palavra)}">${this.escapeHtml(v.palavra)}</button>`).join('');
      this.listaVerbetes.addEventListener('click', (e) => {
        const b = e.target.closest('.idx-item');
        if (!b) return;
        const palavra = b.getAttribute('data-palavra');
        const idx = this.VERBETES.findIndex(v => v.palavra === palavra);
        // Ir para a página onde a palavra estaria
        const porPagina = 10;
        const page = Math.floor(clamp(idx, 0, this.VERBETES.length - 1) / porPagina);
        this.mostrarPagina(page);
        this.fecharPainel();
      }, { once: true });
    }

    toggleFavorito(palavra, btn) {
      if (this.favoritos.has(palavra)) {
        this.favoritos.delete(palavra);
      } else {
        this.favoritos.add(palavra);
        if (btn) {
          const rect = btn.getBoundingClientRect();
          this.spawnParticles(rect.left + rect.width / 2, rect.top, '#FFD700');
        }
      }
      localStorage.setItem('favoritos', JSON.stringify([...this.favoritos]));
      if (btn) {
        btn.classList.toggle('active', this.favoritos.has(palavra));
        btn.textContent = this.favoritos.has(palavra) ? '★' : '☆';
      }
      if (this.livro) {
        this.livro.querySelectorAll(`.btn-fav[data-palavra="${this.cssEscape(palavra)}"]`).forEach(b => {
          b.classList.toggle('active', this.favoritos.has(palavra));
          b.textContent = this.favoritos.has(palavra) ? '★' : '☆';
        });
      }
    }

    falar(texto) {
      if (!('speechSynthesis' in window)) {
        alert(`Fala não disponível. Palavra: ${texto}`);
        return;
      }
      const msg = new SpeechSynthesisUtterance(texto);
      msg.lang = 'pt-BR';
      msg.rate = 0.95;
      msg.pitch = 1;
      speechSynthesis.cancel();
      speechSynthesis.speak(msg);
      const btn = document.querySelector(`.btn-ouvir[data-palavra="${this.cssEscape(texto)}"]`);
      if (btn) {
        btn.animate(
          [{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(1.3)', opacity: 0.8 }, { transform: 'scale(1)', opacity: 1 }],
          { duration: 500, easing: 'ease-out' }
        );
      }
    }

    trocarTema(nome) {
      if (this.body) this.body.dataset.theme = nome;
      if (this.body) {
        this.body.classList.add('tema-transicao');
        setTimeout(() => this.body.classList.remove('tema-transicao'), 400);
      }
      this.temaAtual = nome;
      if (this.temaSel) this.temaSel.value = nome;
      localStorage.setItem('tema', nome);
    }

    atualizarTextoBotaoTema() {
      if (!this.btnTemaCapa) return;
      const temas = {
        'areia': '🌞 Areia',
        'sertao': '🌵 Sertão',
        'noite': '🌙 Noite'
      };
      this.btnTemaCapa.textContent = `Tema: ${temas[this.temaAtual] || 'Areia'}`;
    }

    // Escapes
    escapeHtml(s) { return String(s).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }
    escapeAttr(s) { return this.escapeHtml(s); }
    cssEscape(s) { return String(s).replace(/"/g, '\\"'); }
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Usar VERBETES definido no escopo global
    const app = new DictionaryApp(VERBETES);
    app.init();
    window.__DN_APP = app;
  });

})();
