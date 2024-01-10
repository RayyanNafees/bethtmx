import { Elysia, t } from 'elysia'

export default new Elysia()
  .state('contacts', [
    { name: 'John Doe', email: 'Kraig_Walsh@hotmail.com' },
    { name: 'Everett Barton', email: 'Susanna.Rolfson@gmail.com' },
    { name: 'Anita Wilderman', email: 'Opal96@yahoo.com' },
    { name: 'Stuart Morissette', email: 'Onie55@hotmail.com' },
    { name: 'Doreen Wolf MD', email: 'Frankie90@hotmail.com' },
    { name: 'Mrs. Carole Dare', email: 'Brigitte94@yahoo.com' },
  ])

  .post(
    '/search',
    ({ body: { search }, store: { contacts } }) => {
      if (!search) return <tr></tr>
      const searched = contacts.filter((contact) => {
        const searchedTerm = search
        const name = contact.name.toLowerCase()
        const email = contact.email.toLowerCase()
        return name.includes(searchedTerm) || email.includes(searchedTerm)
      })

      return (
        <tr>
          {searched.map((contact) => (
            <>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </>
          ))}
        </tr>
      )
    },
    {
      body: t.Object({
        search: t.String(),
      }),
      transform({ body }) {
        return (body.search = body.search.toLowerCase())
      },
    }
  )

  .post(
    '/search/api',
    async ({ body: { search } }) => {
      const contacts = (await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then((r) => r.json())) as { name: string; email: string }[]

      if (!search) return <tr></tr>
      const searched = contacts.filter((contact) => {
        const searchedTerm = search
        const name = contact.name.toLowerCase()
        const email = contact.email.toLowerCase()
        return name.includes(searchedTerm) || email.includes(searchedTerm)
      })

      return (
        <tbody id='contacts'>
          {searched.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      )
    },
    {
      body: t.Object({
        search: t.String(),
      }),
      transform({ body }) {
        return (body.search = body.search.toLowerCase())
      },
    }
  )
