import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://qxtusmvrupffinszflij.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8';

const client = createClient(supabaseUrl, supabaseKey);

const outputContainer = document.getElementById('output-container');
const searchInput = document.getElementById('searchInput');

async function fetchData(keyword = '') {
  let q = client
    .from('notes')
    .select('id, nama_produk, created_at')
    .order('created_at', { ascending: false });

  if (keyword.trim()) q = q.ilike('nama_produk', `%${keyword}%`);

  const { data, error } = await q;
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function renderData(rows) {
  outputContainer.innerHTML = '';

  if (!rows.length) {
    outputContainer.innerHTML = '<p>Tidak ada data ditemukan.</p>';
    return;
  }

  rows.forEach((row) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.justifyContent = 'space-between';
    wrap.style.alignItems = 'center';
    wrap.style.padding = '10px';
    wrap.style.border = '1px solid #ccc';
    wrap.style.borderRadius = '5px';
    wrap.style.marginBottom = '10px';
    wrap.style.position = 'relative';

    const link = document.createElement('a');
    link.href = `output-tampilan.html?id=${row.id}`;
    link.textContent = row.nama_produk;
    link.style.flexGrow = '1';
    link.style.color = '#007bff';
    link.style.textDecoration = 'none';
    link.style.marginRight = '12px';

    const small = document.createElement('small');
    small.textContent = `Dibuat: ${formatDate(row.created_at)}`;
    small.style.marginRight = '12px';
    small.style.color = '#555';

    // Tombol titik tiga
    const menuButton = document.createElement('button');
    menuButton.textContent = '⋮';
    menuButton.style.border = 'none';
    menuButton.style.background = 'transparent';
    menuButton.style.cursor = 'pointer';
    menuButton.style.fontSize = '18px';

    // Menu kecil hapus
    const menu = document.createElement('div');
    menu.textContent = 'Hapus';
    menu.style.position = 'absolute';
    menu.style.top = '40px';
    menu.style.right = '10px';
    menu.style.background = '#e74c3c';
    menu.style.color = '#fff';
    menu.style.padding = '6px 12px';
    menu.style.borderRadius = '4px';
    menu.style.cursor = 'pointer';
    menu.style.display = 'none';
    menu.style.zIndex = '10';
    menu.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';

    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });

    // Klik luar area untuk menutup menu
    document.addEventListener('click', () => {
      menu.style.display = 'none';
    });

    // Tombol Hapus aktif
    menu.addEventListener('click', async () => {
      if (!confirm(`Hapus data "${row.nama_produk}"?`)) return;
      const { error } = await client.from('notes').delete().eq('id', row.id);
      if (error) {
        alert('Gagal menghapus: ' + error.message);
        return;
      }
      const fresh = await fetchData(searchInput.value);
      renderData(fresh);
    });

    wrap.appendChild(link);
    wrap.appendChild(small);
    wrap.appendChild(menuButton);
    wrap.appendChild(menu);
    outputContainer.appendChild(wrap);
  });
}

searchInput.addEventListener('input', async () => {
  const rows = await fetchData(searchInput.value);
  renderData(rows);
});

(async () => {
  const rows = await fetchData();
  renderData(rows);
})();
