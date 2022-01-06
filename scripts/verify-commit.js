const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs').readFileSync(msgPath,'utf-8'.trim())

const commitRE  = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/
if(!commitRE.test(msg)) {
    console.log()
    console.error(`提交的commit信息格式不符合规范！请参考项目git commit 提交规范`)
    process.exit(1)
}