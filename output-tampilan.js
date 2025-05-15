// Mengonfigurasi Supabase
const supabaseUrl = "https://qxtusmvrupffinszflij.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fungsi untuk mengambil data dari Supabase
async function fetchData() {
  const { data, error } = await supabase
    .from("notes") // Ganti dengan nama tabelmu
    .select("*");

  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Data fetched:", data);
    updateUI(data); // Fungsi untuk menampilkan data di UI
  }
}

// Fungsi untuk mengupdate UI dengan data yang diterima
function updateUI(data) {
  // Misalnya, menampilkan nama produk
  document.getElementById("output-nama-produk").textContent = data[0]?.nama_produk || "Tutup Botol A";

  // Menampilkan data SPD, PRS, MM, dsb
  const fields = ["SPD", "PRS", "MM"];
  fields.forEach(field => {
    const rows = document.querySelectorAll(`#output-${field} td`);
    for (let i = 1; i < rows.length; i++) {
      rows[i].textContent = data[0]?.[`${field}_${i}`] || "...";
    }
  });

  // Menampilkan data tambahan (Holding Pressure, Inject Time, dll)
  const additionalFields = [
    "Inject Delay Time", "Inject Time", "Holding PRS Select", "Hold Tranf PRS",
    "Inject Stage Set", "Hold Stage Set", "Inject Gate Use", "Inject Fast Valve Use"
  ];

  additionalFields.forEach(field => {
    const element = document.querySelector(`#output-${field}`);
    if (element) {
      element.textContent = data[0]?.[field] || "...";
    }
  });

  // Untuk Charge & Suck
  const chargeSuckFields = ["SPD", "POS", "BPrs"];
  chargeSuckFields.forEach(field => {
    const rows = document.querySelectorAll(`#output-charge-suck-${field} td`);
    for (let i = 1; i < rows.length; i++) {
      rows[i].textContent = data[0]?.[`${field}_${i}`] || "...";
    }
  });

  // Menampilkan data Cooling Time
  const coolingTimeFields = ["Cooling Time"];
  coolingTimeFields.forEach(field => {
    const element = document.querySelector(`#output-${field}`);
    if (element) {
      element.textContent = data[0]?.[field] || "...";
    }
  });

  // Menampilkan data untuk Hot Runner, MTC, dan Keterangan
  const hotRunnerFields = ["Hotrunner_1", "Hotrunner_2", "Hotrunner_3", "Hotrunner_4"];
  hotRunnerFields.forEach(field => {
    const element = document.querySelector(`#output-${field}`);
    if (element) {
      element.textContent = data[0]?.[field] || "...";
    }
  });

  // Menampilkan data MTC
  const mtcFields = ["MTC 1", "MTC 2"];
  mtcFields.forEach(field => {
    const element = document.querySelector(`#output-${field}`);
    if (element) {
      element.textContent = data[0]?.[field] || "...";
    }
  });

  // Menampilkan Keterangan
  const keteranganField = "Keterangan";
  const keteranganElement = document.querySelector(`#output-${keteranganField}`);
  if (keteranganElement) {
    keteranganElement.textContent = data[0]?.[keteranganField] || "...";
  }
}

// Memanggil fungsi untuk mengambil data dari Supabase saat halaman dimuat
document.addEventListener("DOMContentLoaded", fetchData);
