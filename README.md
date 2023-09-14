# Mekar

A so called "Micro Frontend", inspired by [Mekari](https://mekari.com/)'s Frontend Architecture.

## Run the example apps

- Copy env example to their respective env file, `env.production.example` to `env.production` and `env.development.example` to `env.development`.
- Run `bun run dev` to start the example apps.
- Example apps consists of parent app and child app, both in their respective folder, `parent` and `child`.
- Use `bun run dev --filter [app-name]` to run each project individually.
- Parent app can be opened from `localhost:8080`.
- Open `localhost:8080/child` to see the child app running inside the parent app.
- Child app can still be opened separately from `localhost:8081`.
