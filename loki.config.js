const CI = process.env.CI;

module.exports = {
    configurations: {
        'chrome.laptop': {
            target: 'chrome.docker',
            width: 1366,
            height: 768,
            dockerFlags: [
                '--add-host=host.docker.internal:host-gateway',
                ...(CI ? ['--security-opt=seccomp=unconfined'] : []),
            ],
        },
        'chrome.iphone7': {
            target: 'chrome.docker',
            preset: 'iPhone 7',
            dockerFlags: [
                '--add-host=host.docker.internal:host-gateway',
                ...(CI ? ['--security-opt=seccomp=unconfined'] : []),
            ],
        },
    },
};
