// main.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://qxtusmvrupffinszflij.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8'
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById('form-setelan')

form.addEventListener('submit', async (e) => {
  e.preventDefault() // cegah reload halaman

  // Ambil semua nilai dari form input
  const data = {
    nama_produk: form.nama_produk.value,
    jumlah_step: form.jumlah_step.value,
    spd_1st: form.spd_1st.value,
    spd_2st: form.spd_2st.value,
    spd_3st: form.spd_3st.value,
    spd_4st: form.spd_4st.value,
    spd_5st: form.spd_5st.value,
    prs_1st: form.prs_1st.value,
    prs_2st: form.prs_2st.value,
    prs_3st: form.prs_3st.value,
    prs_4st: form.prs_4st.value,
    prs_5st: form.prs_5st.value,
    mm_1st: form.mm_1st.value,
    mm_2st: form.mm_2st.value,
    mm_3st: form.mm_3st.value,
    mm_4st: form.mm_4st.value,
    mm_5st: form.mm_5st.value,
    holding_spd1: form.holding_spd1.value,
    holding_spd2: form.holding_spd2.value,
    holding_prs1: form.holding_prs1.value,
    holding_prs2: form.holding_prs2.value,
    holding_time1: form.holding_time1.value,
    holding_time2: form.holding_time2.value,
    inject_delay_time: form.inject_delay_time.value,
    inject_time: form.inject_time.value,
    holding_prs_select: form.holding_prs_select.value,
    hold_tranf_prs: form.hold_tranf_prs.value,
    inject_stage_set: form.inject_stage_set.value,
    hold_stage_set: form.hold_stage_set.value,
    inject_gate_use: form.inject_gate_use.value,
    inject_fast_valve_use: form.inject_fast_valve_use.value,
    charge_suck_spd1: form.charge_suck_spd1.value,
    charge_suck_spd2: form.charge_suck_spd2.value,
    charge_suck_spd3: form.charge_suck_spd3.value,
    charge_suck_spd4: form.charge_suck_spd4.value,
    charge_suck_mm1: form.charge_suck_mm1.value,
    charge_suck_mm2: form.charge_suck_mm2.value,
    charge_suck_mm3: form.charge_suck_mm3.value,
    charge_suck_mm4: form.charge_suck_mm4.value,
    charge_suck_bar1: form.charge_suck_bar1.value,
    charge_suck_bar2: form.charge_suck_bar2.value,
    charge_suck_bar3: form.charge_suck_bar3.value,
    charge_suck_bar4: form.charge_suck_bar4.value,
    suck_back_spd1: form.suck_back_spd1.value,
    suck_back_spd2: form.suck_back_spd2.value,
    suck_back_pos1: form.suck_back_pos1.value,
    suck_back_pos2: form.suck_back_pos2.value,
    suck_back_bprs1: form.suck_back_bprs1.value,
    suck_back_bprs2: form.suck_back_bprs2.value,
    cooling_time: form.cooling_time.value,
    nozzle: form.nozzle.value,
    heater1: form.heater1.value,
    heater2: form.heater2.value,
    heater3: form.heater3.value,
    heater4: form.heater4.value,
    mtc1: form.mtc1.value,
    mtc2: form.mtc2.value,
    hotrunner_channel_1: form.hotrunner_channel_1.value,
    hotrunner_channel_2: form.hotrunner_channel_2.value,
    hotrunner_channel_3: form.hotrunner_channel_3.value,
    hotrunner_channel_4: form.hotrunner_channel_4.value,
    hotrunner_channel_5: form.hotrunner_channel_5.value,
    hotrunner_channel_6: form.hotrunner_channel_6.value,
    hotrunner_channel_7: form.hotrunner_channel_7.value,
    hotrunner_channel_8: form.hotrunner_channel_8.value,
    hotrunner_channel_9: form.hotrunner_channel_9.value,
    hotrunner_channel_10: form.hotrunner_channel_10.value,
    keterangan: form.keterangan.value,
  }

  try {
    const { data: insertData, error } = await supabase
      .from('notes') // sesuaikan dengan nama tabelmu
      .insert([data])

    if (error) throw error
    alert('Data berhasil disimpan!')
    form.reset()
  } catch (error) {
    alert('Gagal menyimpan data: ' + error.message)
  }
})
