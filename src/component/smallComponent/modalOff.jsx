import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ but_style, post,date,time }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="medium"
        onClick={handleOpen}
        className={but_style}
      >
        BOOKING
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }} className="space-y-4">
          <h2
            id="child-modal-title"
            className="text-center font-bold text-red-dark"
          >
            CONFIRMATION
          </h2>
          <h5 id="child-modal-description" className="font-medium">
            Make a meeting agreement
          </h5>
          <div className="space-x-2">
            <h5 id="child-modal-description" className="font-medium inline">
              Class Name
            </h5>
            <h5 className="font-medium inline">:</h5>
            <h5 className="font-medium inline"></h5>
          </div>
          <div className="space-x-2">
            <h5 id="child-modal-description" className="font-medium inline">
              On
            </h5>
            <h5 className="font-medium inline">:</h5>
            <h5 className="font-medium inline">{date},{time}</h5>
          </div>

          <Button onClick={handleClose} className={but_style}>
            Agree
          </Button>
          <Button onClick={handleClose}>DISAgree</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ but_style, post }) {
  const [date, setDate] = React.useState("");
  const [time,setTime]=React.useState("07:30");

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(post);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeTime=(e)=>{
    console.log(e.target.value)
    setTime(e.target.value);

  }

  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        onClick={handleOpen}
        className={but_style}
      >
        DESCRIPTION
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: 400 }}
          className="space-y-4 rounded-sm border-0"
        >
          <img className="rounded-lg" src={post.download_url} />

          <h2
            id="parent-modal-title"
            className="text-lg font-medium text-center"
          >
            {post.author}
          </h2>
          <p className="text-base font-medium">DESCRIPTION CLASS</p>
          <p id="parent-modal-description"></p>
          <p className="text-base font-medium">TRAINER NAME</p>
          <p id="parent-modal-description"></p>
          <p className="text-base font-medium">GYM CLASSES</p>
          <p id="parent-modal-description"></p>
          <p className="text-base font-medium">CHOOSE DATE AND HOUR</p>
          <p id="parent-modal-description"></p>

          <Box sx={{ minWidth: 120 }}>
            <Stack component="form" noValidate spacing={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={date}
                  label="Date"
                  onChange={handleChangeDate}
                >
                  <MenuItem value="monday">Monday</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
                onChange={handleChangeTime}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: 150 }}
              />
            </Stack>
          </Box>
          <ChildModal date={date} time={time} but_style={but_style} post={post.author} />
        </Box>
      </Modal>
    </div>
  );
}
