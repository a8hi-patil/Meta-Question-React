import React, { useEffect } from "react";
import { useState } from "react";
const Meta = (props) => {
  const [mainData, setMainData] = useState([
    { id: 1, data: "One", position: true },
    { id: 2, data: "Two", position: true },
    { id: 3, data: "Three", position: true },
    { id: 4, data: "Four", position: true },
    { id: 5, data: "Five", position: false },
  ]);

  function duplicateCheck(id, arr) {
    let size = arr.length - 1;
    let flag = true;
    for (let index = 0; index <= size; index++) {
      if (id == arr[index]) {
        flag = !flag;
        return flag;
      }
    }
    return flag;
  }

  function removeFromArray(id, arr) {
    const index = arr.indexOf(id);
    if (index > -1) {
     
      arr.splice(index, 1);
    }

  }

  const handerArray = [];
  const checkBoxHandler = (e) => {
    let id = e.target.id;
    let checked = e.target.checked;
    console.log(checked);
    if (checked && duplicateCheck(id, handerArray)) {
      handerArray.push(id);
    }else{
      removeFromArray(id,handerArray)
    }
    console.log(handerArray);
  };

  const rightKeyHandler = () => {
    handerArray.forEach((id) => {
      mainData.forEach((element) => {
        if (element.id == id) {
          element.position = !element.position;
        }
      });
    });
    setMainData([...mainData]);
    console.log(mainData);
  };
  let lefthanderArray = [];
  const leftcheckBoxHandler = (e) => {
    let id = e.target.id;
    let checked = e.target.checked;
    if (checked && duplicateCheck(id,lefthanderArray) ) {
      lefthanderArray.push(id);
    }else{
      removeFromArray(id,lefthanderArray)
    }
    console.log(lefthanderArray);
  };
  const leftKeyHandler = () => {
    lefthanderArray.forEach((id) => {
      mainData.forEach((element) => {
        if (element.id == id) {
          element.position = !element.position;
        }
      });
    });
    setMainData([...mainData]);
    console.log(mainData);
  };

  return (
    <div>
      <div className="container">
        <div className="boxLeft">
          {mainData.map((elm) => {
            if (elm.position) {
              return (
                <div key={elm.id}>
                  <input
                    type="checkbox"
                    id={elm.id}
                    onChange={(e) => {
                      checkBoxHandler(e);
                    }}
                  />{" "}
                  <h4>{elm.data}</h4>
                </div>
              );
            }
          })}
        </div>
        <div className="nav">
          <button
            onClick={() => {
              rightKeyHandler();
            }}
          >
            {">"}
          </button>
          <button
            onClick={() => {
              leftKeyHandler();
            }}
          >
            {"<"}
          </button>
        </div>
        <div className="boxRight">
          {mainData.map((elm) => {
            if (!elm.position) {
              return (
                <div key={elm.id}>
                  <input
                    type="checkbox"
                    id={elm.id}
                    onChange={(e) => {
                      leftcheckBoxHandler(e);
                    }}
                  />{" "}
                  <h4>{elm.data}</h4>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Meta;
