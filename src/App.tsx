import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import OsCar from "./components/OsCar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import User from "./components/state/User";
import { Counter } from "./components/state/Counter";

function App() {
  const PersonName = {
    firstName: "Nguyễn",
    lastName: "Tiến Dũng",
    age: 20,
    address: "Hà Nội",
  };

  const nameList = [
    {
      first: "Nguyễn",
      last: "Mạnh Tiến",
    },
    {
      first: "Nguyên",
      last: "Tiến Anh",
    },
    {
      first: "Nguyễn",
      last: "Đức Trọng",
    },
  ];

  return (
    <div className="App">
      {/* Typing Props */}
      {/* Props dạng thường */}
      <Greet name="Nguyễn Tiến Dũng" age={20} check={true} />

      {/* Props dạng object */}
      <Person info={PersonName} />

      {/* Props dạng mảng  */}
      <PersonList names={nameList} />

      {/* Check props */}
      <Status status="error" />

      {/* Children Props */}
      <Heading>Children Props</Heading>

      {/* Children Props with component */}
      <OsCar>
        <Heading>Đây là tiêu đề văn bản</Heading>
      </OsCar>

      {/* Truyền props dưới dạng events  */}
      <Button handleClick={(event , id) => console.log(event , id)}></Button>

      {/* Truyền props dưới dạng events vào Input */}
      <Input value='' handleChange={(event) => console.log(event.target.value)
      }></Input>

      <Container styles={{border:'1px solid black' , padding : '1rem'}}></Container>

      <User/>

      {/* UseReducer */}
      <Counter/>
    </div>
  );
}

export default App;
