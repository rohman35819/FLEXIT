
const { createClient } = require('@supabase/supabase-js');

// Ganti dengan URL dan API key Supabase Anda
const supabaseUrl = 'https://qxtusmvrupffinszflij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHVzbXZydXBmZmluc3pmbGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDc3ODEsImV4cCI6MjA2MjIyMzc4MX0.0y0EWd0CG3NcKO5icbyczeakDMN57UIBGrBBTX2x1Z8';
const supabase = createClient(supabaseUrl, supabaseKey);

async function addData() {
  const { data, error } = await supabase
    .from('notes')  // Ganti dengan nama tabel yang sesuai
    .insert([
      { title: 'Sample Title', content: 'This is a sample note' }
    ]);

  if (error) {
    console.error('Error adding data:', error);
  } else {
    console.log('Data added successfully:', data);
  }
}

addData();
