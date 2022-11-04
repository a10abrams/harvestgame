window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 506;

    /* reads keystrokes and handles if multiple are pressed at once */
    class InputReader {
        constructor(){
            this.keys = [];
            window.addEventListener('keydown', e => {
                if ((   e.key === 'ArrowDown' ||
                        e.key === 'ArrownDown' ||
                        e.key === 'ArrowLeft' ||
                        e.key === 'ArrowRight')
                        && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
            });
            window.addEventListener('keyup', e => {
                if (    e.key === 'ArrowDown' ||
                        e.key === 'ArrowUp' ||
                        e.key === 'ArrowLeft' ||
                        e.key === 'ArrowRight'){
                    this.keys.splice(this.keys.indecOf(e.key), 1);
                }
            });
        }
    }

    class Player {
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.x = 0;
            this.y = 0;
        }
        draw(context){
            context.fillstyle = 'white';
            context.fillRect(this.x, this.y, this.width, this.hegiht);
        }
    }
    /*
    class Background {

    }

    class Enemy {

    }

    function enemybehavior(){

    }

    function displaystatustext(){

    }
    */
    const input = new InputReader();
    const player = new Player(canvas.width, canvas.height);
    player.draw(ctx)

    function animate(){

    }
});
