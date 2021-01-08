{{--
table option classes for sorted
--}}
<?php
function pagination_page_list(){
    return ['10'=>10,'20'=>20,'50'=>50,'100'=>100,'all'=>2000];
}
?>
@section('style')
    <link rel="stylesheet" href="{{asset('base/table/table.css')}}">
@append

@section('script_head')
    <script data-pagespeed-no-defer src="{{asset('base/table/filtable/filtable.min.js')}}"></script>
    <script data-pagespeed-no-defer src="{{asset('base/table/tablesort/jquery.tablesort.min.js')}}"></script>
    <script data-pagespeed-no-defer src="{{asset('base/table/table.js')}}"></script>
@append


{{--
filter table
$('#table_data').filtable({
            controlPanel: $('#table_data_filter')
        });

 $('#mainTable').on('aftertablefilter', function (event) {
            getRowCounterInMainTable();
        });
--}}
