'use client'
import {useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {CalendarDays, Clock} from 'lucide-react'
 const BookDoctor = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const isPastDay = (day) => {
        return day < new Date()
    }
    return(
        <Dialog>
            <DialogTrigger>
                <div>
                <div 
                  className='rounded-full mt-1 bg-blue-500 p-3 text-white'
                    >
                     Book appointment
                        </div>
                </div>
                    </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book Doctor</DialogTitle>
                    <DialogDescription>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                                {/* Calendar */}
                                <div className="flex flex-col gap-3 items-baseline">
                                    <h2 className='flex gap-2 items-center'>
                                        <CalendarDays className='text-blue-500 h-5 w-5'/>
                                        Select Date
                                    </h2>
                                    <Calendar
                                    mode='single'
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={isPastDay}
                                    className='rounded-md border'
                                    />
                                </div>

                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    ) 
}


export default BookDoctor

