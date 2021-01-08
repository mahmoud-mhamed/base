@section('style')
    <link rel="stylesheet" href="{{asset('base/go_to_top_bottom/go_to_top_bottom.css')}}">
@append
@section('content_footer')
    <div id="goToBottom" class='position-fixed'>
        <button class='btn font-weight-bold' style="background: #E03523">
            <i class="fas fa-angle-double-down fa-2x"></i>
        </button>
    </div>

    <div id="goToTop" class='position-fixed'>
        <button class='btn font-weight-bold' style="background: #E03523">
            <i class="fas fa-angle-double-up fa-2x"></i>
        </button>
    </div>
@append
@section('script')
    <script data-pagespeed-no-defer src="{{asset('base/go_to_top_bottom/go_to_top_bottom.js')}}"></script>
@append

