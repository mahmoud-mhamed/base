{{--

--}}
@section('style')
    <link rel="stylesheet" href="{{asset('base/bootstrap_select/src/bootstrap-select.min.css')}}">
    <link rel="stylesheet" href="{{asset('base/bootstrap_select/bootstrap_select.css')}}">
@append
@section('script_head')
    <script data-pagespeed-no-defer src="{{ asset('base/bootstrap_select/src/bootstrap-select.min.js') }}"></script>
    <script data-pagespeed-no-defer src="{{ asset('base/bootstrap_select/bootstrap_select.js') }}"></script>
@append

