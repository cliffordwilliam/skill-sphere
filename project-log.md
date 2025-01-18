# why use next

```
quick db interface
fast dev fullstack
```

# install node lts

```bash
nvm install --lts
nvm use --lts
node -v
```

# create next app

```bash
npx create-next-app@latest
# name: skill-sphere
# ts
# eslint
# tailwind
# src dir
# app router
# no turbopack
# default import alias
```

# [layout ref](https://demo.vercel.store/)

```
refer to this for layout design, use tailwind
```

# [code ref](https://nextjs.org/learn/dashboard-app)

```
refer to this to see how to code
```

# [tailwind components](https://readymadeui.com/)

```
refer to this to see how to use tailwind to make stuff
```

# [get icons dep](https://lucide.dev/)

```bash
npm i lucide-react
```

# [get dynamic class dep](https://www.npmjs.com/package/clsx)

```bash
npm i --save clsx
```

# run watch mode

```bash
npm run dev
```

# reset root layout

```javascript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

# reset root page

```javascript
export default function Page() {
  return <></>;
}
```

# initial declutter

```bash
rm -rf public/
rm src/app/globals.css
rm src/app/favicon.ico
```

# lint and format

```bash
npm run lint
```

# commit

```
make first commit
```

# create new github remote repo

```bash
# set name
# set desc
# then push existing to remote
git remote add origin dsadsa
git branch -M main
git push -u origin main
```

# erd

```mermaid
erDiagram
    Users {
        int id
        string name
        string email
        string password
        string role
        string bio
        string profile_picture
        datetime created_at
        datetime updated_at
    }
    Skills {
        int id
        string name
        string description
        datetime created_at
        datetime updated_at
    }
    Sessions {
        int id
        int user_id
        int expert_id
        int skill_id
        datetime schedule
        string status
        datetime created_at
        datetime updated_at
    }
    Reviews {
        int id
        int session_id
        int reviewer_id
        int rating
        string comment
        datetime created_at
        datetime updated_at
    }
    Payments {
        int id
        int session_id
        int user_id
        decimal amount
        string status
        datetime created_at
        datetime updated_at
    }

    Users ||--o{ Sessions : "has many"
    Users ||--o{ Reviews : "writes"
    Users ||--o{ Payments : "makes"
    Users ||--o{ Skills : "can offer (experts only)"
    Sessions ||--o{ Reviews : "can be reviewed"
    Sessions ||--|{ Payments : "has one payment"
    Skills ||--o{ Sessions : "can be booked for"
```

# create tailwind init (src/styles/global.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# import it in root layout

```javascript
import "@/styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className="h-dvh">{children}</body>
    </html>
  );
}
```

# make local postgresql (odin guide to install and use)

```bash
# enter postgresql shell
psql

# create db for this nest app
CREATE DATABASE dsadsa_dsadsa_dsadsa;

# exit shell
\q
```

# install dbeaver

```
install dbeaver
open dbeaver
connect with the above connection data
```

# get prisma dep

```
npm i prisma --save-dev
```

# setup prisma schema and connection

```bash
npx prisma init
```

# e.g. connection data

```javascript
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "<role_name>", // machine username (whoami)
  database: "dsada_dsadsa", // db name
  password: "<role_password>", // machine pass
  port: 5432, // The default port
});
```

# set .env connection

```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

# prisma protocol

```bash
# update schema
npx prisma db push
```

# view with dbeaver / studio

```bash
npx prisma studio
```

# get client dep

```bash
npm install @prisma/client
```

# update client (one time only, no need to do this whenever u push)

```bash
npx prisma generate
```

# scaffold prisma client

```bash
mkdir src/lib && touch src/lib/prisma.ts
```

# work prisma client

```javascript
// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#dynamic-usage-of-prisma-client-in-nextjs
import { PrismaClient } from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```
