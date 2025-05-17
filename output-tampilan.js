// output-tampilan.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Ganti dengan URL dan anon key Supabase kamu
const SUPABASE_URL = 'https://qxtusmvrupffinszflij.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchAndDisplayData() {
  const { data, error } = await supabaseClient
    .from('notes') // ganti dengan nama tabel kamu jika beda
    .select()
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  if (!data || data.length === 0) {
    console.log('Data kosong');
    return;
  }

  const first = data[0];

  // Update elemen HTML sesuai field
  document.getElementById('nama_produk').textContent = first.nama_produk || '-';

  document.getElementById('spd_1st').textContent = first.spd_1st || '-';
  document.getElementById('spd_2st').textContent = first.spd_2st || '-';
  document.getElementById('spd_3st').textContent = first.spd_3st || '-';
  document.getElementById('spd_4st').textContent = first.spd_4st || '-';
  document.getElementById('spd_5st').textContent = first.spd_5st || '-';

  document.getElementById('prs_1st').textContent = first.prs_1st || '-';
  document.getElementById('prs_2st').textContent = first.prs_2st || '-';
  document.getElementById('prs_3st').textContent = first.prs_3st || '-';
  document.getElementById('prs_4st').textContent = first.prs_4st || '-';
  document.getElementById('prs_5st').textContent = first.prs_5st || '-';

  document.getElementById('mm_1st').textContent = first.mm_1st || '-';
  document.getElementById('mm_2st').textContent = first.mm_2st || '-';
  document.getElementById('mm_3st').textContent = first.mm_3st || '-';
  document.getElementById('mm_4st').textContent = first.mm_4st || '-';
  document.getElementById('mm_5st').textContent = first.mm_5st || '-';

  document.getElementById('holding_prs1').textContent = first.holding_prs1 || '-';
  document.getElementById('holding_prs2').textContent = first.holding_prs2 || '-';

  document.getElementById('holding_spd1').textContent = first.holding_spd1 || '-';
  document.getElementById('holding_spd2').textContent = first.holding_spd2 || '-';

  document.getElementById('holding_time1').textContent = first.holding_time1 || '-';
  document.getElementById('holding_time2').textContent = first.holding_time2 || '-';

  document.getElementById('inject_delay_time').textContent = first.inject_delay_time || '-';
  document.getElementById('inject_time').textContent = first.inject_time || '-';
  document.getElementById('holding_prs_select').textContent = first.holding_prs_select || '-';
  document.getElementById('hold_tranf_prs').textContent = first.hold_tranf_prs || '-';
  document.getElementById('inject_stage_set').textContent = first.inject_stage_set || '-';
  document.getElementById('hold_stage_set').textContent = first.hold_stage_set || '-';
  document.getElementById('inject_gate_use').textContent = first.inject_gate_use || '-';
  document.getElementById('inject_fast_valve_use').textContent = first.inject_fast_valve_use || '-';

  document.getElementById('charge_suck_spd1').textContent = first.charge_suck_spd1 || '-';
  document.getElementById('charge_suck_spd2').textContent = first.charge_suck_spd2 || '-';
  document.getElementById('charge_suck_spd3').textContent = first.charge_suck_spd3 || '-';
  document.getElementById('charge_suck_spd4').textContent = first.charge_suck_spd4 || '-';

  document.getElementById('charge_suck_mm1').textContent = first.charge_suck_mm1 || '-';
  document.getElementById('charge_suck_mm2').textContent = first.charge_suck_mm2 || '-';
  document.getElementById('charge_suck_mm3').textContent = first.charge_suck_mm3 || '-';
  document.getElementById('charge_suck_mm4').textContent = first.charge_suck_mm4 || '-';

  document.getElementById('charge_suck_bar1').textContent = first.charge_suck_bar1 || '-';
  document.getElementById('charge_suck_bar2').textContent = first.charge_suck_bar2 || '-';
  document.getElementById('charge_suck_bar3').textContent = first.charge_suck_bar3 || '-';
  document.getElementById('charge_suck_bar4').textContent = first.charge_suck_bar4 || '-';

  document.getElementById('suck_back_spd1').textContent = first.suck_back_spd1 || '-';
  document.getElementById('suck_back_spd2').textContent = first.suck_back_spd2 || '-';
  document.getElementById('suck_back_pos1').textContent = first.suck_back_pos1 || '-';
  document.getElementById('suck_back_pos2').textContent = first.suck_back_pos2 || '-';
  document.getElementById('suck_back_bprs1').textContent = first.suck_back_bprs1 || '-';
  document.getElementById('suck_back_bprs2').textContent = first.suck_back_bprs2 || '-';

  document.getElementById('cooling_time').textContent = first.cooling_time || '-';
  document.getElementById('nozzle').textContent = first.nozzle || '-';

  document.getElementById('heater1').textContent = first.heater1 || '-';
  document.getElementById('heater2').textContent = first.heater2 || '-';
  document.getElementById('heater3').textContent = first.heater3 || '-';
  document.getElementById('heater4').textContent = first.heater4 || '-';

  document.getElementById('mtc1').textContent = first.mtc1 || '-';
  document.getElementById('mtc2').textContent = first.mtc2 || '-';

  document.getElementById('hotrunner_channel_1').textContent = first.hotrunner_channel_1 || '-';
  document.getElementById('hotrunner_channel_2').textContent = first.hotrunner_channel_2 || '-';
  document.getElementById('hotrunner_channel_3').textContent = first.hotrunner_channel_3 || '-';
  document.getElementById('hotrunner_channel_4').textContent = first.hotrunner_channel_4 || '-';
  document.getElementById('hotrunner_channel_5').textContent = first.hotrunner_channel_5 || '-';
  document.getElementById('hotrunner_channel_6').textContent = first.hotrunner_channel_6 || '-';
  document.getElementById('hotrunner_channel_7').textContent = first.hotrunner_channel_7 || '-';
  document.getElementById('hotrunner_channel_8').textContent = first.hotrunner_channel_8 || '-';
  document.getElementById('hotrunner_channel_9').textContent = first.hotrunner_channel_9 || '-';
  document.getElementById('hotrunner_channel_10').textContent = first.hotrunner_channel_10 || '-';
}

// Jalankan fungsi saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', fetchAndDisplayData);
