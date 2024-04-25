export default function runTime(callback, name = 'runTime') {
  console.time(name)
  callback()
  console.timeEnd(name)
}