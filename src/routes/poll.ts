import { Elysia } from 'elysia'

export default new Elysia()
  .state('counter', 0)
  .get('/poll', ({ store }) => {
    store.counter++
    return { value: store.counter }
  })

  .state('celciusTemperature', 20)
  .get('/get-temperature', ({ store }) => {
    store.celciusTemperature += Math.random() * 2 - 1
    return store.celciusTemperature.toFixed(1) + '°C'
  })
