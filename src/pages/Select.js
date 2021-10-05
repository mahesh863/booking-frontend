import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Select = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handelSubmit = () => {
    console.log(selectedDate);
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            placeholder="Pick Date"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </FormGroup>
      </Form>

      <div className="button m-2 " onClick={handelSubmit}>
        {" "}
        Submit
      </div>
    </div>
  );
};

export default Select;
