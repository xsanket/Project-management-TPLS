import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, FormControl, InputRightElement, FormErrorMessage, FormLabel, Image, Input, InputGroup, Stack, Text, useBreakpointValue, useColorModeValue, viewIcon, Toast, useToast, Heading, Tabs, TabList, Tab, Divider, TabPanels, TabPanel } from "@chakra-ui/react";

import CreateProject from '../components/CreateProject';
import ProjectListing from '../components/ProjectListing';
import Dashboard from '../components/Dashboard';
import { countProject, getGraphData } from '../apiCalls/graphApiCall';
import { useNavigate } from 'react-router-dom';
import { fetchProjects, updateProjectStatus } from '../apiCalls/projectApiCall';





export default function Home() {

    const isVertical = useBreakpointValue({ base: true, lg: false });
    const tabs = ["Dashboard", "Project Listing", "Create Project"];
    const [currentTab, setCurrentTab] = useState(0);
    const [activeTab, setActiveTab] = useState(null);
    const [projectCount, setProjectCount] = useState(null);
    const [graphData, setGraphData] = useState(null);
    const [projectData, setProjectData] = useState(null);
    const navigate = useNavigate();




    
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




    const fetchProjectListingData = async () => {
        try {
            const response = await fetchProjects();
            setProjectData(response);
        } catch (error) {
            console.error("Error fetching project data:", error);
        }
    };

  


   


    const handleTab = (tab) => {
        if (tab === activeTab) {
            return;
        }
        //console.log(tab);
        setActiveTab(tab);
        //fetchData(tab);
    };




    useEffect(() => {
        if (currentTab === 0) {
            fetchDashboardData();
        } 
    }, [currentTab]);


    const handleTabChange = (index) => {
        setCurrentTab(index);
    };

    // const addNewProject = (newProject) => {
    //     setProjects(prevProjects => [...prevProjects, newProject]);
    // };

    // useEffect(() => {
    //     fetchData(activeTab);
    // }, [activeTab]);



    const handleLogout = () => {
        //console.log("Logout ");
        localStorage.removeItem("token");
        navigate('/')
    }


    return (
        <>
            <Box w={"100%"}>
                <Box
                    w={"100%"}
                    h={isVertical ? "10vh" : "30vh"}
                    backgroundImage={`url("/Header.svg")`}
                    backgroundPosition={isVertical ? "0 0" : "60px 0"}
                    backgroundSize={isVertical ? "cover" : "contain"}
                    bgRepeat={"no-repeat"}
                >
                </Box>

                {/* LOGO and the tab name  */}

                {!isVertical && (
                    <Flex
                        mt={-180}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        w={"50%"}
                        ml={20}
                    >
                        <Heading
                            fontSize={"30px"}
                            fontWeight={400}
                            pl={10}
                            color={"white"}
                        >

                            {/* have to set the heading here */}
                            {tabs[currentTab]}
                        </Heading>
                        <Image boxSize={"60px"} src='/logo.svg'></Image>

                    </Flex>
                )}

                {isVertical && (
                    <Flex
                        mt={-45}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={10}
                        ml={isVertical ? 10 : 20}

                    >
                        <Heading
                            fontSize={"25px"}
                            fontWeight={400}
                            // pl={10}
                            color={"white"}
                        >
                            {tabs[currentTab]}
                        </Heading>
                        <Image cursor={"pointer"} onClick={handleLogout} mr={5} src="/Logout.svg"></Image>
                    </Flex>
                )}


                {/* *********sidebar*************** */}


                <Tabs
                    onChange={handleTabChange}
                    index={currentTab}
                    bg={"transparent"}
                    align="center"

                    pt={isVertical ? "40px" : ""}
                    orientation={!isVertical ? "vertical" : "horizontal"}
                >
                    {!isVertical && (
                        <TabList
                            pr={2}
                            boxShadow="xl"
                            borderRadius={5}
                            mr={5}
                            mt={-200}
                        >
                            <Tab
                                position={"sticky"}
                                onClick={() => handleTab("tab1")}
                                _selected={{
                                    borderLeft: "5px solid blue",

                                }}
                                mt={5}
                            >
                                <Image boxSize={7} position={"sticky"} src="/Dashboard.svg" />
                            </Tab>



                            <Tab
                                position={"sticky"}
                                onClick={() => handleTab("Tab2")}
                                _selected={{
                                    borderLeft: "5px solid blue",
                                }}
                                mt={5}
                            >
                                <Image boxSize={7} position={"sticky"} src="/ProjectList.svg" />
                            </Tab>

                            <Divider position={"sticky"} p={3} w="70%" borderColor="black" />

                            <Tab
                                position={"sticky"}
                                _selected={{
                                    borderLeft: "5px solid blue",
                                }}

                            >
                                <Image boxSize={7} position={"sticky"} src="/CreateProject.svg" />
                            </Tab>
                            <Tab></Tab>

                            <Button
                                onClick={handleLogout}
                                leftIcon={<Image src="/Logout.svg" boxSize={5} />}
                                variant="unstyled"
                                justifyContent="center"
                                alignItems="center"
                                ml={3}
                                position="absolute"
                                pb={5}
                                bottom="0"

                            >

                            </Button>

                        </TabList>

                    )}


                    {/* ***************** All  3 tabs ************* */}



                    <TabPanels m={!isVertical ? 5 : 0} minHeight={isVertical ? "calc(100vh - 150px)" : "auto"}>


                        <TabPanel
                            h={!isVertical ? "700px" : ""}
                            borderRadius={5}
                            boxShadow="xl"
                        // bg={"white"}
                        >
                            <Dashboard projectCount={projectCount} graphData={graphData} />
                        </TabPanel>


                        <TabPanel
                            h={!isVertical ? "700px" : ""}
                            boxShadow="xl"
                            bg={"white"}
                            borderRadius={5}

                        >
                            <ProjectListing
                                projects={projectData}
                                
                            />
                        </TabPanel>


                        <TabPanel
                            h={!isVertical ? "700px" : ""}
                            boxShadow="xl"
                            borderRadius={5}
                            bg={"white"}
                        >

                            <CreateProject   />
                        </TabPanel>

                    </TabPanels>



                    {isVertical && (
                        <TabList
                            position={"sticky"}
                            bottom={0}
                            bgColor={"white"}
                            py={2}
                            boxShadow={
                                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                            }
                            w={"100%"}
                            borderTopRadius={10}
                            gap={8}
                        >
                            <Tab
                                onClick={() => handleTab("tab1")}
                                _selected={{
                                    borderBottom: "5px solid blue",
                                }}
                            >
                                <Image src="/Dashboard.svg" />
                            </Tab>


                            <Tab
                                onClick={() => handleTab("Tab2")}
                                _selected={{
                                    borderBottom: "4px solid blue",
                                }}
                            >
                                <Image src="/ProjectList.svg" />
                            </Tab>


                            <Tab
                                _selected={{
                                    borderBottom: "5px solid blue",
                                }}
                            >
                                <Image src="/CreateProject.svg" />
                            </Tab>
                        </TabList>
                    )}

                </Tabs>

            </Box>

        </>
    )
}
