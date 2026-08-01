<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;


Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [AppointmentController::class, 'index'])->name('dashboard');
    Route::post('appointment',[AppointmentController::class,'store'])->name('appointment.store');
    Route::put('appointment/{appointment}',[AppointmentController::class,'update'])->name('appointment.update');
    Route::delete('appointment/{appointment}',[AppointmentController::class,'destroy'])->name('appointment.destroy');
});

require __DIR__.'/settings.php';
