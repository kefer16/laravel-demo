<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contactame</title>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link rel="stylesheet" href=" {{ asset('/css/app.css') }} ">
</head>

<body>
    @include('header')
    @include('bannerContactos')
    @include('form_contact')
    @include('map')
    @include('footer')
</body>

</html>
