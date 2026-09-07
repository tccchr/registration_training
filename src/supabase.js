import { createClient } from '@supabase/supabase-js';

// Supabase browser credentials are public client configuration.
// Database security must be enforced with Supabase RLS and controlled RPC permissions.
// Prefer Vercel Environment Variables when available; the publishable key fallback
// is safe for a frontend application and prevents a blank screen when env vars
// have not been configured yet.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://ubvahykodwxsibefrlns.supabase.co';

const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_lQkzH-VjjoCrK7Px2OT70g_e9dO2IgY';

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    // เก็บ session ใน localStorage และต่ออายุ token อัตโนมัติ
    persistSession: true,
    autoRefreshToken: true,
    // อ่าน session จาก URL หลัง OAuth redirect (Microsoft 365 login)
    detectSessionInUrl: true,
  },
});
