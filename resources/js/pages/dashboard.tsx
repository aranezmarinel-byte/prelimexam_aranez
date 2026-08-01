import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { label } from '@/components/ui/label';
import { dashboard } from '@/routes';
import { useForm } from '@inertiajs/react';

export default function Dashboard() {
    const form = useForm({name: '', email: '', phone: '' , purpose: '', appointment_date: ''});

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        form.post('/appointment',{
            onSuccess: () => form.reset(),
        });

    }
    
    
        return (
        <>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div> 
                    <h1 className="text-xl font-semibold">Appointments</h1>
                    <p className="text-muted-foreground text-sm">
                        add new appointment 
                    </p>
                </div>
    
                <form onSubmit={submit} className="max-w-x1 space-y-4 rounded-lg border p-4">
                    <div className="space-y-2">
                    <label htmlFor="name">Name:</label>
                    <Input 
                            id="name"
                            value={form.data.name}
                            onChange={(event) => form.setData('name', event.target.value)}
                            /> 
                            {form.errors.name && <p className="text-sm text-red-600">{form.errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="email">Email:</label>

                    <Input
                            id="email"
                            value={form.data.email}
                            onChange={(event) => form.setData('email', event.target.value)}
                            />
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="phone">Phone:</label>

                    <Input 
                            id="phone"
                            value={form.data.phone}
                            onChange={(event) => form.setData('phone', event.target.value)}
                            />
                            {form.errors.phone && <p className="text-sm text-red-600">{form.errors.phone}</p>}

                    </div>

                    <div className="space-y-2">
                    <label htmlFor="purpose">Purpose:</label>

                    <Input 
                            id="purpose"
                            value={form.data.purpose}
                            onChange={(event) => form.setData('purpose', event.target.value)}
                            />
                            {form.errors.purpose && <p className="text-sm text-red-600">{form.errors.purpose}</p>}

                    </div>

                    <div className="space-y-2">
                    <label htmlFor="appointment_date">Appointment Date:</label>

                    <Input 
                            id="appointment_date"
                            type="date"
                            value={form.data.appointment_date}
                            onChange={(event) => form.setData('appointment_date', event.target.value)}
                            />
                            {form.errors.appointment_date && <p className="text-sm text-red-600">{form.errors.appointment_date}</p>}

                    </div>





                    <Button type="submit" disabled={form.processing}>
                        Save Appointment
                    </Button>
                </form>
                

            </div>      
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};

