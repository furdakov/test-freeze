const { execSync } = require('child_process');

function syncBranches(sourceBranch, targetBranch) {
    execSync(`git checkout ${targetBranch}`);
    execSync('git pull');
    execSync(`git checkout ${sourceBranch}`);
    execSync(`git merge ${targetBranch}`);
    execSync(`git push origin ${sourceBranch}`);
    execSync(`git checkout ${targetBranch}`);
    execSync(`git merge ${sourceBranch}`);
    execSync(`git push origin ${targetBranch}`);
}

syncBranches('main', 'demo');
syncBranches('dev', 'main');
