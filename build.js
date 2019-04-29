let categoryTitle = ['media', 'social', 'reddit', 'games', 'shop', 'banking', 'code', 'school', 'colors'];
let colors = ['font_pre01', 'font_pre02', 'font_pre03'];
let categoryLinks = [
    //media
    [
        ['https://mail.google.com/mail/u/0/#inbox', 'mail'],
        ['https://netflix.com', 'netflix'],
        ['https://youtube.com/feed/subscriptions', 'youtube'],
        ['https://twitch.tv', 'twitch'],
        ['https://blog.fefe.de/?css=lesefefe.css', 'fefe']
    ],
    //social
    [
        ['https://pr0gramm.com', 'pr0'],
        ['https://discordapp.com/channels/@me', 'discord'],
        ['https://telegram.org/dl/webogram', 'telegram'],
        ['https://stackexchange.com', 'stackexchange'],
        ['https://stackoverflow.com', 'stackoverflow'],
        ['https://twitter.com', 'twitter'],
        ['https://instagram.com', 'insta']
    ],
    //reddit
    [
        ['https://reddit.com/r/mac/', 'mac'],
        ['https://reddit.com/r/unixporn/', 'unixporn'],
        ['https://reddit.com/r/pewdiepie/', 'pewdiepie'],
        ['https://reddit.com/r/startpages/', 'startpages'],
        ['https://reddit.com/r/satisfying/', 'satisfying'],
        ['https://reddit.com/r/metalcore/', 'metalcore']
    ],
    //games
    [
        ['https://humblebundle.com', 'humble bundle'],
        ['https://store.steampowered.com/', 'steam'],
        ['https://www.gog.com/', 'gog']
    ],
    //shop
    [
        ['https://www.amazon.de/', 'amazon'],
        ['https://ebay-kleinanzeigen.de', 'kleinanzeigen'],
        ['https://www.ebay.de/', 'ebay'],
        ['https://www.impericon.com/de/', 'impericon'],
        ['https://www.customplugs.com/', 'customplugs'],
        ['https://www.thomann.de/de/index.html?permsel=1', 'thomann'],
        ['https://www.etsy.com/', 'etsy'],
        ['https://www.killstar.com/', 'killstar']
    ],
    //banking
    [
        ['https://paypal.com/signin', 'paypal'],
        ['https://kreditkarten-banking.lbb.de/Amazon/cas/dispatch.do?bt_PRELON=do&ref=1200_AMAZON&service=COS', 'lbb']
    ],
    //code
    [
        ['https://github.com/majesticLSD', 'github'],
        ['https://devdocs.io/', 'devdocs'],
        ['https://w3schools.com', 'w3schools'],
        ['https://fontawesome.com/', 'fontawesome'],
        ['https://fonts.google.com/', 'google-fonts']
    ],
    //school
    [
        ['https://poly.webuntis.com/WebUntis/?school=rbz-technik#/basic/main', 'timetable'],
        ['https://moodle.rbz-technik-kiel.de/moodle/login/index.php', 'moodle'],
        ['http://moodle.rbz-technik.de:20010/users/sign_in', 'GitLab'],
        ['https://www.rbz-technik.de/fileadmin/user_upload/Inhalte/Formulare/EntschuldigungsFormular_BS_2017_07_11F.pdf', 'Entschuldigung'],
        ['https://drive.google.com/drive/folders/1a5s0faKhFjJPXcNncWaUQ7G-ku7qR9cp', 'drive']
    ],
    //colors
    [
        ['https://colorhunt.co/', 'colorhunt'],
        ['https://www.colorhexa.com/', 'colorhexa'],
        ['https://color.adobe.com/create/color-wheel/', 'colorwheel']
    ]
];

window.onload = function() {
    insertLinks();
};

function insertLinks() {
    let html = '';
    let numGroup = 0;
    let numCat = '01';
    for (let i = 0; i < categoryTitle.length; i++) {
        if (i === 0 || i === 3 || i === 6){
            if (i === 0) {
                //alert('first html appending');
                html += '<div id=\'cat_top\'>';
            }
            numGroup++;
            html += '<div id=\'grp_0' + numGroup + '\' class=\'cat_group\'>';
        }
        if (i > 8) {
            numCat = '02';
        }
        html += '<div class=\'cat_' + numCat + ' cat_' + categoryTitle[i] + '\'>';
        html += '<label class=\'catPreText font_bold\'>';
        html += '<span class=\'' + colors[0] + '\'> ~ </span>';
        html += '<span class=\'' + colors[1] + '\'> ❯ </span>';
        html += '[<span class=\'' + colors[2] + '\'>' + categoryTitle[i] + '</span>]<span class=\'' + colors[1] + '\'>: </span>ls';
        html += '</label>';
        html += '<div class=\'links\'>';
        for (let x in categoryLinks[i]) {
            html += '       <a href=\'' + categoryLinks[i][x][0] + '\'>' + categoryLinks[i][x][1] + '</a>';
        }
        html += '</div>';
        html += '</div>';
        if (i === 2 || i === 5 || i === 8) {
            if (i === 8) {
                html += '</div>';
            }
            html += '</div>';
        }
    }
    document.getElementById('content').innerHTML = html;
    let heightCatTop = 0;
    for (let i = 1; i <= numGroup; i++) {
        let heightCatGrp = document.getElementById('grp_0' + i).offsetHeight;
        if (heightCatGrp > heightCatTop)
            heightCatTop = heightCatGrp;
    }
    document.getElementById('cat_top').style.height = (heightCatTop + 10) + 'px';
}
