# 🧩 Turbo Starter — Next.js + Tailwind + Zustand + R3F + i18n

Starter monorepo moderne et typé TypeScript, prêt pour construire des expériences web interactives avec :

- 🔥 [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 💡 [Zustand](https://github.com/pmndrs/zustand) pour la gestion d’état globale
- 🌍 i18n custom avec JSON, Zod, et `LanguageContext`
- 🧠 Validation typée des traductions via [`zod`](https://zod.dev)
- 🗺️ Sitemap automatique avec [`next-sitemap`](https://github.com/iamvishnusankar/next-sitemap)
- 🎥 Scène 3D persistante avec [`@react-three/fiber`](https://docs.pmnd.rs/react-three-fiber) et [`tunnel-rat`](https://github.com/pmndrs/tunnel-rat)
- 🧪 Commandes CLI pour valider le contenu des fichiers `.json`
- 🧰 Structure extensible avec Strapi, CMS, API, etc.

---

## 📂 Structure du monorepo

/ ├── apps/
│ ├── web/ → Frontend Next.js avec App Router
│ └── cms/ → (réservé pour Strapi)
├── packages/
│ ├── ui/ → Design system React + Tailwind + Radix
│ └── lib/ → Utilitaires partagés (zod, i18n, etc.)


---

## ⚙️ Prérequis

- Node.js `>=18`
- PNPM (monorepo & gestion des workspaces)  
  👉 [https://pnpm.io/installation](https://pnpm.io/installation)

---

## 🚀 Commandes globales

> 📦 À lancer depuis la racine du repo :

| Commande              | Effet                                                           |
|-----------------------|-----------------------------------------------------------------|
| `pnpm dev:web`        | Démarre l’app web (Next.js) en développement                   |
| `pnpm build:web`      | Compile le frontend pour la production                         |
| `pnpm dev:cms`        | (réservé pour Strapi, à venir)                                 |
| `pnpm build:cms`      | (réservé pour Strapi, à venir)                                 |
| `pnpm clean`          | Nettoie les fichiers de build (`.next`, `dist`, etc.)          |
| `pnpm lint`           | Lint les fichiers de tous les packages                         |

---

## 📄 Commandes supplémentaires dans `apps/web`

- `pnpm validate:i18n` → Vérifie que les fichiers `fr.json`, `en.json`, etc. sont valides selon le schéma Zod
- `pnpm generate:sitemap` (via postbuild) → Génère automatiquement `sitemap.xml` et `robots.txt`

---

## 🧪 Tests 3D intégrés

- Le composant `<Canvas>` est **persistant** (pas de perte de contexte WebGL)
- Les scènes sont injectées dynamiquement via [`tunnel-rat`](https://github.com/pmndrs/tunnel-rat)
- Résolution des conflits Next.js / R3F déjà incluse

---

## 🗺️ À venir dans `v1.1.0`

- Strapi intégré comme CMS `apps/cms/`
- Gestion des articles de blog multi-langue
- Hook `useScopedT()` pour un accès typé aux traductions
- Tests de production avec preview dynamique 3D

---

## 📝 License

MIT — libre d’usage et d’adaptation

