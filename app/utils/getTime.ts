
interface iTimeSlot {
    time: string
}
export const getTime = (setTimeSlots: React.Dispatch<React.SetStateAction<iTimeSlot[] | undefined>> ) => {
    const timeArray=[];

    //loop for am time
    for (let i = 10; i <=12; i++) {
        timeArray.push({
            time: i + ':00AM'
        })
        
        timeArray.push({
            time: i + ':30AM'
        })
    };
    //afternoon

    for(let i = 1; i <=6; i++) {
        timeArray.push({
            time: i + ':00PM'
        })
        timeArray.push({
            time: i + ':30PM'
        })
    }
    //set the time array
     return setTimeSlots(timeArray)
}