
import { Request,Response } from "express";
const { google } = require('googleapis');
import {authorize} from './calendar';



const fetchTimeSlots = async (calendarId: any, startTime : string, endTime :string)=>{
 const authClient = await authorize();
 
  const calendar  = google.calendar({version: 'v3',authClient});

  

  try {
    
    const response = calendar.events.list(
      {
        calendarId,
        timeMin: startTime,
        timeMax: endTime,
        singleEvents: true,
        orderBy: 'startTime',
      }
    );
    const events = response.data.items || [];
    const availableSlots = [];

    let currentSlotStart = startTime;
    for(const event of events){
      if(event.start.dateTime < currentSlotStart){
        availableSlots.push({
          start: currentSlotStart,
          end: event.start.dateTime,
        });
      }

      // Check for availability at the end of the specified period
    if (currentSlotStart < endTime) {
      availableSlots.push({
        start: currentSlotStart.toString(),
        end: endTime.toString()
      });
    }

    console.log('Available time slots:');
    console.log(availableSlots);
    }
  } catch (error) {
    console.error('The API request failed', error); 
  }
}

export const scheduleTask = async (req:Request,res:Response)=>{
  
  const calendarId = 'primary';

  const now = new Date();
  const specifiedDate = new Date(2024, 11, 25); // Year, Month (0-indexed), Day

  // Ensure specified date is after the current time
  if (specifiedDate < now) {
    console.error('Specified date must be after the current time.');
    return;
  }

  const startTime = now.toString(); // Use current time as start time (optional, adjust as needed)
  const endTime = specifiedDate.toString(); // Specified date as end time

  await fetchTimeSlots(calendarId, startTime, endTime);
  
  res.send("The task has been scheduled");

  
}
