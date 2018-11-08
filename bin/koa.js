#!/usr/bin/env node

// console.log('Hello CLI')

var program = require('commander')
var download = require('download-git-repo')
var ora = require('ora')

const template = 'dachengzi-box/orange-koa-template'

var program = require('commander')
var download = require('download-git-repo')
var ora = require('ora')

// console.log(program)

program
  .version(require('../package.json').version)
  .usage('<command> [project-name]')

program
  .command('init')
  .description('generate a new project from a template')
  .action(function (projectName) {
    var spinner = ora('downloading template')
    spinner.start()
    projectName = projectName || 'mykoa'
    download(template, projectName, function (err, done) {
      spinner.stop()
      if (err) {
        console.error(err)
        return
      }
      console.log('Generated %s', projectName)
    })
  })

program.on('--help', function () {
  console.log('  Examples:')
  console.log()
  console.log('    # create a new project with an official template')
  console.log('    $ koa init my-project')
  console.log()
})

function help () {
  program.parse(process.argv)
  if (program.args.length < 1) return program.help()
}
help()
