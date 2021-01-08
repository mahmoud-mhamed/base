@section('script')
    @if(Session::has('success'))
        <script>
            Swal.fire(
                'تمت العملية بنجاح',
                '{{Session::get('success')}}',
                'success'
            );
            Sound.run();
        </script>
    @endif
    @if(Session::has('fault'))
        <script>
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '{{Session::get('fault')}}',
            });
            Sound.run();
        </script>
    @endif

    @if($errors->any() )
        <script>
            @if (Route::currentRouteAction()=='App\Http\Controllers\Auth\LoginController@showLoginForm')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'اسم المستخدم او كلمة المرور خاطئة حاول مرة اخري !',
            });
            @else
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'حصل خطاء في العملية!',
            });
            @foreach($errors->all() as $e)
            alertify.error("{{$e}}");
            @endforeach

            @endif
            Sound.run('error');
        </script>
    @endif
@append
