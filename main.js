// main.js

function toggleLyrics() {
  const lyrics = document.getElementById('lyrics');
  lyrics.classList.toggle('hidden');
}

// Dummy save button logic (will work fully after Firebase auth linked)
document.getElementById('saveBtn').addEventListener('click', () => {
  alert('Lagu disimpan (fitur akan aktif setelah login Google dihubungkan)');
});

// Search filter (sementara hanya 1 lagu)
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const title = '愛の赤色';
  const section = document.getElementById('songs');
  if (title.includes(query)) {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});
      
