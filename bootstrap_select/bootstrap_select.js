class Bootstrap_select {
    static run(select_selector='.selectpicker'){
        $(select_selector).selectpicker();
    }

    static refresh(select_selector='.selectpicker'){
        $(select_selector).selectpicker('refresh');
    }
}
