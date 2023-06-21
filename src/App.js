import React, { useState, useRef } from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [detail, setDetail] = useState([
    {
      id: 1,
      title: "Sweep",
      description: " Complete Sweeping",
      complete: false,
    },
  ]);

  const handleTitle = (e) => {
    debugger;
    let newValue = e.target.value;
    setTitle(newValue);
  };

  const handleDescription = (e) => {
    let newValue = e.target.value;
    setDescription(newValue);
  };

  const handleRemove = (id) => {
    const newArr = detail.filter((item) => {
      return item.id !== id;
    });
    setDetail(newArr);
  };

  const handleComplete = (id) => {
    let noDetail = detail.filter((item) => {
      if (item.id !== id) {
        return true;
      }
    });

    const selectedTodo = detail.find((item) => {
      return item.id === id;
    });
    selectedTodo.complete = true;
    noDetail.push(selectedTodo);

    setDetail(noDetail);
  };
  const handleEdit = (id) => {
    let newArr = detail.filter((item) => {
      if (item.id !== id) {
        return true
       
      }else {
        setTitle(item.title);
        setDescription(item.description);
        return false;
      }

    
    });

    setDetail(newArr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //   let copy = [...toDoList];
    //  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    //  setToDoList(copy);

    let copy = [...detail];
    copy = [
      ...copy,
      {
        id: detail.length + 1,
        title: title,
        description: description,
        complete: false,
      },
    ];

    setDetail(copy);
    console.log(copy, "newDetail");
    console.log(ref1.current.value, ref2.current.value, "newDetail");

    setTitle("");
    setDescription("");

    ref1.current.value = " ";
    ref2.current.value = " ";

    // console.log([...detail,...newDetail])
  };

  return (
    <>
      <div className="bv-form">
        <form onSubmit={handleSubmit}>
          <input
            ref={ref1}
            value={title}
            className="bv-input"
            onChange={handleTitle}
            placeholder="Enter Title"
          />
          <input
            ref={ref2}
            value={description}
            className="bv-input"
            onChange={handleDescription}
            placeholder="Enter Description"
          />
          <Button className="bv-add" type="submit">
            Add Todo
          </Button>
        </form>
      </div>
      <div className="bv-flexContainer">
        {detail.map((item) => {
          return (
            <div>
              {!item.complete ? (
                <div key={item.id} className="bv-flexItem">
                  <div className="bv-title">{item.title}</div>
                  <div className="bv-title">{item.description}</div>
                  <div className="bv-buttons">
                    <div
                      className="bv-button"
                      onClick={() => {
                        handleComplete(item.id);
                      }}
                    >
                      Complete
                    </div>
                    <div
                      className="bv-button"
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                    >
                      {" "}
                      Remove
                    </div>
                    <div
                      className="bv-button"
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                    >
                      Edit
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bv-strike">
                  <div key={item.id} className="bv-flexItem">
                    <div className="bv-title">{item.title}</div>
                    <div className="bv-title">{item.description}</div>
                    <div className="bv-buttons">
                      <div
                        className="bv-button"
                        onClick={() => {
                          handleComplete(item.id);
                        }}
                      >
                        Complete
                      </div>
                      <div
                        className="bv-button"
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      >
                        Remove
                      </div>
                      <div
                        className="bv-button"
                        onClick={() => {
                          handleEdit(item.id);
                        }}
                      >
                        Edit
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
