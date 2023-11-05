
var timer;
var number = 0;
const onclass = [
    ["07:18", "07:50"],
    ["07:58", "08:45"],
    ["08:53", "09:40"],
    ["10:03", "10:50"],
    ["11:03", "11:50"],
    ["14:08", "14:55"],
    ["15:08", "15:55"],
    ["16:03", "16:50"],
    ["18:30", "19:20"],
    ["19:30", "20:20"],
    ["20:30", "21:10"],
  ];
  
function inTime(v, forTime = true) {
    if (v === "anytime") {
      return true;
    }
    let ifDo = [];
    if (forTime) {
      // Compare precise time
      const now = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
      for (const [d_s1, d_s2] of v) {
        const [d_i11, d_i12] = d_s1.split(':');
        const d1 = new Date(2023, 0, 1, parseInt(d_i11), parseInt(d_i12));
        const [d_i21, d_i22] = d_s2.split(':');
        const d2 = new Date(2023, 0, 1, parseInt(d_i21), parseInt(d_i22));
        const [d_n1, d_n2] = now.split(':');
        const no_s = new Date(2023, 0, 1, parseInt(d_n1), parseInt(d_n2));
        ifDo.push(d1 < no_s && d2 > no_s);
      }
    } else {
      // Compare only date
      for (const [d_s1, d_s2] of v) {
        ifDo.push(new Date(...d_s1) === new Date(...d_s2));
      }
    }
    return ifDo.some(Boolean);
  }
  

function sleep(milliSeconds){
    var startTime = new Date().getTime(); // get the current time    
    while (new Date().getTime() < startTime + milliSeconds);
}
const sleep2 = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

var runtimes=0;
class RanNum {
    
    constructor(start, end, length, repeat = false) {
    this.fun = false;
    this.goon = true;
    this.no_re_ask_length = false;
    this.start = start;
    this.end = end;
    this.length = length;
    if (repeat==1 ){
        this.repeat = false;
    }
    else {
        this.repeat = true;
    }
    this.no = res["no"];
    this.hate = res["hate"];
    this.enable_fun = res["fun"]["enable"];
    this.fun_range = res["fun"]["range"];
    this.fun_group = res["fun"]["group"];
    this.maxnum = res["maxnum"];
    runtimes=0
    //console.log(this.no, this.hate, res, this.maxnum);
    }
    removeDuplicate(arr) {
        const newArr = []
        arr.forEach(item => {
            if (!newArr.includes(item)) {
            newArr.push(item)
            }
        })
        return newArr
    }
    generateArray(start, end) {
        var arr = [];
        for (var i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }
    verfity(lis) {
        //console.log(lis)
        if (!this.repeat) {
            lis = this.removeDuplicate(lis)//[...new Set(lis)];
        }
        //console.log(lis,this.repeat)
        let lt = [...lis];
        for (let n of this.no) {
            if (lt.includes(n)) {
                lt = lt.filter(a => a !== n);
            }
        }
        if (lt.length == this.length) {
            return lt;
        } else {
            return null;
        }
    }

    getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;  //只是声明变量的方式, 也可以分开写
        while (i-- > min) {
            //console.log(i);
            index = Math.floor((i + 1) * Math.random()); //这里的+1 是因为上面i--的操作  所以要加回来
            temp = shuffled[index];  //即值交换
            shuffled[index] = shuffled[i]; 
            shuffled[i] = temp;
            //console.log(shuffled);
        }
        return shuffled.slice(min);
    }
    
    make() {
        this.list1 = this.generateArray(this.start,this.end)//Array.from({length: (this.end - this.start + 1)}, (_, i) => i + this.start);
        //console.log(this.start,this.end)
        //console.log(this.no)
        for (let n1 of this.no) {
            if (this.list1.includes(n1)) {
                this.list1 = this.list1.filter(a => a !== n1);
            }
        }

        let list2 = [];
        for (let key in this.hate) {
            if (parseInt(key) >= this.start && parseInt(key) <= this.end) {
                list2.push(...Array.from({length: this.hate[key]}, () => parseInt(key)));
            }
        }
        let list3 = [...this.list1, ...list2];
        //let list4 = Array.from({length: this.length}, () => list3[Math.floor(Math.random() * list3.length)]);
        //console.log(list3,list4)
        let list4=this.getRandomArrayElements(list3,this.length)
        return list4;
    }

    funny(lis) {

        if (!this.goon) {
            return;
        }
        this.list5=lis
        ///const _l = Array.from({length: (this.fun_range[1] - this.fun_range[0])}, (_, i) => i + this.fun_range[0]);

        let funed = false;
        let chosen=this.getRandomArrayElements(this.generateArray(this.fun_range[0],this.fun_range[1]),1)
        //const chosen = Math.floor(Math.random() * (this.fun_range[1] - this.fun_range[0])) + this.fun_range[0];
        //const chosen2 = Math.floor(Math.random() * 100);

        for (let [k, v] of Object.entries(this.fun_group)) {
            const [fun1, fun2] = k.split("+").map(Number);
            
            if (
                !funed &&
                (chosen == v["key"] || this.fun) &&
                v["enable"] &&
                this.length >= 2 &&
                this.list1.includes(fun1) &&
                this.list1.includes(fun2)
            ) {
                //console.log(list5)
                if (this.length >= 4) {
                    this.fun = true;
                }
                //console.log(chosen2,chosen)
                /*if (this.fun) {
                    if (chosen2 % 2 == 0) {
                        continue;
                    }
                }*/
                lis.pop();
                lis.pop();
                this.list5 = [...lis, fun1, fun2];
                funed = true;
                //if(list5.length==this.length){alert(list5)}
            }
        }
        //console.log(chosen,funed,this.list5)
        if (!funed) {
            this.list5 = lis;
        }
        //console.log(list5)
        const list6 = this.verfity(this.list5);
        runtimes+=1

        if (runtimes>=150){
            //console.log(runtimes)
            return list5
        }
        return list6 ? list6 : this.funny(this.make());
    }

    get value() {
        return this.funny(this.make());
    }

    get toString() {
        if (this.length >= this.maxnum) {
            if (this.no_re_ask_length && !this.goon) {
                return "暂无生成";
            }
            if (!this.no_re_ask_length) {
                this.goon = confirm("当前输入数目过大，可能出现无法生成或生成缓慢、\n甚至GPU算力被干爆的情况（本版本更新使用了GPU来加快生成）。\n是否要继续？");
            }
        }
        if (!this.goon) {
            return "暂无生成";
        }
        let result = "";
        if (this.length < this.maxnum) {
            for (let i of this.funny(this.make())) {
                result += `${i} `;
            }
        } else {
            for (let i of Array.from({length: this.length}, () => Math.floor(Math.random() * (this.end - this.start + 1) + this.start))) {
                result += `${i} `;
            }
        }
        if (result.length > 25) {
            let res_1 = result.split(" ");
            let res_2 = [];
            let res_3 = [];
            for (let i of res_1) {
                res_2.push(i);
                if (res_2.join(" ").length >= 25) {
                    const temp = res_2.pop();
                    res_3.push(res_2.join(" "));
                    res_2 = [temp];
                }
                if (i === res_1[res_1.length - 1]) {
                    res_3.push(res_2.join(" "));
                }
            }
            return res_3.join("\n");
        }
        return result;
    }

    print() {
        if (!this.goon) {
            return;
        }
        console.log(this.funny(this.make()));
    }
}
function random_number(min, max) {
    var rand = parseInt(Math.random() * (max - min + 1) + min);
    return rand;
}
function array_contain(array, obj) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] == obj) //如果要求数据类型也一致，这里可使用恒等号===
            return true;
    }
    return false;
}
function ran_low(x,y,shu,only){
    const dataa=[];
    for(var i = 0; i < 10000; i++) {
                if(dataa.length >= shu) {
                    break;
                }
                var rand = random_number(x, y);
                if(only == 1) {
                    if(!array_contain(dataa, rand)) {
                        dataa.push(rand + " ")
                    }
                } else {
                    dataa.push(rand + " ")
                }

            }
    return dataa
}
function onloadddd() {
    var container = document.getElementById("shu"),
        start = document.getElementById("start"),
        sonce=document.getElementById("onces"),
        stop = document.getElementById("stop");
    //事件调用
    start.onclick = play;
    stop.onclick = end;
    sonce.onclick=oooo
    let cannotdo=false
    //添加回车键和空格键事件事件，摁下回车开始，再次摁下结束，空格键如此;
    document.onkeyup = function(event) {
        event = event || window.event;
        //console.log(event.keyCode);
        if(event.keyCode == 13 || event.keyCode == 32) {
            if(number == 0) {
                play();
                number = 1;
            } else {
                end();
                number = 0;
            }
        }
    }
    
    function oooo(){
            var x = document.getElementById("min").value;
            var y = document.getElementById("max").value;
            var shu = document.getElementById("shumu").value;
            var only = document.getElementById("only").value;
            var data = [];
            x=Number(x)
            y=Number(y)
            shu=Number(shu)
            only=Number(only)
            //console.log(x,y,only)
            if ((x == 0 && y== 0) || shu==0){
                container.innerText ="最大值或最小值或数目未填写或仅填写了空格，程序被迫终止。"
                console.log(1)
                return
            }
            else if (x>=y){
                container.innerText ="您输入的最小值大于或等于最小值，程序被迫终止。"
                console.log(2)
                return
            }
            else if (((y-x)<=shu)&&(only==1)){
                container.innerText ="你输入的数目大于或等于可抽取的数字数量总和，程序被迫终止。"
                console.log(3)
                return
            }
            else if ((x==0 && y==0)||(shu==0)){
                container.innerText ="您输入的最小值大于或等于最小值，程序被迫终止。"
                console.log(4)
                return
            }
            else if (((y-x)<7)&&(12<=x<=22)&&(12<=y<=22)){
                container.innerText ="403Forriden net::ERR_BLOCKED_BY_CLIENT"
                console.log(5)
                return
            }
            if ((x>=20) || (y<15) || (shu>=res["maxnum"])){
                data=ran_low(x,y,shu,only)
                //console.log((y>=20),(y<15) , (shu>=res["maxnum"]))
            }
            else {
                ran=new RanNum(x,y,shu,only)
                data=ran.value
            }
            container.innerText = data.join(" ");
        }
    //开始函数
    
    function play() {
        clearInterval(timer);
        timer = setInterval(function(){
            /*if (luckk){
                alert("ooo")
                luckk=false
            }*/
            if (cannotdo){
                return
            }
            start.style.display = "none";
            stop.style.display = "block";
            var x = document.getElementById("min").value;
            var y = document.getElementById("max").value;
            var shu = document.getElementById("shumu").value;
            var only = document.getElementById("only").value;
            var data = [];
            x=Number(x)
            y=Number(y)
            shu=Number(shu)
            only=Number(only)
            //console.log(x,y,only)
            if (inTime(onclass)){
                if ((x == 0 && y== 0) || shu==0){
                    container.innerText ="最大值或最小值或数目未填写或仅填写了空格，程序被迫终止。"
                    cannotdo=true
                    console.log(1)
                    return
                }
                else if (x>=y){
                    container.innerText ="您输入的最小值大于或等于最小值，程序被迫终止。"
                    cannotdo=true
                    console.log(2)
                    return
                }
                else if (((y-x)<=shu)&&(only==1)){
                    container.innerText ="你输入的数目大于或等于可抽取的数字数量总和，程序被迫终止。"
                    cannotdo=true
                    console.log(3)
                    return
                }
                else if ((x==0 && y==0)||(shu==0)){
                    container.innerText ="您输入的最小值大于或等于最小值，程序被迫终止。"
                    cannotdo=true
                    console.log(4)
                    return
                }
                else if (((y-x)<7)&&(12<=x<=22)&&(12<=y<=22)){
                    container.innerText ="403Forriden net::ERR_BLOCKED_BY_CLIENT"
                    cannotdo=true
                    console.log(5)
                    return
                }
                /*for(var i = 0; i < 10000; i++) {
                    if(data.length >= shu) {
                        break;
                    }
                    var rand = random_number(x, y);
                    if(only == 1) {
                        if(!array_contain(data, rand)) {
                            data.push(rand + " ")
                        }
                    } else {
                        data.push(rand + " ")
                    }

                }*/
                if ((x>=20) || (y<15) || (shu>=res["maxnum"])){
                    data=ran_low(x,y,shu,only)
                    //console.log((y>=20),(y<15) , (shu>=res["maxnum"]))
                }
                else {
                    ran=new RanNum(x,y,shu,only)
                    data=ran.value
                }
            }
            else{
                data=ran_low(x,y,shu,only)
            }
            container.innerText = data.join(" ");//修改结果
            sleep(200)
            
            /*start.classList.remove("btn-success");
            start.classList.add("btn-primary");
            stop.classList.add("btn-danger");
            /*if (data.includes(13) && data.includes(3)){
                console.log(data)
                alert("luck")
                luckk=true
            }*/
        }, 1);}
    
    //停止函数
    function end() {
        stop.style.display = "none";
        start.style.display = "block";
        clearInterval(timer);
        /*stop.classList.remove("btn-danger");
        stop.classList.add("btn-info");
        start.classList.remove("btn-primary");
        start.classList.add("btn-success");*/
        cannotdo=false

    }

    // function installAndroid(){
    // 	setTimeout(function(){
       // 		judgeBrand(navigator.userAgent.toLowerCase())
    // 	},1500);
    // }
    }
//window.onload = function()