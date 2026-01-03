-- CLEANUP SCRIPT: Delete all database objects
-- Run this in Supabase SQL Editor to completely reset the database

-- 1. Drop the trigger
drop trigger if exists on_auth_user_created on auth.users;

-- 2. Drop the function
drop function if exists public.handle_new_user();

-- 3. Drop the profiles table (this will cascade delete everything)
drop table if exists public.profiles;

-- Done! All database objects have been deleted.
