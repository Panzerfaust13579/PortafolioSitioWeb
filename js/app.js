// PORTAFOLIO PROFESIONAL - ING. ALAN TELLO (UMAD)
// LÓGICA DE INTERACTIVIDAD Y LIGHTBOX

document.addEventListener('DOMContentLoaded', () => {
  let currentEvidenceIndex = 0;
  const evidenceList = [];

  // Recopilar todas las evidencias de imágenes para el lightbox
  document.querySelectorAll('.card-media').forEach((el, idx) => {
    const item = {
      src: el.querySelector('img').getAttribute('src'),
      title: el.getAttribute('data-title') || 'Evidencia de Proyecto',
      desc: el.getAttribute('data-desc') || '',
      category: el.getAttribute('data-category') || 'Evidencia'
    };
    evidenceList.push(item);
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  // 1. Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function openLightbox(index) {
    if (!evidenceList[index]) return;
    currentEvidenceIndex = index;
    const item = evidenceList[currentEvidenceIndex];
    lightboxImg.src = item.src;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    currentEvidenceIndex = (currentEvidenceIndex + 1) % evidenceList.length;
    openLightbox(currentEvidenceIndex);
  }

  function prevLightbox() {
    currentEvidenceIndex = (currentEvidenceIndex - 1 + evidenceList.length) % evidenceList.length;
    openLightbox(currentEvidenceIndex);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  // 2. Filtro de Categorías / Píldoras
  const filterPills = document.querySelectorAll('.filter-pill');
  const allSections = document.querySelectorAll('.category-section');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.getAttribute('data-category');
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (cat === 'all') {
        allSections.forEach(sec => sec.style.display = 'block');
      } else {
        allSections.forEach(sec => {
          if (sec.getAttribute('data-category') === cat) {
            sec.style.display = 'block';
            sec.scrollIntoView({ behavior: 'smooth' });
          } else {
            sec.style.display = 'none';
          }
        });
      }
    });
  });

  // 3. Búsqueda Global en Tarjetas
  const globalSearchInput = document.getElementById('globalSearchInput');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.card');
      
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Animación suave de contadores estadísticos
  document.querySelectorAll('[data-count-from]').forEach(stat => {
    stat.setAttribute('data-count', document.querySelectorAll(stat.getAttribute('data-count-from')).length);
  });
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count') || '0', 10);
    if (!target) return;
    let count = 0;
    const speed = Math.ceil(target / 40);
    const updateCounter = () => {
      count += speed;
      if (count < target) {
        stat.textContent = count + (stat.getAttribute('data-suffix') || '');
        setTimeout(updateCounter, 30);
      } else {
        stat.textContent = target + (stat.getAttribute('data-suffix') || '');
      }
    };
    updateCounter();
  });
});
