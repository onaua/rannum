const res={
    "no":[17],
    "maxnum":19,
    "hate":{2:3,
        6:2,
        16:2,
        23:3,
        13:3,
        29:4,
        39:8,
        42:8},
    "fun":{"enable":true,
           "range":[1,10],
           "group":{
                "3+13":{
                    "enable":true,
                    "key":3},
                "39+50":{
                    "enable":true,
                    "key":5},
                "1+23":{
                        "enable":true,
                        "key":1},
               
           }}
    }
const onclass = [
        ["06:18", "07:50"],
        ["07:58", "08:45"],
        ["08:53", "09:40"],
        ["10:03", "10:50"],
        ["11:03", "11:50"],
        ["14:08", "14:55"],
        ["15:08", "15:55"],
        ["16:03", "16:50"],
        ["17:30", "19:20"],
        ["19:30", "20:20"],
        ["20:30", "21:10"],
      ];
var iAmMad=[];
var iAmMad_weight=[]  ;//to sum equals 1
var iAmMad_req_n=0;
var max_play_times=3;
const tasks = {
        "11.1|11.2|11.3": {
          iAmMad: [],
          iAmMad_weight: [], // to sum equals 1
          iAmMad_req_n: 0,
          max_play_times:3
        },
        "11.5|11.4": {
          iAmMad: [],
          iAmMad_weight: [], // to sum equals 1
          iAmMad_req_n: 0,
          max_play_times:3
        },
        "11.7|11.6": {
          iAmMad: [],
          iAmMad_weight: [], // to sum equals 1
          iAmMad_req_n: 0,
          max_play_times:3
        }
      };
// if iAmMad is empty, then the two must be empty or 0.
/*examples
var iAmMad=[1,2]
var iAmMad_weight=[]
var iAmMad_req_n=1

var iAmMad=[1,2,3]
var iAmMad_weight=[0.1,0.5,0.4]
var iAmMad_req_n=2
iAmMad         [1,2]    [1,2]      [1,2]    [1]   [1]   [2,1,3]         [2,1,3]        any
iAmMad_weight  any      [0.1,0.9]  any      any   any   [0.1,0.4,0.5]   [0.1,0.4,0.5]  any
iAmMad_req_n   2        1          >2       1     >1    1               2              0
req            [1,2]    most 2     []       1     []    most 3          most [1,3]     []
* if iAmMad_req_n==2, then req may [3,3] or [1,1], etc.
  but the result won't appear both them two.
*/
