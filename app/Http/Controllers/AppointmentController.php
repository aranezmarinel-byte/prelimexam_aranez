<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    
    public function index()
    {
        return Inertia::render('dashboard', [
            'appointments' => Appointment::all(),
        ]);
    }

   
    public function create()
    {
        return view('appointments.create');
    
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required','numeric',
            'purpose' => 'required',
            'appointment_date' => 'required|date',
        ]);

        Appointment::create($request->all());
        return redirect()->route('appointments.index');
        
    }

    
    public function show(Appointment $appointment)
    {
        return Inertia('Appointments/Show', [
            'appointment' => $appointment,
        ]);
        
    }

    
    public function edit(Appointment $appointment)
    {
        
    }

    public function update(Request $request, Appointment $appointment)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'purpose' => 'required',
            'appointment_date' => 'required|date',
        ]);

        $appointment->update($request->all());
        return redirect()->route('appointments.index');
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return redirect()->route('appointments.index');
    }
}
