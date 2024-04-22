import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mgnmlbwaravqlbuhdkqg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbm1sYndhcmF2cWxidWhka3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTEzNDQsImV4cCI6MjAyODg2NzM0NH0.zZq5HO-5FGwh6V5P5AJqJpX-97D01E-p9dvHYvJCWGw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
