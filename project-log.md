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
next lint
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
