// main.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://qxtusmvrupffinszflij.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8'
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById('form-setelan')

// Fungsi bantu ubah "" jadi null, dan angka string jadi number
function normalizeValue(val) {
  if (val === '' || val === undefined) return null
  if (/^\d+(\.\d+)?$/.test(val)) return Number(val)
  return val
}

form.addEventListener('submit', async (e) => {
  e.preventDefault() // cegah reload halaman

  const data = {
    nama_produk: normalizeValue(form.nama_produk.value),
    jumlah_step: normalizeValue(form.jumlah_step.value),

    spd_1st: normalizeValue(form.spd_1st.value),
    spd_2st: normalizeValue(form.spd_2st.value),
    spd_3st: normalizeValue(form.spd_3st.value),
    spd_4st: normalizeValue(form.spd_4st.value),
    spd_5st: normalizeValue(form.spd_5st.value),

    prs_1st: normalizeValue(form.prs_1st.value),
    prs_2st: normalizeValue(form.prs_2st.value),
    prs_3st: normalizeValue(form.prs_3st.value),
    prs_4st: normalizeValue(form.prs_4st.value),
    prs_5st: normalizeValue(form.prs_5st.value),

    mm_1st: normalizeValue(form.mm_1st.value),
    mm_2st: normalizeValue(form.mm_2st.value),
    mm_3st: normalizeValue(form.mm_3st.value),
    mm_4st: normalizeValue(form.mm_4st.value),
    mm_5st: normalizeValue(form.mm_5st.value),

    holding_spd1: normalizeValue(form.holding_spd1.value),
    holding_spd2: normalizeValue(form.holding_spd2.value),
    holding_prs1: normalizeValue(form.holding_prs1.value),
    holding_prs2: normalizeValue(form.holding_prs2.value),
    holding_time1: normalizeValue(form.holding_time1.value),
    holding_time2: normalizeValue(form.holding_time2.value),

    inject_delay_time: normalizeValue(form.inject_delay_time.value),
    inject_time: normalizeValue(form.inject_time.value),

    holding_prs_select: normalizeValue(form.holding_prs_select.value),
    hold_tranf_prs: normalizeValue(form.hold_tranf_prs.value),

    inject_stage_set: normalizeValue(form.inject_stage_set.value),
    hold_stage_set: normalizeValue(form.hold_stage_set.value),
    inject_gate_use: normalizeValue(form.inject_gate_use.value),
    inject_fast_valve_use: normalizeValue(form.inject_fast_valve_use.value),

    charge_suck_spd1: normalizeValue(form.charge_suck_spd1.value),
    charge_suck_spd2: normalizeValue(form.charge_suck_spd2.value),
    charge_suck_spd3: normalizeValue(form.charge_suck_spd3.value),
    charge_suck_spd4: normalizeValue(form.charge_suck_spd4.value),

    charge_suck_mm1: normalizeValue(form.charge_suck_mm1.value),
    charge_suck_mm2: normalizeValue(form.charge_suck_mm2.value),
    charge_suck_mm3: normalizeValue(form.charge_suck_mm3.value),
    charge_suck_mm4: normalizeValue(form.charge_suck_mm4.value),

    charge_suck_bar1: normalizeValue(form.charge_suck_bar1.value),
    charge_suck_bar2: normalizeValue(form.charge_suck_bar2.value),
    charge_suck_bar3: normalizeValue(form.charge_suck_bar3.value),
    charge_suck_bar4: normalizeValue(form.charge_suck_bar4.value),

    suck_back_spd1: normalizeValue(form.suck_back_spd1.value),
    suck_back_spd2: normalizeValue(form.suck_back_spd2.value),
    suck_back_pos1: normalizeValue(form.suck_back_pos1.value),
    suck_back_pos2: normalizeValue(form.suck_back_pos2.value),
    suck_back_bprs1: normalizeValue(form.suck_back_bprs1.value),
    suck_back_bprs2: normalizeValue(form.suck_back_bprs2.value),

    cooling_time: normalizeValue(form.cooling_time.value),
    nozzle: normalizeValue(form.nozzle.value),

    heater1: normalizeValue(form.heater1.value),
    heater2: normalizeValue(form.heater2.value),
    heater3: normalizeValue(form.heater3.value),
    heater4: normalizeValue(form.heater4.value),

    mtc1: normalizeValue(form.mtc1.value),
    mtc2: normalizeValue(form.mtc2.value),

    hotrunner_channel_1: normalizeValue(form.hotrunner_channel_1.value),
    hotrunner_channel_2: normalizeValue(form.hotrunner_channel_2.value),
    hotrunner_channel_3: normalizeValue(form.hotrunner_channel_3.value),
    hotrunner_channel_4: normalizeValue(form.hotrunner_channel_4.value),
    hotrunner_channel_5: normalizeValue(form.hotrunner_channel_5.value),
    hotrunner_channel_6: normalizeValue(form.hotrunner_channel_6.value),
    hotrunner_channel_7: normalizeValue(form.hotrunner_channel_7.value),
    hotrunner_channel_8: normalizeValue(form.hotrunner_channel_8.value),
    hotrunner_channel_9: normalizeValue(form.hotrunner_channel_9.value),
    hotrunner_channel_10: normalizeValue(form.hotrunner_channel_10.value),

    keterangan: normalizeValue(form.keterangan.value),
  }

  try {
    const { data: insertData, error } = await supabase
      .from('notes') // sesuaikan nama tabel jika beda
      .insert([data])

    if (error) throw error

    alert('Data berhasil disimpan!')
    form.reset()
  } catch (error) {
    alert('Gagal menyimpan data: ' + error.message)
  }
})

//*step*//
document.addEventListener('DOMContentLoaded', () => {
  const selectStep = document.getElementById('jumlah-step');

  function updateInjectionInputs() {
    const stepCount = parseInt(selectStep.value);
    ['injection-spd', 'injection-prs', 'injection-mm'].forEach(id => {
      const container = document.getElementById(id);
      if (!container) return;
      const inputs = container.querySelectorAll('input[data-step]');
      inputs.forEach(input => {
        const step = parseInt(input.getAttribute('data-step'));
        if (step <= stepCount) {
          input.style.display = 'inline-block';
        } else {
          input.style.display = 'none';
          input.value = ''; // bersihkan nilai yg tidak dipakai
        }
      });
    });
  }

  updateInjectionInputs();

  selectStep.addEventListener('change', updateInjectionInputs);
});
