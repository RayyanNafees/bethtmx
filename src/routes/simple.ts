import {Elysia} from 'elysia'

export default new Elysia()
  .get('/simple', Bun.file('public/simple.html'))
  .get('/loading.css', Bun.file('public/loading.css'))
