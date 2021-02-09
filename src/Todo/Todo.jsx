import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD, DEL, EDIT } from "../Reduxstore/Actions";
import { connect } from "react-redux";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Todo = ({ list }) => {
  const [value, setvalue] = useState("");
  const [edit, setedit] = useState(false);
  const [editid, seteditid] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const getmydata = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts `
        );
        console.log(res);
        if (res.status === 200) {
          console.log(res.data, "i am your axios data");
        } else {
          console.log("status is not okay");
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    getmydata();
  });
  const leavemee = async () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${0}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        // const posts = this.state.posts.filter((item) => item.id !== id);
        // this.setState({ posts });
      });
  };
  return (
    <div className="todobody">
      <div className="main_cont">
        <h2>Todo app</h2>
        <form>
          <input
            type="text"
            value={value}
            placeholder="Add an item"
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-success editbtn"
            onClick={(e) => {
              e.preventDefault();
              if (edit) {
                dispatch({
                  type: EDIT,
                  payload: { edititem: edit, value: value, editid: editid },
                });
              } else {
                dispatch({
                  type: ADD,
                  payload: { edititem: edit, value: value },
                });
              }
              setvalue("");
              setedit(false);
            }}
          >
            {edit ? "Update Item" : "Add item"}
          </button>
        </form>
        <div className="list">
          {list.length !== 0 ? (
            list.map((val, index) => {
              return (
                <li key={index} className="d-flex justify-content-around">
                  <div className="w-75 d-flex justify-content-start .worr">
                    {val}
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-outline-danger m-1"
                      onClick={() => dispatch({ type: DEL, payload: index })}
                    >
                      DEL
                    </button>

                    <button
                      className="btn btn-outline-success m-1"
                      onClick={() => {
                        setedit(true);
                        setvalue(val);
                        seteditid(index);
                      }}
                    >
                      EDIT
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <div>
              <h3 className="text-center mt-5 text-success">
                Nothing to show in List!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    list: state.list,
  };
}
export default connect(mapStateToProps)(Todo);

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { ADD, DEL, EDIT } from "../Reduxstore/Actions";
// import { connect } from "react-redux";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// const Todo = ({ listup, myvalueup }) => {
//   const [value, setvalue] = useState("");
//   const [edit, setedit] = useState(false);
//   const [editid, seteditid] = useState(0);

//   const dispatch = useDispatch();
//   return (
//     <div className="main_cont">
//       <h2>Todo app</h2>
//       <form>
//         <input
//           type="text"
//           value={value}
//           placeholder="Add an item"
//           onChange={(e) => {
//             setvalue(e.target.value);
//           }}
//         />
//         <button
//           className="btn btn-outline-success"
//           onClick={(e) => {
//             e.preventDefault();
//             dispatch({
//               type: ADD,
//               payload: { edititem: edit, value: value },
//             });
//             setvalue("");
//             setedit(false);
//           }}
//         >
//           Add item
//         </button>
//       </form>
//       <div className="list">
//         {listup.map((val, index) => {
//           return (
//             <li key={index}>
//               {val}
//               <span className="ml-5">
//                 <button
//                   className="btn btn-outline-danger"
//                   onClick={() => dispatch({ type: DEL, payload: index })}
//                 >
//                   DEL
//                 </button>
//               </span>
//               <span className="ml-5">
//                 <button
//                   className="btn btn-outline-success"
//                   onClick={() => {
//                     setedit(true);
//                     console.log(
//                       myvalueup,
//                       "myvalue in component you trying to acess"
//                     );
//                     setvalue(myvalueup);
//                     seteditid(index);
//                     dispatch({
//                       type: EDIT,
//                       payload: {
//                         index: index,
//                         edititem: edit,
//                         editid: index,
//                         myvalue: value,
//                       },
//                     });
//                   }}
//                 >
//                   EDIT
//                 </button>
//               </span>
//             </li>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// function mapStateToProps({ STORE: { list, myvalue } }) {
//   return {
//     listup: list,
//     myvalueup: myvalue,
//   };
// }
// export default connect(mapStateToProps)(Todo);
