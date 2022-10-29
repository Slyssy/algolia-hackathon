import React, {useState, useEffect} from "react"


export default function TabsForm(props) {  
    const [value, setValue] = useState([{
        searchCriteria: "",
        forCriteria: "",
        byCriteria: ""
      }])
    const handleSearchCriteria = (event) => {
        setValue({
        searchCriteria: event.target.value
        })
        // switch(event.target.value) {
        //     case "All":
        //       // code block
        //       break;
        //     case "Stories":
        //       // code block
        //       break;
        //     case "Comments":
        //       // code block
        //       break;
        //     default:
        //       // code block
        //   }
    }
    const handleByCriteria = (event) => {
        setValue({
        byCriteria: event.target.value
        })
        // switch(event.target.value) {
        //     case "Popularity":
        //       // code block
        //       break;
        //     case "Date":
        //       // code block
        //       break;
        //     default:
        //       // code block
        //   }
        // props.changeList(props.stories)
     }
    const handleForCriteria = (event) => {
        setValue({
        byCriteria: event.target.value
        })
        // switch(event.target.value) {
        //     case "Alltime":
        //       // code block
        //       break;
        //     case "Last24h":
        //       // code block
        //       break;
        //     case "PastWeek":
        //       // code block
        //       break;
        //     case "PastMonth":
        //       // code block
        //       break;
        //     case "PastYear":
        //       // code block
        //       break;
        //     default:
        //       // code block
        //   }
        // props.changeList(props.stories)
     }

      useEffect(() => {
        console.log("UPDATED value", value)
          }, [value])

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