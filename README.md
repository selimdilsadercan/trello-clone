- [x] "npx create-next-app@latest {project-name}"
- [x] copy .prettierrc
- [x] change layout, delete assets, change metadata
- [x] clear page.tsx // balance page
- [x] create .env file and add .env to .gitignore

- [x] "npx shadcn-ui@latest init", change tailwind.config.js to tailwind.config.ts
- [x] html, body, :root { height: 100% } thing at app/globals.css
- [x] "npx shadcn-ui@latest add button" to add button

- [x] "npm i @clerk/nextjs"
- [x] create clerk project https://dashboard.clerk.com/
- [x] add .env keys and .env after-sign-out shits
- [x] add providers/clerk-provider.tsx and add to layout.tsx inside body
- [x] add middleware.ts
- [x] add app/(auth) and add select-org

- [x] "npm i -D prisma"
- [x] "npm i @prisma/client"
- [x] "npx prisma init"
- [x] create coackroachdb database (use different email everytime)
- [x] copy the password key
- [x] copy the general connection key, change REVEAL_KEY to copied password key and write this to .env
- [x] in schema.prisma change the provider to cockroachdb
- [x] create schemas
- [x] npx prisma generate
- [x] npx prisma db push
- [x] create lib/db.ts

- [ ] create edgestore project
- [ ] "npm i @edgestore/server @edgestore/react zod"
- [ ] create app/api/edgestore/[...edgestore]/route.ts
- [ ] create lib/edgestore.ts
- [ ] wrap {children} with EdgeStoreProviders
- [ ] "npm i tailwind-merge react-dropzone lucide-react"
- [ ] add images: {domains: ["files.edgestore.dev"]} to next.config.js
- [ ] add beforeDelete lifecycle hook to edgestore route to delete files

- [ ] git init, git add ., git addcommit "init"
- [ ] gh repo create, git push
- [ ] copy env files to vercel, add CONVEX_DEPLOY_KEY with deployment key from convex settigs
- [ ] override build command to "npm run build && npx convex deploy"
- [ ] deploy to vercel

---

- nextjs, typescript, tailwind, ui.shadcn in detail
- create organization based authentication with clerk
- use local fonts with nextjs with next/font/local and use different fonts with next/font/google
- find free logos from logoipsum
- create dynamic site title metadata with metadata template and site config
- create powerful redirects with middleware.ts
- use local storage for keeping states in local
- create usefull sidebar for changing organizations
- create mobile sidebar with shadcn sheet and zustand

---

- @/components oluyor ama @/public olmuyor, public folder'ında özel bazı durumlar var
- tailwind'de visible diye bi şey yok, hidden + md:flex, opacity-0 + hover:opacity:100, hidden + md:block gibi yaparak çözüyosun
- Button ve Link'i birlikte kullanınca asChild yapıyor
- favicon.ico metadata icons'dan daha öncelikli bakılıyor
- prisma default olarak .env kullandığı için biz de .env.local yerine .env'e göre ayarlıyoruz
- provider'lar sadece (main)'de kullanılacağı için (main) içindeki layout'a providerlara koydu
- clerk UserButton'a afterSignout="/" eklemeyi unutma
- eskiden clerk'de organizasyonlar direkt kapalıydı, artık 3 kullanıcıya kadar organization oluşturulabiliyor
- you can disable selecting personal account with hidePersonal at select-org/page.tsx
- middleware'de afterAuth deyip hangi durumda nereye redirect olacağını detaylı şekilde seçebiliyosun
- bg-sky-700/90'daki 90 opacity anlamına geliyor

---

- no-underline + hover:no-underline
