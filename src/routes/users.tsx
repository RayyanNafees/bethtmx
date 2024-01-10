import { Elysia, t } from 'elysia'

export default new Elysia().get(
  '/users',
  async ({ query: { limit = 10 } }) => {
    const users = await fetch(
      'https://jsonplaceholder.typicode.com/users?_limit=' + limit
    ).then((r) => r.json())

    return (
      <div>
        <h1 class='text-2xl font-bold my-4'>Users</h1>
        {users.map((user: { name: string }) => (
          <li>{user.name}</li>
        ))}
      </div>
    )
  },
  {
    query: t.Object({
      limit: t.String(),
    }),
  }
)
