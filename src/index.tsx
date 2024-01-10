import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import { simple, poll, users, convert, search } from './routes'

const app = new Elysia()
  .use(html())

  .use(simple)
  .use(convert)
  .use(users)
  .use(poll)
  .use(search)
  .get('/', Bun.file('public/index.html'))

  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
