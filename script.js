window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    scroll = function(c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function() {
            scroll(c, a, b, i);
        }, 5);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
var ly = [{
    "embed": "l30Aqd6cyvY",
    "title": "لعلهم يعقلون",
    "index": "29"
}, {
    "embed": "VYERnCdRNTo",
    "title": "لعلهم يعقلون",
    "index": "28"
}, {
    "embed": "rZUCKIMf6AA",
    "title": "لعلهم يعقلون",
    "index": "27"
}, {
    "embed": "vdr_PLaSzs0",
    "title": "لعلهم يعقلون",
    "index": "26"
}, {
    "embed": "PuWhlaOo9G8",
    "title": "لعلهم يعقلون",
    "index": "25"
}, {
    "embed": "Vu_SQ7mD-qE",
    "title": "لعلهم يعقلون",
    "index": "24"
}, {
    "embed": "fpUQeMgzFU8",
    "title": "لعلهم يعقلون",
    "index": "23"
}, {
    "embed": "gz-erTI0B8w",
    "title": "لعلهم يعقلون",
    "index": "22"
}, {
    "embed": "tWln39S3kjU",
    "title": "لعلهم يعقلون",
    "index": "21"
}, {
    "embed": "keH9g63aSaU",
    "title": "لعلهم يعقلون",
    "index": "20"
}, {
    "embed": "swh-gigaa-g",
    "title": "لعلهم يعقلون",
    "index": "19"
}, {
    "embed": "Mt2qiyX1SSM",
    "title": "لعلهم يعقلون",
    "index": "18"
}, {
    "embed": "Tgo6n6-9-Xc",
    "title": "لعلهم يعقلون",
    "index": "17"
}, {
    "embed": "N7ytfPSPyoY",
    "title": "لعلهم يعقلون",
    "index": "16"
}, {
    "embed": "Cymi85tpJrg",
    "title": "لعلهم يعقلون",
    "index": "15"
}, {
    "embed": "y8B3CEIWNoM",
    "title": "لعلهم يعقلون",
    "index": "14"
}, {
    "embed": "u5VxdXhpnTk",
    "title": "لعلهم يعقلون",
    "index": "13"
}, {
    "embed": "hbIqj61dE4Q",
    "title": "لعلهم يعقلون",
    "index": "12"
}, {
    "embed": "2hE28ICWugo",
    "title": "لعلهم يعقلون",
    "index": "11"
}, {
    "embed": "BJ4dqLDZt0Q",
    "title": "لعلهم يعقلون",
    "index": "10"
}, {
    "embed": "3aXzTNAG8Gw",
    "title": "لعلهم يعقلون",
    "index": "9"
}, {
    "embed": "HrxDD3Jhd-U",
    "title": "لعلهم يعقلون",
    "index": "8"
}, {
    "embed": "neI5SFxdEQg",
    "title": "لعلهم يعقلون",
    "index": "7"
}, {
    "embed": "zdUkjYprHGA",
    "title": "لعلهم يعقلون",
    "index": "6"
}, {
    "embed": "yVyINpuXCAk",
    "title": "لعلهم يعقلون",
    "index": "5"
}, {
    "embed": "2Hlflpj4HAk",
    "title": "لعلهم يعقلون",
    "index": "4"
}, {
    "embed": "HQ7ePbddiPo",
    "title": "لعلهم يعقلون",
    "index": "3"
}, {
    "embed": "LEoKJ1J3fFA",
    "title": "لعلهم يعقلون",
    "index": "2"
}, {
    "embed": "au7aNs6TYtQ",
    "title": "لعلهم يعقلون",
    "index": "1"
}, {
    "embed": "xxx",
    "title": "برنامج لعلهم يعقلون",
    "index": "0"
}];
var na = [{
    "embed": "ITixObINLKs",
    "title": "النبأ العظيم",
    "index": "30"
}, {
    "embed": "o2gWd2xXn68",
    "title": "النبأ العظيم",
    "index": "29"
}, {
    "embed": "ngxh3U6pkuE",
    "title": "الميثاق الغليظ والطلاق",
    "index": "28"
}, {
    "embed": "Yeu9NpuzqtA",
    "title": "النبأ العظيم",
    "index": "27"
}, {
    "embed": "jp79KO0VflU",
    "title": "الإرث والوصية في التنزيل الحكيم",
    "index": "26"
}, {
    "embed": "ot9TqhkCXF4",
    "title": "الجنة والنار والإرث والوصية في التنزيل الحكيم",
    "index": "25"
}, {
    "embed": "Nn-peCRDBb0",
    "title": "النبأ العظيم",
    "index": "24"
}, {
    "embed": "WL4NhQLDF1c",
    "title": "النبأ العظيم",
    "index": "23"
}, {
    "embed": "UEVRVjPcALU",
    "title": "النبأ العظيم",
    "index": "22"
}, {
    "embed": "A7vJsSymZbM",
    "title": "النبأ العظيم",
    "index": "21"
}, {
    "embed": "G8LAuwM2uYM",
    "title": "النبأ العظيم",
    "index": "20"
}, {
    "embed": "X0V9oVqVq5A",
    "title": "النبأ العظيم",
    "index": "19"
}, {
    "embed": "Af_LYQOZvv8",
    "title": "النبأ العظيم",
    "index": "18"
}, {
    "embed": "O5gYwXKMGJ0",
    "title": "النبأ العظيم",
    "index": "17"
}, {
    "embed": "rwAsAszAxxM",
    "title": "الشرك الثبات والإثم التخلف",
    "index": "16"
}, {
    "embed": "89k-cTVlE5Y",
    "title": "الشرك لسان حال والكفر لسان مقال",
    "index": "15"
}, {
    "embed": "ZUJ1DLDfGnM",
    "title": "النبأ العظيم",
    "index": "14"
}, {
    "embed": "_Yb4IR6nCr0",
    "title": "الفرق بين الإسلام والإيمان والمسلمين والمجرمين",
    "index": "13"
}, {
    "embed": "XQHQT4wNJus",
    "title": "معنى الرحمن وسورة التوبة المُحكَمَة وهلاك القرى",
    "index": "12"
}, {
    "embed": "3uH0uTBjLvI",
    "title": "التعددية والاختلاف دليل وحدانية الله",
    "index": "11"
}, {
    "embed": "F2r11nuwxgU",
    "title": "كتاب الرزق على الأرض ومعنى يرزقكم من السماء",
    "index": "10"
}, {
    "embed": "s9Bt1-4ScJE",
    "title": "الفرق بين الإنزال والتنزيل والذكر والمكتوب",
    "index": "9"
}, {
    "embed": "rhNeA2MY87I",
    "title": "القلب والحواس والقدر والقضاء",
    "index": "8"
}, {
    "embed": "DxMump2hbGs",
    "title": "نظرية المعرفة، والوجود كلمات الله",
    "index": "7"
}, {
    "embed": "siLt247Qhwg",
    "title": "السبع المثاني وإنزال القرآن وتنزيله",
    "index": "6"
}, {
    "embed": "8Nxl1QT-khU",
    "title": "مواضع النجوم والإعجاز في القرآن",
    "index": "5"
}, {
    "embed": "5MLx1XpqxIE",
    "title": "الكتاب وأم الكتاب والمحكم والمتشابه",
    "index": "4"
}, {
    "embed": "Qa6FJaGuDFg",
    "title": "القرآن نبوة وقوانين كونية وتاريخية",
    "index": "3"
}, {
    "embed": "JYe5jy7NQq8",
    "title": "البلاغة والنسخ والنبأ والخبر في التنزيل الحكيم",
    "index": "2"
}, {
    "embed": "nNLA36_8FkE",
    "title": "العالمية، والرحمة، والخاتمية وغياب الترادف",
    "index": "1"
}, {
    "embed": "xxx",
    "title": "برنامج النبأ العظيم",
    "index": "0"
}]
var tt = [{
    "embed": "ORHY-yy9MTg",
    "title": "القصص القرآني 3",
    "index": "43"
}, {
    "embed": "2cNUWsIXwIc",
    "title": "القصص القرآني 2",
    "index": "42"
}, {
    "embed": "8Rk-7j6aD9A",
    "title": "القصص القرآني 1",
    "index": "41"
}, {
    "embed": "ldtqJd20ay8",
    "title": "الدين والسلطة – الحاكمية 5 ",
    "index": "40"
}, {
    "embed": "802RcOa6meQ",
    "title": "الدين والسلطة – الحاكمية 4 ",
    "index": "39"
}, {
    "embed": "x1HvY5qTLb8",
    "title": "الدين والسلطة – الحاكمية 3 ",
    "index": "38"
}, {
    "embed": "sI4WyxZg_sM",
    "title": "الدين والسلطة – الحاكمية 2",
    "index": "37"
}, {
    "embed": "RmzvEAsDALg",
    "title": "الدين والسلطة – الحاكمية 1",
    "index": "36"
}, {
    "embed": "HIHl2coyp1k",
    "title": "الدين والسلطة ",
    "index": "35"
}, {
    "embed": "5erNmaWECPQ",
    "title": "الشهادة والشهيد ",
    "index": "34"
}, {
    "embed": "HNDP-GW52ds",
    "title": "العباد والعبيد",
    "index": "33"
}, {
    "embed": "yScxfTcF7ak",
    "title": "الأبوان والوالدان ",
    "index": "32"
}, {
    "embed": "wdRG3f_fR8Q",
    "title": "الإسلام وقضايا المرأة – الحجاب 2",
    "index": "31"
}, {
    "embed": "EMvjJoMS828",
    "title": "الإسلام وقضايا المرأة – الحجاب 1",
    "index": "30"
}, {
    "embed": "GzHLszolE68",
    "title": "الإسلام وقضايا المرأة – الفوامة",
    "index": "29"
}, {
    "embed": "DjQ6UOIueJo",
    "title": "الإسلام وقضايا المرأة – التعددية الزوجية",
    "index": "28"
}, {
    "embed": "AvLZSqJiDZw",
    "title": "الإسلام وقضايا المرأة – الوصية والإرث 2",
    "index": "27"
}, {
    "embed": "iZYxuwo43RQ",
    "title": "الإسلام وقضايا المرأة – الوصية والإرث 1",
    "index": "26"
}, {
    "embed": "7IOFuDtE7xk",
    "title": "الحنيفية والإستقامة وعلاقتهما بالحدود 2",
    "index": "23"
}, {
    "embed": "l3KUZ9ATrFI",
    "title": "الحنيفية والإستقامة وعلاقتهما بالحدود 1",
    "index": "22"
}, {
    "embed": "wW85BnHbX2g",
    "title": "رسالة محمد ومضامينها 2",
    "index": "21"
}, {
    "embed": "zh7nKUlomZA",
    "title": "رسالة محمد ومضامينها 1",
    "index": "20"
}, {
    "embed": "UpXeRytNI8c",
    "title": "أركان الإسلام وأركان الإيمان",
    "index": "19"
}, {
    "embed": "flqQ90uiGeY",
    "title": "الإسلام والمسلمون",
    "index": "18"
}, {
    "embed": "uOV_u2zlxaE",
    "title": "إبليس – الطاعة والمعصية",
    "index": "17"
}, {
    "embed": "uJ6_AmoX8h8",
    "title": "آدم – نشأة الكلام الإنساني",
    "index": "16"
}, {
    "embed": "qBhMUpiVY-Y",
    "title": "الشهوات الإنسانية ومفاهيم الجمال",
    "index": "15"
}, {
    "embed": "f02h4Sj_nQs",
    "title": "الأعمال والأرزاق",
    "index": "14"
}, {
    "embed": "GmlzWWJw7DM",
    "title": "القضاء والقدر",
    "index": "13"
}, {
    "embed": "MVcOoJpR1qo",
    "title": "الرسالة والنبوة",
    "index": "12"
}, {
    "embed": "qBCNdW3NB64",
    "title": "نظرية المعرفة الإنسانية",
    "index": "11"
}, {
    "embed": "RCHXcJqmYvs",
    "title": "جدل الكون والإنسانية",
    "index": "10"
}, {
    "embed": "3IoftAZWEjU",
    "title": "مفاهيم الوجود",
    "index": "9"
}, {
    "embed": "xbRfqTR_pNY",
    "title": "أزمة الفقه الإسلامي",
    "index": "8"
}, {
    "embed": "OHce4636E7k",
    "title": "الإنزال والتنزيل",
    "index": "7"
}, {
    "embed": "R6H-v3e9bhE",
    "title": "المحكم والمتشابه",
    "index": "6"
}, {
    "embed": "1L8LwOKhkjM",
    "title": "المصطلحات والمفاهيم القرآنية",
    "index": "5"
}, {
    "embed": "LRaC0HYQFGs",
    "title": "التنزيل الحكيم",
    "index": "4"
}, {
    "embed": "swrndaIj5ks",
    "title": "الأسس والضوابط",
    "index": "3"
}, {
    "embed": "0_SA6811W2U",
    "title": "القراءة المعاصرة 2",
    "index": "2"
}, {
    "embed": "qwgbP-YV2As",
    "title": "القراءة المعاصرة 1",
    "index": "1"
}, {
    "embed": "xxx",
    "title": "برنامج التفكير والتغيير",
    "index": "0"
}];
var rm = [{
    "embed": "7Sh1CSbJt50",
    "title": "31- التعددية الزوجية",
    "index": "31"
}, {
    "embed": "9KGfnvio-PM",
    "title": "30- التفصيل والمحكم",
    "index": "30"
}, {
    "embed": "dGhj4r1FV5k",
    "title": "29- نكاح الصغيرة وارضاع الكبير",
    "index": "29"
}, {
    "embed": "sSgWB_3kMf8",
    "title": "28- لماذا توقف العرب عن انتاج المعرفة؟",
    "index": "28"
}, {
    "embed": "frgho-LiJG8",
    "title": "27- لا إكراه في الدين",
    "index": "27"
}, {
    "embed": "ClO_sxVrlHA",
    "title": "26- الرحمن الرحيم",
    "index": "26"
}, {
    "embed": "bXS8EFMRUPo",
    "title": "25- الإسلام والإجرام",
    "index": "25"
}, {
    "embed": "RRA5rSEtWag",
    "title": "24- حكم الفنون",
    "index": "24"
}, {
    "embed": "OV8cvsrR2bY",
    "title": "23- المحكم والمتشابه",
    "index": "23"
}, {
    "embed": "QBW4BBDH7Pw",
    "title": "22- مفهوم الربا",
    "index": "22"
}, {
    "embed": "8pJUjrqF43o",
    "title": "21- الرحمة",
    "index": "21"
}, {
    "embed": "8vnQij5GZpQ",
    "title": "20- العالمية",
    "index": "20"
}, {
    "embed": "2o1qs4Tuvls",
    "title": "19- الخاتمية",
    "index": "19"
}, {
    "embed": "a-Cz6Wgxte8",
    "title": "18- مفهوم دولة الراعي والرعية",
    "index": "18"
}, {
    "embed": "XOXveZ7D74A",
    "title": "17- معنى الطاعة المنفصلة",
    "index": "17"
}, {
    "embed": "NXFJfRNszYA",
    "title": "16- مقام الرسالة",
    "index": "16"
}, {
    "embed": "S7SL7w8CvvE",
    "title": "15- مقامات الرسول الثلاث",
    "index": "15"
}, {
    "embed": "kvPQ0J2qAyY",
    "title": "14- مفهوم البغي بغير حق",
    "index": "14"
}, {
    "embed": "zXxxwWHoLbw",
    "title": "13- الأمة والقوم والشعب",
    "index": "13"
}, {
    "embed": "iTzF7CHsRdE",
    "title": "12- لماذا أنا مؤمن؟",
    "index": "12"
}, {
    "embed": "3SAdb0Oe5JM",
    "title": "11- الجنة والنار",
    "index": "11"
}, {
    "embed": "Q8QpvRN7F6I",
    "title": "10- الصوم",
    "index": "10"
}, {
    "embed": "_wVxLGj23Ww",
    "title": "9- الكفر والشرك",
    "index": "9"
}, {
    "embed": "RAi8Z-AIPis",
    "title": "8- الإرث",
    "index": "8"
}, {
    "embed": "DdsecpQfvdI",
    "title": "7- الوصية",
    "index": "7"
}, {
    "embed": "Fy5ksY23eEo",
    "title": "6- الفرق بين الإسلام والإيمان",
    "index": "6"
}, {
    "embed": "aC_x2WijAAk",
    "title": "5- هل النبي (ص) يعلم الغيب؟",
    "index": "5"
}, {
    "embed": "5_wjtrPVFVM",
    "title": "4- الشاهد والشهيد",
    "index": "4"
}, {
    "embed": "lydXg-zbzgM",
    "title": "3- العباد والعبيد",
    "index": "3"
}, {
    "embed": "W8IzfFH6Dfs",
    "title": "2- الكتاب والقرآن",
    "index": "2"
}, {
    "embed": "LXjiAAEGs1A",
    "title": "1- خطأ مصطلح الوحيين",
    "index": "1"
}, {
    "embed": "xxx",
    "title": "رؤية معاصرة",
    "index": "0"
}];
var ahAsli = [{
    "embed": "1gIaxnA8--w",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: جمال عنايت، 16/10/2008",
    "index": "12"
}, {
    "embed": "7OgctqggmtU",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، 4/12/2001",
    "index": "11"
}, {
    "embed": "W2g3gz1Sf5c",
    "title": "اللقاءات والمقابلات | برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، 3/12/2001",
    "index": "10"
}, {
    "embed": "svSZtHIOjkc",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، 2/12/2001",
    "index": "9"
}, {
    "embed": "v73tZYB87kA",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، مع د. سعاد صالح، 22/1/2001",
    "index": "8"
}, {
    "embed": "W2GKmFDb-_g",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، مع د. سعاد صالح، 15/1/2001",
    "index": "7"
}, {
    "embed": "4e32qBH-BSM",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، 14/1/2001",
    "index": "6"
}, {
    "embed": "NK2oTenNgX8",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، 13/1/2001",
    "index": "5"
}, {
    "embed": "LbST8yUVPmE",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، 10/1/2001",
    "index": "4"
}, {
    "embed": "gCMQNKwQ5ek",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، مع د. عبد الصبور شاهين، د. عبد المعطي بيومي، 6/6/2000",
    "index": "3"
}, {
    "embed": "dIlhiK83SOE",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، مع د. عبد الصبور شاهين، د. عبد المعطي بيومي، 5/6/2000",
    "index": "2"
}, {
    "embed": "kN3AZBRP1aM",
    "title": "برنامج “على الهواء”، قناة أوربت، تقديم: عماد الدين أديب، 4/6/2000",
    "index": "1"
}, {
    "embed": "xxx",
    "title": "برنامج على الهواء",
    "index": "0"
}];
var ah = [{
    "embed": "1gIaxnA8--w",
    "title": "Oct 16 2008",
    "index": "12"
}, {
    "embed": "7OgctqggmtU",
    "title": "Dec 4 2001",
    "index": "11"
}, {
    "embed": "W2g3gz1Sf5c",
    "title": "Dec 3 2001",
    "index": "10"
}, {
    "embed": "svSZtHIOjkc",
    "title": "Dec 2 2001",
    "index": "9"
}, {
    "embed": "v73tZYB87kA",
    "title": "Jan 22 2001",
    "index": "8"
}, {
    "embed": "W2GKmFDb-_g",
    "title": "Jan 15 2001",
    "index": "7"
}, {
    "embed": "4e32qBH-BSM",
    "title": "Jan 14 2001",
    "index": "6"
}, {
    "embed": "NK2oTenNgX8",
    "title": "Jan 13 2001",
    "index": "5"
}, {
    "embed": "LbST8yUVPmE",
    "title": "Jan 10 2001",
    "index": "4"
}, {
    "embed": "gCMQNKwQ5ek",
    "title": "Jun 6 2000",
    "index": "3"
}, {
    "embed": "dIlhiK83SOE",
    "title": "Jun 5 2000",
    "index": "2"
}, {
    "embed": "kN3AZBRP1aM",
    "title": "Jun 4 2000",
    "index": "1"
}, {
    "embed": "xxx",
    "title": "برنامج على الهواء",
    "index": "0"
}];
var lm = [{
    "embed": "tNk7ZLUhm7A",
    "title": "هل إصلاح الخطاب الاسلامي ممكن؟",
    "index": "19"
}, {
    "embed": "WJsUanoLqvk",
    "title": "مقابلة على قناة فرانس 24 العربية",
    "index": "18"
}, {
    "embed": "195-wtxjvx8",
    "title": "مقابلة على قناة فرانس 24 العربية",
    "index": "17"
}, {
    "embed": "1RNH-voYDoM",
    "title": "برنامج سيرة",
    "index": "16"
}, {
    "embed": "iF9Ym0JQXdE",
    "title": "ندوة : “الفكر، العلم والدين في العالم العربي: القضايا والإشكاليات”",
    "index": "15"
}, {
    "embed": "mgLN1T8y-Tw",
    "title": "لقاء تلفزيوني على هامش مؤتمر النهضة العربية في عمان – الأردن",
    "index": "14"
}, {
    "embed": "wK_jEzSctSY",
    "title": "ندوة جنيف – 8 / 6 / 2013",
    "index": "13"
}, {
    "embed": "nKWgjCVwXC8",
    "title": "محاضرة منتدى الجاحظ",
    "index": "12"
}, {
    "embed": "SLaER3XPgcs",
    "title": "مداخلة الدكتور محمد شحرور",
    "index": "11"
}, {
    "embed": "5K7GwE-g9Zc",
    "title": "محاضرة ليون",
    "index": "10"
}, {
    "embed": "nvK8QQuEJVk",
    "title": "برنامج حديث العرب – مقابلة الدكتور محمد شحرور – 15 / 9 / 2016",
    "index": "9"
}, {
    "embed": "M5PRKjeK1p0",
    "title": "مقابلة مع قناة العربية على برنامج منارات",
    "index": "8"
}, {
    "embed": "9N8mMuAfFvI",
    "title": "محاضرة مسقط، عُمان – 25 نوفمبر 2013",
    "index": "7"
}, {
    "embed": "DOd3wHeoaoQ",
    "title": "برنامج روافد – 16-23 / 4 / 2010",
    "index": "6"
}, {
    "embed": "EuQ4nOXxIvc",
    "title": "برنامج “أبعاد”، قناة أوربت، تقديم: جمال عنايت، مع د. سعاد صالح",
    "index": "5"
}, {
    "embed": "b4CoZ1W8QNw",
    "title": "ندوة الأردن – 11/2008",
    "index": "4"
}, {
    "embed": "0Q58zPClYPE",
    "title": "ندوة القاهرة – 11/2008",
    "index": "3"
}, {
    "embed": "4aRpJtJhFWs",
    "title": "مداخلة الدكتور محمد شحرور ضمن ندوة دولية بالرباط 6/21/2008",
    "index": "2"
}, {
    "embed": "Mcswx_hmezI",
    "title": "مقابلة على قناة أوربت، تقديم: عماد الدين أديب، مع د. رضوان السيد، 4/12/1999",
    "index": "1"
}, {
    "embed": "xxx",
    "title": "لقاءات متنوعة",
    "index": "0"
}];
var initShahrour = function(data) {
    data.forEach(function(item) {
        if (item.index > 0) {
            var btn = '<button class="btn" data-embed="' + item.embed + '" data-index="' + item.index + '" data-title="' + item.title + '">' + item.index + ' : ' + item.title + '</button>';
            document.getElementById('btn_nest').innerHTML += btn;
        } else {
            document.getElementById("judul").innerHTML = item.title;
        }
    });
    var btn = document.getElementsByClassName("btn");
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', btnOnClick, false);
    }
}
var btnOnClick = function() {
    var attribute = this.getAttribute("data-embed");
    var title = this.getAttribute("data-title");
    var idx = this.getAttribute("data-index");
    var iframe = '<h2>&#x0627&#x0644&#x062d&#x0644&#x0642&#x0629 ' + idx + ' : ' + title + '</h2><iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="350" src="https://www.youtube.com/embed/' + attribute + '" width="100%"></iframe>';
    document.getElementById("demo").innerHTML = iframe;
    window.smoothScroll(document.getElementById("demo"));
};
var barnamaj = [{
    'variable': 'ly',
    "title": "برنامج لعلهم يعقلون"
}, {
    'variable': 'na',
    "title": "برنامج النبأ العظيم"
}, {
    'variable': 'tt',
    "title": "برنامج التفكير والتغيير"
}, {
    'variable': 'rm',
    "title": "رؤية معاصرة"
}, {
    'variable': 'ah',
    "title": "برنامج على الهواء"
}, {
    'variable': 'lm',
    "title": "لقاءات متنوعة"
}, ];
barnamaj.forEach(function(item) {
    var bar = '<button dir="rtl" class="btn-barnamaj" data-title="' + item.title + '" data-variable="' + item.variable + '">' + item.title + '</button>';
    document.getElementById('barnamaj').innerHTML += bar;
});
for (var i = 0; i <= barnamaj.length - 1; i++) {}
var barnamajBtnOnClick = function() {
    var attr = this.getAttribute("data-variable");
    var vv = document.getElementById('active').value;
    if (attr !== vv) {
        var vv = document.getElementById('active').value = attr;
        var b = eval(attr).slice().reverse();
        document.getElementById('btn_nest').innerHTML = '';
        document.getElementById("judul").innerHTML = b[0];
        document.getElementById("demo").innerHTML = '<h2>&#x0627&#x0644&#x0639&#x0646&#x0648&#x0627&#x0646</h2><div id="yt"><img src="yt-128.png" width="64px"/></div>';
        initShahrour(eval(b));
        window.smoothScroll(document.getElementById("judul"));
    }
}
var barnamajBtn = document.getElementsByClassName("btn-barnamaj");
for (var i = 0; i < barnamajBtn.length; i++) {
    barnamajBtn[i].addEventListener('click', barnamajBtnOnClick, false);
}