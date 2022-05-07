const aaa = (name: string) => {
  return `say hello, ${name}`
}

process.stdout.write(aaa('kate'))