class Table {
    // type = create || refresh
    //find_type= eq->find by td eq,attr->find by td attr
    //attr in checkbox
    // data-display-table -> table_selector, data-display-col->col_display,
    // data-display-att->th att like (data-display-attr='data-name') in th data-name
    static check_hide_col(container_check, type = 'create',find_type='eq') {
        $(container_check + ' input:checkbox[data-display-table]').each(function () {
            var table_selector = $(this).attr('data-display-table');
            if (find_type=='eq')
             var col_index = $(this).attr('data-display-col');
            else if (find_type=='attr'){
                var data_display_attr=$(this).attr('data-display-attr');
                var col_index=$(table_selector).find('th['+data_display_attr+']').index();
            }
            if (type == 'create') {
                $(this).on('change', function () {
                    var state = $(this).prop('checked');
                    $(table_selector + ' tr').each(function () {
                        if (state)
                            $(this).children().eq(col_index).show();
                        else
                            $(this).children().eq(col_index).hide();
                    });
                });
            }
            var state = $(this).prop('checked');
            $(table_selector + ' tr').each(function () {
                if (state)
                    $(this).children().eq(col_index).show();
                else
                    $(this).children().eq(col_index).hide();
            });
        });
    }

    //append loading row to table
    static load_table(table_selector) {
        var count_col = $(table_selector + ' thead tr:first').children().length;
        $(table_selector + ' tbody').append(
            '<tr>' +
            '<td colspan="' + count_col + '" class="text-center" >' +
            '<span style="font-size: 32px;">Loading, please wait </span>' +
            '<div class="d-inline-block" style="max-width: 150px;">' +
            '<div class="circle"></div>' +
            '<div class="circle"></div>' +
            '<div class="circle"></div>' +
            '</div>' +
            '</td>' +
            '</tr></tbody>'
        )
    }

    //to stop sort in column use class no-sort
    static run_sort(table_selector = 'table.sorted') {
        $(table_selector + ':not([data-sorted="server"])').tablesort();
    }

    static run_filtable(table_selector = '#table_data', filter_container_selector = '#table_data_filter', function_aftertablefilter = '') {
        $(table_selector).filtable({
            controlPanel: $(filter_container_selector)
        });
        if ($.isFunction(function_aftertablefilter)) {
            $(table_selector).on('aftertablefilter', function (event) {
                function_aftertablefilter();
            });
        }
    }
}
