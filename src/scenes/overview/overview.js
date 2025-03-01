import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "components/Header";
import React, { useState } from "react";
import OverViewChart from "components/OverViewChart";

const Overview = () => {
  const [view, setViews] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Overview" subtitle="Overview of user" />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(e) => setViews(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverViewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
