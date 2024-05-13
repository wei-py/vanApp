export default async function runTime(callback, name = 'runTime') {
  console.time(name)
  await callback()
  console.timeEnd(name)
}