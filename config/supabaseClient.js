import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vrlajoblycdliksecozy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZybGFqb2JseWNkbGlrc2Vjb3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MDY5MDcsImV4cCI6MjAxNjQ4MjkwN30.RLL8lLFE5xK_VmJtc0Jc5b8CVFyH1w_pvs2MdtFC0fI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
