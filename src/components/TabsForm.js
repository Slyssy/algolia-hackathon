import React, {useState, useEffect} from "react"
 

export default function TabsForm(props) {  
   // eslint-disable-next-line
    const [value, setValue] = useState([{
        searchCriteria: "",
        forCriteria: "",
        byCriteria: ""
      }])
    const [tabResults, setTabResults] = useState([props.searchResults])


    const handleSearchCriteria = (event) => {
        setValue({
        searchCriteria: event.target.value
        })
         console.log(tabResults)
         console.log(props.inputValue)
        // if (event.target.value ==="All")
        switch(event.target.value) {
            case "All":
                  if(!props.inputValue){
                  console.log("Hello")
                  props.character(props.stories)
                  } else {
                  console.log("Goodbye")
                  props.character(tabResults)
                  }
              break;
            case "Stories":
              
            if(!props.inputValue){
              console.log("Hello")
              const storiesArray1 = props.stories.filter(
                (story) => {
                  return story._tags.includes("story");
                }
                // ||
                // story.body.includes(event.targe.value)
              );
             props.character(storiesArray1)
            } else {
                console.log("Goodbye")
                const storiesArray2 = tabResults.filter(
                  (story) => {
                    return story._tags.includes("story");
                  }
                  // ||
                  // story.body.includes(event.targe.value)
                );
               props.character(storiesArray2)
                }
          
              break;
            case "Comments": 
                //displays only the comments
                  if(!props.inputValue){
                    const CommentsArray1 = props.stories.filter(
                      (story) => {
                        return story._tags.includes("comments");
                      });
                   props.character(CommentsArray1)
                  } else{
                      console.log("Goodbye")
                      const CommentsArray2 = tabResults.filter(
                        (story) => {
                          return story._tags.includes("comments");
                        });
                     props.character(CommentsArray2)
                      }
              break;
                
            default:
              console.log("There is an error")
          }
    }
    const handleByCriteria = (event) => {
        setValue({
        byCriteria: event.target.value
        })
        switch(event.target.value) {
            case "Popularity":
              
                console.log("Initial",props.searchResults)
                let sortedArraybyPop =props.searchResults.slice().sort((a, b) => {

                  return b.points - a.points});
               props.character(sortedArraybyPop)
              console.log("Final", props.searchResults)
              break;
                
            case "Date":
                console.log("Initial", props.searchResults)
                let sortedArraybyDate = props.searchResults.slice().sort((a, b) => {
                    return b.created_at_i - a.created_at_i}) 
              props.character(sortedArraybyDate)  
              console.log("Should be", props.searchResults)
              break;
            default:
              console.log("There was an error")
          }
     }
    const handleForCriteria = (event) => {
        setValue({
        byCriteria: event.target.value
        })
        const calcDaysPast = function(date1, date2){
           return Math.abs(date2 - date1) 
        }
        let utz = (string) => new Date(string).getTime()
        const today = new Date().getTime()
        console.log(event)
        switch(event.target.value) {
            case "Alltime":
              {
                if(!props.inputValue){
                  console.log("Hello")
                  props.character(props.stories)
                  } else {
                  console.log("Goodbye")
                  props.character(tabResults)
                  }
              break;
                  }
            case "Last24h":
              {
                if (!props.inputValue){
                  const last24HrArray1 = props.stories.filter(
                    (story) => {
                      return calcDaysPast(utz(story.created_at), today) < 86400000 });
                    props.character(last24HrArray1) 
                    }
                  else{
                      const last24HrArray2 = tabResults.filter(
                        (story) => {
                          return calcDaysPast(utz(story.created_at), today) < 86400000 });

                          props.character(last24HrArray2) 
                        }
              break;
                }
            case "PastWeek":
              {
                if (!props.inputValue){
                  const pastWeekArray1 = props.stories.filter(
                    (story) => {
                      return calcDaysPast(utz(story.created_at), today) < 604800000 });
                    props.character(pastWeekArray1)
                    // props.character(props.stories.filter(stories => calcDaysPast(utz(stories.created_at), today) < 604800000))
                  } else{
                    const pastWeekArray2 = tabResults.filter(
                      (story) => {
                        return calcDaysPast(utz(story.created_at), today) < 604800000 });
                      props.character(pastWeekArray2)
                  }
              break;
                }
            case "PastMonth":
              {
                if (!props.inputValue){
                  const pastMonthArray1 = props.stories.filter(
                    (story) => {
                      return calcDaysPast(utz(story.created_at), today) < 2592000000 });
                    props.character(pastMonthArray1)
                  } else{
                    const pastMonthArray2 = tabResults.filter(
                      (story) => {
                        return calcDaysPast(utz(story.created_at), today) < 2592000000 });
                      props.character(pastMonthArray2)
                  }
              break;
                }
            case "PastYear":
              {
                if (!props.inputValue){
                  const pastYearArray1 = props.stories.filter(
                    (story) => {
                      return calcDaysPast(utz(story.created_at), today) < 31536000000 });
                    props.character(pastYearArray1)
                  } else{
                    const pastYearArray2 = tabResults.filter(
                      (story) => {
                        return calcDaysPast(utz(story.created_at), today) < 31536000000 });
                      props.character(pastYearArray2)
                  }
              break;
                }
            default:
              console.log("There was an error")
              // code block
          }
        
     }

      useEffect(() => {
        setTabResults(props.searchResults)
          }, 
          // eslint-disable-next-line
          [props.inputValue])
       
          

    return (
        <form className= "Tabs">
          <label htmlFor="searchCriteria">Search </label>
            <select className ="searchCriteria" onChange={handleSearchCriteria} id="searchCriteria" name="searchCriteria">
                <option value="All">All</option>
                <option value="Stories">Stories</option>
                <option value="Comments">Comments</option>
            </select>
          <label htmlFor="byCriteria">by </label>
            <select className ="byCriteria" onChange={handleByCriteria} id="byCriteria" name="byCriteria">
                <option value="Popularity">Popularity</option>
                <option value="Date">Date</option>
            </select>
          <label htmlFor="forCriteria">for</label>
            <select className ="forCriteria" onChange={handleForCriteria} id="forCriteria" name="forCriteria">
                <option value="Alltime">All time</option>
                <option value="Last24h">Last 24h</option>
                <option value="PastWeek">Past Week</option>
                <option value="PastMonth">Past Month</option>
                <option value="PastYear">Past Year</option>
            </select> 
        </form>
    )
}