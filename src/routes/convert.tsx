import {Elysia, t} from 'elysia'
import wait from '../utils/wait'

export default new Elysia().post(
  '/convert',
  async ({ body: { f } }) => {
    const celcius = ((+f - 32) * 5) / 9
    await wait(1000)

    return (
      <p class='font-bold'>
        {f} Fahrenheit equals {celcius} degree celcius
      </p>
    )
  },
  {
    body: t.Object({
      f: t.String(),
    }),
  }
)
