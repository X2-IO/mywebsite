import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const envPath = resolve(root, ".env.local");

if (!existsSync(envPath)) {
  console.error("Missing .env.local");
  process.exit(1);
}

const raw = readFileSync(envPath, "utf8");
const lines = raw.split(/\r?\n/).filter(Boolean);
const map = Object.fromEntries(
  lines.map((line) => {
    const i = line.indexOf("=");
    if (i === -1) return [line, ""];
    return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
  }),
);

const url = map.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key = map.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const hostOk = /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(
  url.replace(/\/$/, ""),
);
const badRestSuffix = /\/rest\/v1\/?$/i.test(url);

console.log(
  JSON.stringify(
    {
      envFile: ".env.local present",
      NEXT_PUBLIC_SUPABASE_URL: {
        defined: Boolean(url),
        useBaseUrlOnly: !badRestSuffix,
        issue: badRestSuffix
          ? "URL should be https://<ref>.supabase.co (no /rest/v1/) for @supabase/supabase-js"
          : null,
        matchesExpectedHostPattern: hostOk,
      },
      NEXT_PUBLIC_SUPABASE_ANON_KEY: {
        defined: Boolean(key),
        looksLikeJwt: key.startsWith("eyJ"),
      },
    },
    null,
    2,
  ),
);

if (badRestSuffix || !hostOk || !key.startsWith("eyJ")) {
  process.exitCode = 1;
}
