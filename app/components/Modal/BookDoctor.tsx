'use client'
import {useEffect, useState} from 'react'
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
import { getTime } from '@/app/utils/getTime'
interface iTimeSlot {
    time: string
}
 const BookDoctor = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [chosenTime, setChosenTime] = useState('');
    const [timeSlot, setTimeSlots] = useState<iTimeSlot[] | undefined>()

    const isPastDay = (day: Date) => {
        return day < new Date()
    }
    useEffect(()=>{
        getTime(setTimeSlots)
    }, [])
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
                            <div className=' max-md:h-[200px] max-md:overflow-y-scroll md:grid md:grid-cols-4 mt-5 '>
                                {/* Calendar */}
                                <div className="flex flex-col gap-3 items-baseline md:col-span-2">
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
                                {/* Time slot */}
                                <div className='mt-3 md:mt-0 md:col-span-2'>
                                    <h2 className='flex gap-2 items-center mb-3'>
                                    <Clock className='text-blue-500 h-5 w-5'/>
                                    Select convenient time
                                    </h2>
                                <div className='grid grid-cols-3 gap-2 border rounded-lg p-5'>
                                    {timeSlot?.map((item, i)=> {
                                        return (
                                            <h2 
                                            onClick={()=> setChosenTime(item?.time)}
                                            key={i}
                                            className={`p-2 border cursor-pointer text-center hover:bg-blue-500 hover:text-white transition rounded-full ${chosenTime === item?.time ? ' bg-rose-500 text-white': ''}`}
                                            >
                                                {item?.time}
                                            </h2>
                                        )
                                    })}

                                </div>
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

