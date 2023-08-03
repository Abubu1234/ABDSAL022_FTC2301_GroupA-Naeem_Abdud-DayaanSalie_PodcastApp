
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vpikoohnvnnowkanxcef.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwaWtvb2hudm5ub3drYW54Y2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzODUxMjYsImV4cCI6MjAwNTk2MTEyNn0.T-lK2x4UBtUWKo--61rdy2xn55zJUWRfkRu85p6CXpQ"
export const supabase = createClient(supabaseUrl, supabaseKey)
