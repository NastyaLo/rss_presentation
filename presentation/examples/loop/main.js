let spaceCounter = 0;

const firstLog = document.getElementById('first-log');
const firstCode = document.getElementById('first-code');
const firstConsole = document.getElementById('first-console');

const secondLog = document.getElementById('second-log');
const secondCode = document.getElementById('second-code');
const secondConsole = document.getElementById('second-console');
const timeout = document.getElementById('timeout');
const time = document.getElementById('time');

const thirdLog = document.getElementById('third-log');
const thirdCode = document.getElementById('third-code');
const thirdConsole = document.getElementById('third-console');

const fourthLog = document.getElementById('fourth-log');

document.onkeydown = function (e) {
    if (e.keyCode === 32) {
        switch (spaceCounter) {
            case 0:
                firstCode.classList.add('open');
                firstLog.classList.add('open');
                firstConsole.classList.add('open');

                setTimeout(() => {
                    firstCode.classList.remove('open');
                    firstLog.classList.remove('open');
                }, 1000);
                break;
            
            case 1:
                secondCode.classList.add('open');
                secondLog.classList.add('open');

                setTimeout(() => {
                    secondCode.classList.remove('open');
                    secondLog.classList.remove('open');
                    timeout.classList.add('api');
                }, 1000);

                setTimeout(() => {
                    timeout.classList.remove('api');
                    timeout.classList.add('queue');
                    time.classList.add('close');
                }, 3000);

                break;

            case 2:
                thirdCode.classList.add('open');
                thirdLog.classList.add('open');
                thirdConsole.classList.add('open');

                setTimeout(() => {
                    thirdCode.classList.remove('open');
                    thirdLog.classList.remove('open');
                }, 1000);
                break;

            case 3:
                secondConsole.classList.add('open');
                timeout.classList.remove('queue');
                thirdConsole.classList.add('open');
                fourthLog.classList.add('open');
                secondCode.classList.add('open');

                setTimeout(() => {
                    secondCode.classList.remove('open');
                    fourthLog.classList.remove('open');
                }, 1000);
                break;
        }

        spaceCounter++;
    }
} 
