// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uthgaaydcbfvjaupurhb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aGdhYXlkY2JmdmphdXB1cmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3OTQ1NTksImV4cCI6MjA1ODM3MDU1OX0.0o28oFho2SBN1zUsM3Jnxz7r0hcTZTK5DWI8hzObj9s";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);