import React from "react";
import * as s from "./SendEmail.styles";
import { useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const defaultValues = {
  to: localStorage.getItem("toId"),
  subject: "",
  dropdown: "",
  description: "",
};

const SendEmail = () => {
  console.log(defaultValues);
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    try {
      const res = await axios.post("/email");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <s.Container>
      <s.MainContainer>
        <br />
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid>
              <TextField
                variant="outlined"
                id="to-input"
                fullWidth
                name="to"
                label="To"
                type="text"
                value={formValues.to}
                onChange={handleInputChange}
              />
            </Grid>
            <br />
            <Grid>
              <TextField
                variant="outlined"
                id="subject-input"
                fullWidth
                name="subject"
                label="Subject"
                type="text"
                value={formValues.subject}
                onChange={handleInputChange}
              />
            </Grid>
            <br />
            <Grid>
              <FormControl>
                <Select
                  name="dropdown"
                  value={formValues.dropdown}
                  onChange={handleInputChange}
                >
                  <MenuItem key="Voucher" value="Voucher">
                    Voucher
                  </MenuItem>
                  <MenuItem key="Environmentalist" value="Environmentalist">
                    Environmentalist
                  </MenuItem>
                  <MenuItem key="Something1" value="Something1">
                    Something1
                  </MenuItem>
                  <MenuItem key="Something2 " value="Something2">
                    Something2
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <br />
            <Grid>
              <TextField
                fullWidth
                variant="outlined"
                multiline
                rows={16}
                id="outlined-multiline-static"
                name="description"
                label="Description"
                type="text"
                value={formValues.description}
                onChange={handleInputChange}
              />
            </Grid>
            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </form>
      </s.MainContainer>
    </s.Container>
  );
};

export default SendEmail;
