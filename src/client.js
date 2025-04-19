import {createClient} from "@supabase/supabase-js"

const URL = 'https://okwocafwozwvjqfteduf.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rd29jYWZ3b3p3dmpxZnRlZHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNDMxMzEsImV4cCI6MjA2MDYxOTEzMX0.54TMzimE5R6uz3OzdbabiwOGDvsXFUjvYgqTR6RpUI8'

export const supabase = createClient(URL, API_KEY);