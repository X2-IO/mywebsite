-- Run in Supabase SQL Editor

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

-- Public contact form: allow anonymous inserts only
create policy "Anyone can submit contact"
  on public.contacts
  for insert
  to anon, authenticated
  with check (true);

-- No public read/update/delete (admin uses service role on server)

-- Auth: create admin user in Dashboard → Authentication, then set ADMIN_EMAILS in .env.local
