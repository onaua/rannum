ggdm_array = new Array();

function ggdm_xieru(b, d, a) {
    if (typeof (ggdm_array[b]) == "undefined") {
        ggdm_array[b] = new Array()
    }
    var c = ggdm_array[b].length;
    ggdm_array[b][c] = new Array();
    ggdm_array[b][c]["mingan"] = d;
    ggdm_array[b][c]["daima"] = a
}

function ggdm_duqu(c, d) {
    if (c != "") {
        if (!jian_ce_yuan_su_shi_fou_ke_jian(c)) {
            return ""
        }
    }
    if (typeof (ggdm_array[d]) == "undefined") {
        if (c != "") {
            document.getElementById(c).style.display = "none"
        }
        return ""
    }
    var a = ggdm_array[d].shift();
    if (typeof (a) == "undefined") {
        if (c != "") {
            document.getElementById(c).style.display = "none"
        }
        return ""
    } else {
        if (typeof (ggdm_minganshezhi) != "undefined") {
            var f = a.mingan;
            var e = ggdm_minganshezhi.split("|");
            for (var b in e) {
                if (f.indexOf("|" + e[b] + "|") >= 0) {
                    return ggdm_duqu(c, d)
                }
            }
        }
    }
    if (c != "") {
        document.getElementById(c).style.textAlign = "center"
    }
    document.write(a.daima)
}

function xuan_ting(b, f) {
    if (jian_ce_yuan_su_shi_fou_ke_jian(f)) {
        var h = document.getElementById(b).clientHeight;
        var c = document.getElementById(f).clientHeight;
        if (h > c) {
            var e = document.getElementById(b).getBoundingClientRect().top;
            if (e < 0) {
                var a = document.documentElement.clientHeight;
                var d = a - e;
                if (d > a) {
                    d = a
                }
                if ((a - e) > h) {
                    d = h + e
                }
                if (d >= c) {
                    document.getElementById(f).style.position = "fixed";
                    document.getElementById(f).style.top = "0px";
                    document.getElementById(f).style.marginTop = "0px"
                } else {
                    if (d > (c + e)) {
                        var g = -e - (c - d) + "px";
                        document.getElementById(f).style.position = "static";
                        document.getElementById(f).style.marginTop = g
                    } else {
                        document.getElementById(f).style.position = "static";
                        document.getElementById(f).style.top = "0px";
                        document.getElementById(f).style.marginTop = "0px"
                    }
                }
            } else {
                document.getElementById(f).style.position = "static";
                document.getElementById(f).style.top = "0px";
                document.getElementById(f).style.marginTop = "0px"
            }
        }
    }
    setTimeout(function () {
        xuan_ting(b, f)
    }, 100)
}

ggdm_xieru("468x60", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg1.js"><\/script>');
ggdm_xieru("468x15", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg2.js"><\/script>');
ggdm_xieru("728x90", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg3.js"><\/script>');
ggdm_xieru("728x90", "|\u5e7f\u544a|\u8c37\u6b4c|\u6027|", '<script src="//e.txhot.cn/js/acmsd/gg4.js"><\/script>');
ggdm_xieru("728x90", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg5.js"><\/script>');
ggdm_xieru("990x90", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg6.js"><\/script>');
ggdm_xieru("1040x90", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg7.js"><\/script>');
ggdm_xieru("970x90", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg8.js"><\/script>');
ggdm_xieru("970x90", "|\u5e7f\u544a|\u8c37\u6b4c|\u6027|", '<script src="//e.txhot.cn/js/acmsd/gg9.js"><\/script>');
ggdm_xieru("250x250", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg10.js"><\/script>');
ggdm_xieru("250x250", "|\u5e7f\u544a|\u8c37\u6b4c|\u6027|", '<script src="//e.txhot.cn/js/acmsd/gg10.js"><\/script>');
ggdm_xieru("250x250", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg12.js"><\/script>');
ggdm_xieru("250x250", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg13.js"><\/script>');
ggdm_xieru("300x250", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg14.js"><\/script>');
ggdm_xieru("300x250", "|\u5e7f\u544a|\u8c37\u6b4c|\u6027|", '<script src="//e.txhot.cn/js/acmsd/gg15.js"><\/script>');
ggdm_xieru("300x250", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg16.js"><\/script>');
ggdm_xieru("300x250", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg17.js"><\/script>');
ggdm_xieru("160x600", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg18.js"><\/script>');
ggdm_xieru("160x260", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg19.js"><\/script>');
ggdm_xieru("zishiying", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg20.js"><\/script>');
ggdm_xieru("zishiying", "|\u5e7f\u544a|\u8c37\u6b4c|\u6027|", '<script src="//e.txhot.cn/js/acmsd/gg21.js"><\/script>');
ggdm_xieru("zishiying", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg22.js"><\/script>');
ggdm_xieru("20bi20", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg23.js"><\/script>');
ggdm_xieru("sj_dbhf", "|\u5e7f\u544a|\u767e\u5ea6|", '<script src="//e.txhot.cn/js/acmsd/gg24.js"><\/script>');
