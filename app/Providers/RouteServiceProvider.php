<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    public const HOME = '/calendar';

    public function boot(): void
    {
        parent::boot(); // Важно, чтобы унаследованная логика работала
    }
}