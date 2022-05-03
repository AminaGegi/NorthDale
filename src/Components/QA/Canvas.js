import React, {useRef, useEffect} from 'react'
import '../../style/qa/QA.scss'

const Canvas = props => {
    var QAEngineer = [
        [
            {
                name: "Theory of Software Testing",
                status: true,
                hint: "Some text about Theory of Software Testing"
            }
        ],
        [
            {
                name: "Chrome DevTools",
                status: true,
                hint: "Some text about Chrome DevTools"
            },
            {
                name: "Trainee QA Engineer",
                status: true,
                hint: "Some text about Trainee QA Engineer"
            },
            {
                name: "HTML",
                status: true,
                hint: "HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере. " +
                    "Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, " +
                    "далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.Под гипертекстом " +
                    "(\"hypertext\") понимаются ссылки, которые соединяют веб-страницы друг с другом либо в пределах одного веб-сайта, " +
                    "либо между веб-сайтами. Ссылки являются фундаментальным аспектом Веба. " +
                    "Загружая контент в Интернет и связывая его со страницами, созданными другими людьми, " +
                    "вы становитесь активным участником Всемирной паутины."
            }
        ],
        [
            {
                name: "REST API",
                status: false,
                hint: "Some text about REST API"
            },
            {
                name: "Steak & Blowjob",
                status: false,
                hint: "Some text about Steak & Blowjob"
            }
        ],
        [
            {
                name:"Logging Systems",
                status: false,
                hint: "Some text about Logging Systems"
            },
            {
                name:"Jr. QA Engineer",
                status: false,
                hint: "Some text about Jr. QA Engineer"
            },
            {
                name:"Motherfucking",
                status: false,
                hint: "Some text about Motherfucking"
            }

        ],
        [
            {
                name: "Bug Tracking",
                status: false,
                hint: "Some text about Bug Tracking"
            }
        ],
        [
            {
                name: "QA Engineer",
                status: false,
                hint: "Some text about QA Engineer"
            }
        ],
        [
            {
                name: "Senior QA Engineer",
                status: false,
                hint: "Some text about Senior QA Engineer"
            }
        ]
    ]

    const canvasRef = useRef(null);
    const hintTextRef = useRef(null);
    const talentHintRef = useRef(null);
    const closeHint = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current
        canvas.width = window.innerWidth-120;
        canvas.height = (QAEngineer.length)*320;
        const ctx = canvas.getContext('2d');
        const hintText = hintTextRef.current;
        const talentHint = talentHintRef.current;
        const close = closeHint.current;

//colors

        var white = "#F2F1F4";
        var blue = "#0D9CED";
        var whiteTransparent = "#87CEEB";
        var dotsTrue = "#F2F1F4";
        var dotsFalse = "rgba(255,255,255,0.2)";

// вертикальные точки

        var j = 0;
        var lenght;
        function verticalDots(i){
            lenght = (320 * (i - j) - 160) / 40;
            if (QAEngineer[i].length % 2 === 1) {
                for (let d = 0; d < lenght; d++) {
                    var y = 194 + j * 320 + 120 + d * 35;
                    ctx.beginPath();
                    ctx.arc(canvas.width / 2, y, 10, 0, 2 * Math.PI, false);
                    ctx.fillStyle = QAEngineer[i-1][QAEngineer[i-1].length-1].status ? dotsTrue : dotsFalse;
                    ctx.fill();
                }
                j = i;
            }
        }

// горизонтальные точки

        function horizontalDots(i,j){
            if(QAEngineer[i].length %2 >0 && j>0){
                lenght = (canvas.width*j/(QAEngineer[i].length+1) - canvas.width*(j-1)/(QAEngineer[i].length+1)-200)/40;
                for (let d = 0; d < lenght; d++) {
                    var y = 194 + i * 320 ;
                    var x = canvas.width*j/(QAEngineer[i].length+1) + d*35 + 120;
                    ctx.beginPath();
                    ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
                    ctx.fillStyle = QAEngineer[i-1][QAEngineer[i-1].length-1].status ? dotsTrue : dotsFalse;
                    ctx.fill();
                }
            }
        }


        for(let i = 0; i < QAEngineer.length; i++){
            verticalDots(i);
            for (let j = 0; j < QAEngineer[i].length; j++){
                icon(QAEngineer[i][j].name, i, j+1);
                horizontalDots(i,j);
            }
        };


//значки

        function icon (name, item, block){
            var y = 134+60+item*320;
            var x = canvas.width*block/(QAEngineer[item].length+1);
    // основной круг
            ctx.beginPath();
            ctx.arc(x, y, 60, 0, 2*Math.PI, false);
            ctx.fillStyle = QAEngineer[item][block-1].status? white:blue;
            ctx.fill();

    // звезда
            let k = 0.7;
            let l=38;
            let g =38;
            ctx.fillStyle =  QAEngineer[item][block-1].status? blue:whiteTransparent;
            ctx.beginPath();
            ctx.moveTo(x-g+54*k, y-l);
            ctx.lineTo(x-g+70.5*k, y-l+34*k);
            ctx.lineTo(x-g+109*k, y-l+39.15*k);
            ctx.lineTo(x-g+81*k, y-l+65.5*k);
            ctx.lineTo(x-g+87.5*k, y-l+102.5*k);
            ctx.lineTo(x-g+54*k, y-l+85*k);
            ctx.lineTo(x-g+20.6*k, y-l+102.5*k);
            ctx.lineTo(x-g+27.5*k, y-l+65.5*k);
            ctx.lineTo(x-g+0.5*k, y-l+39*k);
            ctx.lineTo(x-g+37.5*k, y-l+34*k);
            ctx.lineTo(x-g+54*k, y-l);
            ctx.closePath();
            ctx.fill();
    // кружок в котором находятся  галочка или крестик
            ctx.beginPath();
            ctx.arc(x+20, y+20, 20, 0, 2*Math.PI, false);
            ctx.fillStyle = QAEngineer[item][block-1].status? white:blue;
            ctx.fill();

    // галочка или крестик
            if(QAEngineer[item][block-1].status){
                ctx.lineWidth = 8
                ctx.beginPath();
                ctx.moveTo(x+10, y+25);
                ctx.lineTo(x+22, y+37);
                ctx.lineTo(x+42, y+17);
                ctx.strokeStyle =  blue;
                ctx.stroke();
            } else {
                ctx.lineWidth = 8
                ctx.beginPath();
                ctx.moveTo(x + 12, y + 12);
                ctx.lineTo(x + 35, y + 35);
                ctx.strokeStyle = whiteTransparent;
                ctx.stroke();

                ctx.lineWidth = 8
                ctx.beginPath();
                ctx.moveTo(x + 12, y + 35);
                ctx.lineTo(x + 35, y + 12);
                ctx.strokeStyle = QAEngineer[item][block - 1].status ? blue : whiteTransparent;
                ctx.stroke();
            }

    // подпись
            ctx.fillStyle = "#ffffff";
            ctx.font = '22px Raleway';
            var   textWidth = ctx.measureText(name ).width;
            ctx.fillText(name, x - textWidth/2, y+89);


        }

//обработка событий

        canvas.onclick = function (event){

    //точка в которой находится мышь

            var mx = event.pageX;
            var my = event.pageY;

    //индексы массива QAEngineer

            let i = Math.round((my-134-60)/320);
            let j = Math.round(-1+mx*(QAEngineer[Math.round(i)].length+1)/canvas.width);

            if( i < QAEngineer.length && j < QAEngineer[i].length){
                var oy = 134+60+i*320; //вычисляем центр круга - значение у
                var ox = canvas.width *(j+1)/(QAEngineer[i].length+1); //вычисляем центр круга - значение х

                var c = Math.hypot(ox-mx, oy-my);//расстояние от центра круга до положения мыши - с

    //Если с меньше радиуса то всплывает подсказка

                if (c > 60){
                     hintText.innerHTML =`<h2><b><div>${QAEngineer[i][j].name}</div></b></h2> ${QAEngineer[i][j].hint}`
                    talentHint.style.width = "580px";

                }
            }
        }
        close.onclick = function (e){
            talentHint.style.width = "0px";
        }

    }, [])

    return  <>
        <img src='images/QA/bg_talent_tree.png' alt="backgraund" style={{zIndex: "-1", position:"fixed", top: "0", right:"0"}} />
        <div>
            <div className='canvas'>
                <canvas ref={canvasRef} {...props} className='cursor-pointer'/>
            </div>
            <div className={`talent-hint ${closeHint? "":"d-none"}`} ref={talentHintRef}>
                <img className='talent-hint_close-btn' alt='close' src='images/close.svg' ref={closeHint}/>
                <div    className={`p-4 mx-10 mt-10 bg-white rounded-xl w-0`}
                        style={{width: "500px"}}
                        ref={hintTextRef} />
                <div style={{
                    width: "0",
                    height: "0",
                    borderTop: "30px solid white",
                    borderLeft: "30px solid transparent"}}
                     className='ml-auto mr-40'/>
                <img className="h-1/3 position-absolute bottom-0 right-0" alt="human" src='images/QA/human.svg' />
            </div>
        </div>
    </>
}

export default Canvas