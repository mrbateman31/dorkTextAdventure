// Make button run matchCmd function
const enterCmd = document.querySelector('#submitBtn').addEventListener('click', () => {
    matchCmd();
})


// Grab the user input
const cmdInput = document.querySelector('#user_input');
//  define cmds
const cmds = [
    {
        name:'start',
        action: function(){
            startGame();
        }
    },
    {
        name:'help',
        action: function(){
            showHelp();
        }
    },
    {
        name: 'take',
        action: function(){
            takeItem(item);
        }
    },
    {
        name: 'use',
        action: function(){
            useThing();
        }
    },
    {
        name: 'look',
        action: function(){
            describeThing();
        }
    }
]

//match the cmd to the input value
function matchCmd() {
    cmds.forEach((cmd) => {
            if(cmdInput.value === cmd.name) {
            cmd.action();
        }
    }
)
    cmdInput.textContent = '';
}

