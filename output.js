// output.js

const supabaseUrl = 'https://qxtusmvrupffinszflij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8'; // Ganti dengan anon key kamu
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function fetchData() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error('❌ Gagal mengambil data:', error.message);
    return;
  }

  tampilkanDataLengkap(data);
}

function tampilkanDataLengkap(data) {
  const container = document.getElementById('output-container');
  container.innerHTML = '';

  data.forEach((item) => {
    const div = document.createElement('div');
    div.style.border = '1px solid #ccc';
    div.style.padding = '15px';
    div.style.margin = '10px';
    div.style.borderRadius = '10px';
    div.style.backgroundColor = '#f5faff';

    div.innerHTML = `
      <h2>🛠️ ${item.nama_produk}</h2>

      <h4>Injection:</h4>
      SPD: ${item.spd_1st}, ${item.spd_2st}, ${item.spd_3st}, ${item.spd_4st}, ${item.spd_5st}<br>
      PRS: ${item.prs_1st}, ${item.prs_2st}, ${item.prs_3st}, ${item.prs_4st}, ${item.prs_5st}<br>
      MM: ${item.mm_1st}, ${item.mm_2st}, ${item.mm_3st}, ${item.mm_4st}, ${item.mm_5st}

      <h4>Holding:</h4>
      SPD: ${item.holding_spd1}, ${item.holding_spd2}<br>
      PRS: ${item.holding_prs1}, ${item.holding_prs2}<br>
      Time: ${item.holding_time1}, ${item.holding_time2}<br>
      PRS Select: ${item.holding_prs_select}<br>
      Hold Tranf PRS: ${item.hold_tranf_prs}

      <h4>Waktu:</h4>
      Inject Delay: ${item.inject_delay_time}<br>
      Inject Time: ${item.inject_time}

      <h4>Fitur:</h4>
      Inject Stage Set: ${item.inject_stage_set}<br>
      Hold Stage Set: ${item.hold_stage_set}<br>
      Gate Use: ${item.inject_gate_use}<br>
      Fast Valve Use: ${item.inject_fast_valve_use}

      <h4>Charge & Suck:</h4>
      Charge SPD: ${item.charge_suck_spd1}, ${item.charge_suck_spd2}, ${item.charge_suck_spd3}, ${item.charge_suck_spd4}<br>
      Charge MM: ${item.charge_suck_mm1}, ${item.charge_suck_mm2}, ${item.charge_suck_mm3}, ${item.charge_suck_mm4}<br>
      Charge BAR: ${item.charge_suck_bar1}, ${item.charge_suck_bar2}, ${item.charge_suck_bar3}, ${item.charge_suck_bar4}

      <h4>Suck Back:</h4>
      SPD: ${item.suck_back_spd1}, ${item.suck_back_spd2}<br>
      POS: ${item.suck_back_pos1}, ${item.suck_back_pos2}<br>
      BPRS: ${item.suck_back_bprs1}, ${item.suck_back_bprs2}

      <h4>Temperatur:</h4>
      Cooling Time: ${item.cooling_time}<br>
      Nozzle: ${item.nozzle}<br>
      Heater 1-4: ${item.heater1}, ${item.heater2}, ${item.heater3}, ${item.heater4}

      <h4>MTC & Hotrunner:</h4>
      MTC1: ${item.mtc1}, MTC2: ${item.mtc2}<br>
      Hotrunner CH 1–6: ${item.hotrunner_channel_1}, ${item.hotrunner_channel_2}, ${item.hotrunner_channel_3}, ${item.hotrunner_channel_4}, ${item.hotrunner_channel_5}, ${item.hotrunner_channel_6}

      <h4>Keterangan:</h4>
      ${item.keterangan || '-'}
    `;

    container.appendChild(div);
  });
}

fetchData();
