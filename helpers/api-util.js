export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-1-405e4-default-rtdb.firebaseio.com/cryptos.json');
     const data = await response.json();
 
     const events = [];
     for (const key in data) {
         events.push({
             id: key,
             ...data[key]
         })
     }
     return events;
 }
 
 export async function getSearchEvents() {
     const response = await fetch('https://nextjs-course-1-405e4-default-rtdb.firebaseio.com/cryptos.json');
      const data = await response.json();
  
      const events = [];
      for (const key in data) {
          events.push({
              id: key,
              ...data[key]
          })
      }
      return events;
  } 
 
 
 export async function getFeaturedEvents() {
     const allEvents = await getAllEvents();
     return allEvents.splice(0,30).filter((event) => event.id);
   }
   