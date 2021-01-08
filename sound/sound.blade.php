{{--

--}}
@section('script_head')
    <script data-pagespeed-no-defer type="text/javascript" src="{{asset('base/sound/sound.js')}}"></script>
@append
@section('content_footer')
    <audio src="{{asset('base/sound/success.mp3')}}" id="sound_success"></audio>
    <audio src="{{asset('base/sound/info.mp3')}}" id="sound_info"></audio>
    <audio src="{{asset('base/sound/error.mp3')}}" id="sound_error"></audio>
@append

