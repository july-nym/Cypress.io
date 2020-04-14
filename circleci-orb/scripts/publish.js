const minimist = require('minimist')
const execa = require('execa')
const argv = minimist(process.argv.slice(2))

console.dir(argv)

const setNewVersion = () => {
  return execa('npm', ['run', 'set-next-version'], {stdio: 'inherit'})
}

const getPackageVersion = () => {
  const version = require('../package').version
  return version
}

const loadNameAndVersion = () => {
  const namespace = 'cypress-io'
  const orbName = 'cypress'

  let name
  if (argv.dev) {
    const version = argv.dev
    name = `${namespace}/${orbName}@dev:${version}`
  } else {
    const version = getPackageVersion()
    name = `${namespace}/${orbName}@${version}`
  }
  console.log('publishing orb %s', name)
  return name
}

const publishOrb = (nameVersion) => {
  const cmd = 'circleci'
  const args = ['orb', 'publish', 'src/orb.yml', nameVersion]
  if (argv.dry) {
    console.log('dry run: %s %s', cmd, args.join(' '))
    return Promise.resolve()
  } else {
    return execa(cmd, args, {stdio: 'inherit'})
  }
}

const getDevVersion = () =>
  Promise.resolve(argv.dev)

let decideVersion

if (argv.dev) {
  decideVersion = getDevVersion()
} else {
  decideVersion = setNewVersion()
}

decideVersion
  .then(loadNameAndVersion)
  .then(publishOrb)
  .catch(e => {
    console.error(e.message)
    process.exit(1)
  })
