// import React, { useState } from 'react';
// // import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
// // import CardRowComponent from '../CardRowComponent/CardRowComponent.js';
// // import UserCard from '../UserCard/UserCard.js';
// // import ChartComponent from '../ChartComponent/ChartComponent.js';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// const { getRequestHeaders, getWeeklyData } = require('./GoogleDataRequestManager.js');

// export default function GoogleData (props) {
//   // fetch weekly data
//   const accessToken = props.user.accessToken;
//   const [weekData, setWeekData] = useState([]);
//   // let weekData = [];

//   let selected = [0,1,2,3,4,5,6];
//   const callBack = (state) => {
//     setWeekData(state);
//   }
//   const requestHeaders = getRequestHeaders(accessToken);
//   const timeRightNow = new Date().getTime();
//   getWeeklyData(timeRightNow, requestHeaders, callBack, weekData);

//   return (
//     <div>
//         {props.user.haslogin ?
//           <div>

          
//                 {/* <CardRowComponent user={props.user} selected={selected} data={weekData}/> */}
             
//                 {/* <ChartComponent data={weekData} selected={selected}/> */}

//            </div>
//        : null
//         }
//        {/* </Container> */}
//     </div>
//   );
// }
