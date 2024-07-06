import React from 'react';
import { Box, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import DashboardCard from './DashboardCard.jsx';
import Graph from './Graph.jsx';


export default function Dashboard({ data, graphData }) {
  const isVertical = useBreakpointValue({ base: true, lg: false });



  return (
    <>
      <Stack w={"100%"}>
        <DashboardCard data={data} />




        <Box textAlign={"left"}>
          <Heading
            fontSize={isVertical ? "15" : "30px"}
          >
            Department wise : Total Vs closed
          </Heading>
        </Box>



        <Box
          w={!isVertical ? "70%" : "full"}
          p={!isVertical ? 10 : 1}
          bg="white"
          rounded="md"
          boxShadow="2xl"
        >
          {<Graph data={graphData} />}
        </Box>

      </Stack>

    </>
  )
};
