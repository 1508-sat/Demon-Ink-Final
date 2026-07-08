import { createClient } from '@supabase/supabase-js'

// Leemos las variables de entorno que configuramos en el .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Creamos y exportamos el cliente de conexión
export const supabase = createClient(supabaseUrl, supabaseAnonKey)