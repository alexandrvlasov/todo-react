import React from 'react'
// import { array, object } from 'prop-types'

const Main = ({ todoLists }) => (
    <div>
        <ol>
            {
                
                Object.keys(todoLists).map((key, i) => (
                    <li key={i}>{todoLists[key].text}</li>
                ))
                // todoLists.map((item, index) => (
                //     <li key={String(index)}>
                //         {item}
                //     </li>
                // ))
            }
        </ol>
    </div>
)

// Main.propTypes = {
//     todoLists: array.isRequired
// }

export default Main