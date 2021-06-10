//console.log(process)
console.log('CPU 架构',process.arch)

console.log('参数',process.argv)

console.log('argv[0]',process.execPath)
console.log('argv0',process.argv0,'process.argv0 属性保存当 Node.js 启动时传入的 argv[0] 的原始值的只读副本。')

console.log(process.config)

console.log(process.cpuUsage())
console.log(`当前工作目录是: ${process.cwd()}`);

console.log(process.env)

console.log(process.execArgv)
