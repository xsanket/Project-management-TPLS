import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, InputRightElement, FormErrorMessage, FormLabel, Image, Input, InputGroup, Stack, Text, useBreakpointValue, useColorModeValue, viewIcon, Toast, useToast, Heading, Tabs, TabList, Tab, Divider, TabPanels, TabPanel } from "@chakra-ui/react";

export default function Home() {

    const isVertical = useBreakpointValue({ base: true, lg: false });
    const tabs = ["Dashboard", "Project Listing", "Create Project"];
    const [currentTab, setCurrentTab] = useState();
    const [activeTab, setActiveTab] = useState(null);



    const handleLogout = () => {
        localStorage.removeItem("token");
    }
    const handleTabChange = () => {

    }

    const handleTab = (tab) => {
        if (tab === activeTab) {
            return;
        }
        console.log(tab);
        setActiveTab(tab);
        //fetchData(tab);
    };



    return (
        <>
            <Box w={"100%"}>
                <Box
                    w={"100%"}
                    h={isVertical ? "10vh" : "30vh"}
                    backgroundImage={`url("/bg.svg")`}
                    backgroundPosition={isVertical ? "0 0" : "60px 0"}
                    backgroundSize={isVertical ? "cover" : "contain"}
                    bgRepeat={"no-repeat"}
                >
                </Box>

                {/* LOGO */}

                {!isVertical && (
                    <Flex
                        mt={-180}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"50%"}
                        ml={20}
                    >
                        <Heading
                            fontSize={isVertical ? "4xl" : "6xl"}
                            fontWeight={400}
                            pl={10}
                            color={"white"}
                        >
                            {tabs[currentTab]}
                        </Heading>
                        <Image boxSize={"60px"} src='/logo.svg'></Image>

                    </Flex>
                )}

                {isVertical && (
                    <Flex
                        mt={-45}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={10}
                        ml={isVertical ? 10 : 20}

                    >
                        <Heading
                            fontSize={isVertical ? "4xl" : "6xl"}
                            fontWeight={400}
                            pl={10}
                            color={"white"}
                        >

                        </Heading>
                        <Image onClick={handleLogout} mr={5} src="/Logout.svg"></Image>
                    </Flex>
                )}

                <Tabs
                    onChange={handleTabChange}
                    index={currentTab}
                    bg={"transparent"}
                    align="center"
                    pt={isVertical ? "20px" : ""}
                    orientation={!isVertical ? "vertical" : "horizontal"}
                >
                    {!isVertical && (
                        <TabList
                            pr={2}
                            boxShadow="xl"
                            borderRadius={5}
                            mr={5}
                        >
                            <Tab
                                onClick={() => handleTab("tab1")}
                                _selected={{
                                    borderLeft: "5px solid blue",
                                }}
                                mt={5}
                            >
                                <Image boxSize={7} src="/Dashboard.svg" />
                            </Tab>

                            <Tab
                                onClick={() => handleTab("Tab2")}
                                _selected={{
                                    borderLeft: "5px solid blue",
                                }}
                                mt={5}
                            >
                                <Image boxSize={7} src="/ProjectList.svg" />
                            </Tab>

                            <Divider p={0} />
                            <Tab
                                _selected={{
                                    borderLeft: "5px solid blue",
                                }}
                                mt={5}
                                mb={10}
                                pb={10}
                            >
                                <Image boxSize={7} src="/CreateProject.svg" />
                            </Tab>


                            <Tab isDisabled pt={10} mt={10}>
                                <Image
                                    cursor={"pointer"}
                                    onClick={handleLogout}
                                    boxSize={7}
                                    src="/Logout.svg"
                                />
                            </Tab>

                        </TabList>

                    )}



                    <TabPanels m={isVertical ? 0 : 5}>
                        <TabPanel borderRadius={8}>
                            {/* <Dashboard /> */}
                        </TabPanel>


                        <TabPanel
                            h={!isVertical ? "700px" : ""}
                            boxShadow="xl"
                            bg={"white"}
                            borderRadius={5}
                            p={0}
                        >
                            {/* <ProjectListing /> */}
                        </TabPanel>


                        <TabPanel
                            h={!isVertical ? "600px" : ""}
                            boxShadow="xl"
                            borderRadius={5}
                            bg={"white"}
                        >
                            {/* <CreateProject /> */}
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