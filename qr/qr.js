class Qr {
    static create_element_qr(img_url, selector, qr_url, qr_text, allow_download = true, function_when_finish = '',
                             setting = {
                                 size: 350,
                                 mSize: 0.30
                             }) {
        var logoImg = new Image();
        logoImg.onload = function () {
            var td = $(selector);
            td.html('');

            var options = {
                // render method: 'canvas', 'image' or 'div'
                render: 'canvas',

                // version range somewhere in 1 .. 40
                minVersion: 8,
                maxVersion: 40,

                // error correction level: 'L', 'M', 'Q' or 'H'
                ecLevel: 'H',

                // offset in pixel if drawn onto existing canvas
                left: 0,
                top: 0,

                // size in pixel
                size: setting.size,
                // size: 350,

                // code color or image element
                fill: '#000',

                // background color or image element, null for transparent background
                background: '#ffffff',

                // content
                text: qr_url,

                // corner radius relative to module width: 0.0 .. 0.5
                radius: 0,

                // quiet zone in modules
                // quiet: 1,
                quiet: 5,

                // modes
                // 0: normal
                // 1: label strip
                // 2: label box
                // 3: image strip
                // 4: image box
                mode: 4,

                mSize: setting.mSize,
                // mSize: 0.30,
                mPosX: 0.5,
                mPosY: 0.5,

                label: 'Q.R',
                fontname: 'sans',
                fontcolor: '#000',
                image: logoImg,

                string_under_qr: qr_text,
                string_under_qr_size: '30',
                string_under_qr_color: 'black',
                string_under_qr_x: '200',

            };
            td.qrcode(options);

            // var canvas = document.querySelector("canvas");
            var canvas = td.find('canvas')[0];
            if (canvas && allow_download) {
                var img = canvas.toDataURL("image/png");
                $(canvas).on('click', function () {
                    // Create an anchor, and set its href and download.
                    design.useSound();
                    var dl = document.createElement('a');
                    dl.setAttribute('href', img);
                    dl.setAttribute('download', qr_text + '.png');
                    // simulate a click will start download the image, and name is qrcode.png.
                    dl.click();
                });
            }

            if ($.isFunction(function_when_finish)) {
                function_when_finish();
            }
        };
        logoImg.src = img_url;
    }

}

/*function create_table_qr(table_selector,allow_download=true,selector_td=null,function_when_finish='') {
    var logoImg = new Image();
    logoImg.onload = function () {
        $(table_selector + '  tbody tr').each(function () {
            var td = $(this).find('td[data-qr]');
            td.html('');
            if(selector_td!=null){
                if(!td.is(selector_td)){
                    return;
                }
            }
            var qr_value = td.attr('data-qr');
            var options = {
                // render method: 'canvas', 'image' or 'div'
                render: 'canvas',

                // version range somewhere in 1 .. 40
                minVersion: 8,
                maxVersion: 40,

                // error correction level: 'L', 'M', 'Q' or 'H'
                ecLevel: 'H',

                // offset in pixel if drawn onto existing canvas
                left: 0,
                top: 0,

                // size in pixel
                size: 350,

                // code color or image element
                fill: '#000',

                // background color or image element, null for transparent background
                background: '#ffffff',

                // content
                text:  qr_value,
                // text: '{{env('web_site_url')}}' + '?search=' + qr_value,

                // corner radius relative to module width: 0.0 .. 0.5
                radius: 0,

                // quiet zone in modules
                // quiet: 1,
                quiet: 5,

                // modes
                // 0: normal
                // 1: label strip
                // 2: label box
                // 3: image strip
                // 4: image box
                mode: 4,

                mSize: 0.30,
                mPosX: 0.5,
                mPosY: 0.5,

                label: 'Q.R',
                fontname: 'sans',
                fontcolor: '#000',
                image: logoImg,

                string_under_qr: qr_value,
                string_under_qr_size: '30',
                string_under_qr_color: 'black',
                string_under_qr_x: '250',

            };
            td.qrcode(options);

            // var canvas = document.querySelector("canvas");
            var canvas = td.find('canvas')[0];
            if(canvas && allow_download){
                var img = canvas.toDataURL("image/png");
                $(canvas).on('click', function () {
                    // Create an anchor, and set its href and download.
                    design.useSound();
                    var dl = document.createElement('a');
                    dl.setAttribute('href', img);
                    dl.setAttribute('download', qr_value + '.png');
                    // simulate a click will start download the image, and name is qrcode.png.
                    dl.click();
                });
            }
        });
        if($.isFunction(function_when_finish)){
            function_when_finish();
        }
    };
    logoImg.src = "{{asset('images/icon_qr.png')}}";
}*/

/*function download_all_qr(table_selector,selector_td='') {
    var tr = $(table_selector + ' tbody tr'+selector_td);
    var length = tr.length;

    async function task(i) { // 3
        await timer(500);
        // console.log(i+ ' task done!');
        $(tr).eq(i).find('canvas').trigger('click');
    }

    async function main() {
        for (let i = 0; i < length; i++) {
            // $(tr).eq(i).find('canvas').trigger('click');
            await task(i);
        }
    }

    main();

    function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
}*/


