import React, { useEffect, useState } from 'react';
import { Box, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import DashboardCard from './DashboardCard.jsx';
import Graph from './Graph.jsx';
import { countProject, getGraphData } from '../apiCalls/graphApiCall.js';


export default function Dashboard({ projectCount, setProjectCount, graphData, setGraphData }) {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  // const [projectCount, setProjectCount] = useState(null);
  // const [graphData, setGraphData] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const [countResponse, graphResponse] = await Promise.all([
        countProject(),
        getGraphData()
      ]);
      setProjectCount(countResponse);
      setGraphData(graphResponse);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  },[]);



  return (
    <>
      <Stack
        w={"100%"}

      >
        <DashboardCard data={projectCount} />


        <Box textAlign={"left"}>
          <Heading
            fontSize={isVertical ? "15" : "20px"}
            fontWeight={"500"}
            mb={4}
          >
            Department wise : Total Vs closed
          </Heading>
        </Box>


        {/* graph box */}
        <Box
          w={!isVertical ? "50%" : "full"}
          p={!isVertical ? 10 : 1}
          //bg="white"
          rounded="md"
          boxShadow="2xl"
        >
          {<Graph data={graphData} />}
        </Box>

      </Stack>

    </>
  )
};
