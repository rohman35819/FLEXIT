import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://qxtusmvrupffinszflij.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8'
);

// helper
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? '-';
}

// daftar kolom yang perlu di‑render
const fields = [
  'nama_produk',
  'spd_1st','spd_2st','spd_3st','spd_4st','spd_5st',
  'prs_1st','prs_2st','prs_3st','prs_4st','prs_5st',
  'mm_1st','mm_2st','mm_3st','mm_4st','mm_5st',
  'holding_prs1','holding_prs2','holding_spd1','holding_spd2',
  'holding_time1','holding_time2',
  'inject_delay_time','inject_time','holding_prs_select',
  'hold_tranf_prs','inject_stage_set','hold_stage_set',
  'inject_gate_use','inject_fast_valve_use',
  'charge_suck_spd1','charge_suck_spd2','charge_suck_spd3','charge_suck_spd4',
  'charge_suck_mm1','charge_suck_mm2','charge_suck_mm3','charge_suck_mm4',
  'charge_suck_bar1','charge_suck_bar2','charge_suck_bar3','charge_suck_bar4',
  'suck_back_spd1','suck_back_spd2','suck_back_pos1','suck_back_pos2',
  'suck_back_bprs1','suck_back_bprs2',
  'cooling_time','nozzle',
  'heater1','heater2','heater3','heater4',
  'mtc1','mtc2',
  'hotrunner_channel_1','hotrunner_channel_2','hotrunner_channel_3',
  'hotrunner_channel_4','hotrunner_channel_5','hotrunner_channel_6',
  'hotrunner_channel_7','hotrunner_channel_8','hotrunner_channel_9',
  'hotrunner_channel_10',
  'keterangan','jumlah_step'
];

async function fetchAndDisplayData() {
  const id = new URLSearchParams(location.search).get('id');
  if (!id) return;

  const { data, error } = await supabase
    .from('notes')
    .select(fields.join(','))
    .eq('id', id)
    .single();          // <= hanya 1 baris

  if (error) { console.error(error); return; }
  fields.forEach(f => setText(f, data[f]));
}

window.addEventListener('DOMContentLoaded', fetchAndDisplayData);
window.addEventListener('pageshow', e => { if (e.persisted) fetchAndDisplayData(); });
