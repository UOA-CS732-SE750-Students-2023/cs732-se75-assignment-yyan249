import { Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        This is a Home page
      </Typography>
      <Typography variant="b1" gutterBottom>
        Weather in New Zealand has become increasingly important as recent
        events, such as the floods in Auckland at the end of January this year,
        have heightened concerns about climate-related issues. To address these
        concerns, our website provides visually appealing and easy-to-understand
        weather visualizations using various chart types. By offering insights
        into current weather conditions, our platform aims to keep users
        informed and prepared. Furthermore, the integration of real-time data
        can enhance the utility and relevance of our website for users seeking
        up-to-date information on weather conditions.
      </Typography>
    </>
  );
}

export default Home;
