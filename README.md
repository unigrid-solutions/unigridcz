# Unigrid Solutions - Webová prezentace

Moderní webová stránka pro společnost Unigrid Solutions, specializující se na automatizaci, měření a regulaci.

## Technologie

- **Next.js 16** - React framework s podporou Static Site Generation (SSG)
- **TypeScript** - Type-safe vývoj
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Moderní UI knihovna

## Lokální vývoj

### Prerekvizity

- Node.js 18+ a npm

### Instalace

```bash
# Instalace závislostí
npm install
```

### Spuštění dev serveru

```bash
# Spuštění development serveru na http://localhost:3000
npm run dev
```

## Build a Export

### Static Export pro hosting

Tento projekt je nakonfigurován pro static export, který můžete nahrát na S3, Netlify, Vercel, nebo jakýkoliv jiný HTML hosting.

```bash
# Build projektu (vytvoří statické soubory v /out složce)
npm run build
```

Po úspěšném buildu najdete statické soubory ve složce `out/`. Tyto soubory můžete nahrát na váš hosting.

## Deployment

### Amazon S3

1. **Vytvořte S3 bucket**
   ```bash
   aws s3 mb s3://unigrid-web
   ```

2. **Nakonfigurujte bucket pro static website hosting**
   ```bash
   aws s3 website s3://unigrid-web --index-document index.html
   ```

3. **Nahrajte soubory**
   ```bash
   aws s3 sync out/ s3://unigrid-web --delete
   ```

4. **Nastavte public přístup** (v AWS Console nebo přes CLI)

### Netlify

1. Nainstalujte Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=out
   ```

### Vercel

1. Nainstalujte Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### Jiný HTML hosting (FTP/SFTP)

1. Build projektu:
   ```bash
   npm run build
   ```

2. Nahrajte obsah složky `out/` na váš server pomocí FTP klienta (FileZilla, Cyberduck, atd.)

## Struktura projektu

```
unigridcz/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globální styly a Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React komponenty
│   ├── Header.tsx        # Navigace
│   └── Footer.tsx        # Patička
├── public/               # Statické soubory
│   ├── logo.svg         # Logo Unigrid
│   └── favicon.svg      # Favicon
├── next.config.ts       # Next.js konfigurace (static export)
├── tailwind.config.ts   # Tailwind konfigurace
└── package.json         # Dependencies a scripty
```

## Přizpůsobení

### Barvy

Hlavní barevná paleta je definována v `tailwind.config.ts`:
- **Primary (modrá)**: `#2563eb`
- **Neutral (šedá)**: `#6b7280`

### Obsah

Upravte obsah v souboru `app/page.tsx`:
- Hero sekce
- Služby
- O nás
- Kontakt

### Logo

Logo najdete v `public/logo.svg` a můžete ho upravit podle potřeby.

## Licence

© 2025 Unigrid Solutions. Všechna práva vyhrazena.
