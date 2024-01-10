import {Elysia, t} from 'elysia'

export default new Elysia().post(
  '/contact/email',
  ({ body: { email } }) => {
    console.log({ email })
    const valid = (
      <span class='text-green-700 self-start font-thin'>
        This email is valid
      </span>
    )
    const invalid = (
      <span class='text-red-700 self-start font-thin'>
        Please enter a valid email address
      </span>
    )

    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    return pattern.test(email) ? valid : invalid
  },
  {
    body: t.Object({
      email: t.String(),
    }),
  }
)
