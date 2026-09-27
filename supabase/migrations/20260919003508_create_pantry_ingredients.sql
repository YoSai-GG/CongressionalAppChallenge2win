/*
# Create pantry_ingredients table (single-tenant, no auth)

1. New Tables
- `pantry_ingredients`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the ingredient name
  - `quantity` (numeric, not null, default 0) — amount on hand
  - `unit` (text, not null) — unit of measure (e.g. cups, oz, pieces)
  - `category` (text, not null) — food category (e.g. Dairy, Produce, Pantry)
  - `expiration_date` (date, nullable) — when the ingredient expires, if applicable
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `pantry_ingredients`.
- Allow anon + authenticated full CRUD because the data is intentionally shared/public (no sign-in screen).
3. Indexes
- Index on `category` for filtering by category.
- Index on `expiration_date` for sorting/filtering by expiry.
*/

CREATE TABLE IF NOT EXISTS pantry_ingredients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  quantity numeric NOT NULL DEFAULT 0,
  unit text NOT NULL,
  category text NOT NULL,
  expiration_date date,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE pantry_ingredients ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_pantry_ingredients" ON pantry_ingredients;
CREATE POLICY "anon_select_pantry_ingredients"
ON pantry_ingredients FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_pantry_ingredients" ON pantry_ingredients;
CREATE POLICY "anon_insert_pantry_ingredients"
ON pantry_ingredients FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_pantry_ingredients" ON pantry_ingredients;
CREATE POLICY "anon_update_pantry_ingredients"
ON pantry_ingredients FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_pantry_ingredients" ON pantry_ingredients;
CREATE POLICY "anon_delete_pantry_ingredients"
ON pantry_ingredients FOR DELETE
TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_pantry_ingredients_category ON pantry_ingredients(category);
CREATE INDEX IF NOT EXISTS idx_pantry_ingredients_expiration_date ON pantry_ingredients(expiration_date);
