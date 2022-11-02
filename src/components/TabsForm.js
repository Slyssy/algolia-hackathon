import React, {useState, useEffect} from "react"
 

export default function TabsForm(props) {  
    const [value, setValue] = useState([{
        searchCriteria: "All",
        forCriteria: "Popularity",
        byCriteria: "AllTime"
      }])
    const [tabResults, setTabResults] = useState([])


    const handleSearchCriteria = (event) => {
        setValue({
        searchCriteria: event.target.value
        })
         console.log(tabResults)
        // if (event.target.value ==="All")
        switch(event.target.value) {
            case "All":
              
                  props.character(props.stories)

                
              //     console.log("No Changes")
              //}
                
              
            // //   props.character(props.stories)}
              break;
            case "Stories":
              
            //     // displays only the stories
              if (tabResults.length !== 0 && tabResults.length === props.searchResults.Length){
                console.log("Hello")
                props.character(tabResults.filter(stories => stories._tags.includes("story")))
            
             } else{
                console.log("Goodbye")
                const resultsArray = props.stories.filter(
                  (story) => {
                    return story._tags.includes("story");
                  }
                  // ||
                  // story.body.includes(event.targe.value)
                );
               props.character(resultsArray)
            }
          
              break;
            case "Comments": 
                //displays only the comments
                
                if (tabResults.length !== 0 && tabResults.length === props.searchResults.Length){
                    props.character(tabResults.filter(stories => stories._tags.includes("comments"))
                      )
                  } else{
                      console.log("Goodbye")
                      const resultsArray = props.stories.filter(
                        (story) => {
                          return story._tags.includes("comments");
                        }
                        // ||
                        // story.body.includes(event.targe.value)
                      );
                     props.character(resultsArray)
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
              // code block
          }
     }
    const handleForCriteria = (event) => {
        setValue({
        byCriteria: event.target.value
        })
        const calcDaysPast = function(date1, date2){
           return date1 - date2 
        }
        let utz = (string) => new Date(string)
        const today = new Date().getTime()
        console.log(calcDaysPast(props.searchResults[1].created_at))
        console.log(props.searchResults[1].created_at)
        switch(event.target.value) {
            case "Alltime":
              {
                if (props.searchResults.length < tabResults.length || props.searchResults.length === 0) {
                    console.log("Search Results", props.searchResults, props.tabResults)
                    props.character(tabResults)
                  } else{
                  console.log("Search Results", props.searchResults, props.tabResults)
                  props.character(props.stories)}
              break;
                  }
            case "Last24h":
              {
                if (props.searchResults.length === 0){
                    props.character(props.stories.filter(story => calcDaysPast(story.created_at_i, today) < 1 ))
                  } else{
                      setTabResults(props.searchResults)
                      console.log("Tab Results", tabResults)
                      props.character(props.searchResults.filter(story => calcDaysPast(story.created_at_i, today) < 1)) 
                      console.log(props.searchResults)
                  }
              break;
                }
            case "PastWeek":
              {
                if (props.searchResults.length === 0){
                    props.character(props.stories.filter(stories => calcDaysPast(utz(stories.created_at), today) < 604800000))
                  } else{
                      setTabResults(props.searchResults)
                      console.log("Tab Results", tabResults)
                      props.character(props.searchResults.filter(stories => calcDaysPast(utz(stories.created_at), today) < 604800000)) 
                  }
              break;
                }
            case "PastMonth":
              {
                if (props.searchResults.length === 0){
                    props.character(props.stories.filter(stories => calcDaysPast(utz(stories.created_at), today) < 2592000000))
                  } else{
                      setTabResults(props.searchResults)
                      console.log("Tab Results", tabResults)
                      props.character(props.searchResults.filter(stories => calcDaysPast(utz(stories.created_at), today) < 2592000000)) 
                  }
              break;
                }
            case "PastYear":
              {
                if (props.searchResults.length === 0){
                    props.character(props.stories.filter(stories => calcDaysPast(utz(stories.created_at), today) < 31536000000))
                  } else{
                      setTabResults(props.searchResults)
                      console.log("Tab Results", tabResults)
                      props.character(props.searchResults.filter(stories => calcDaysPast(utz(stories.created_at), today) < 31536000000)) 
                  }
              break;
                }
            default:
              console.log("There was an error")
              // code block
          }
        
     }

      useEffect(() => {
        console.log("UPDATED value", value)
        // if(value.seachCriteria !== "All" && value.forCriteria !== "Stories" && byCriteria !== value.handleByCriteria !== "AllTime"){
        //     console.log("cool")
        // }
          }, [value, props.searchResults])
       
          

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
                {/* figure this out later */}
                {/* <option value="CustomRange">Custom Range</option> */}
            </select> 
        </form>
    )
}