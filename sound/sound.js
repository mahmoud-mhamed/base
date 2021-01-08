class Sound {
    static run(type = 'success') {//type success,error,info
        if ($('#sound_success').length != 0) {
            if ($('#input_sound_value').length != 0) {
                if (Cookie.get('sound_value') > 0) {
                    $('#sound_' + type)[0].volume = (Cookie.get('sound_value') / 10);
                } else {
                    $('#sound_' + type)[0].volume = 0.7;
                }
            }
            $('#sound_' + type)[0].currentTime = 0;
            $('#sound_' + type)[0].play();
        }
    }
}
