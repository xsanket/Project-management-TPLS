import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, InputRightElement, FormErrorMessage, FormLabel, Image, Input, InputGroup, Stack, Text, useBreakpointValue, useColorModeValue, viewIcon, Toast, useToast, Heading, Tabs, TabList, Tab, Divider, TabPanels, TabPanel, Textarea, Grid, Select } from "@chakra-ui/react";





export default function CreateProject() {
    const isVertical = useBreakpointValue({ base: true, lg: false });
    const [check, setCheck] = useState(false);
    const [data, setData] = useState({});



    const handleChange = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };


    const handleSubmit = () => {
        console.log(data)
    }








    return (
        <>
            <Flex
                direction={"column"}
                gap={5}
                borderRadius={5}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <FormControl
                        isRequired
                        isInvalid={check}
                        display={"flex"}
                        flexDir={"column"}
                    >
                        <Textarea
                            name="ProjectName"
                            onChange={handleChange}
                            placeholder="Enter Project Theme"
                            w={!isVertical ? "75%" : "100%"}
                        />
                        {check && <FormErrorMessage>Project Theme Required</FormErrorMessage>}
                    </FormControl>

                    {!isVertical && (
                        <Button
                            onClick={handleSubmit}


                            w={"150px"}
                            borderRadius={20}
                            colorScheme="blue"
                        >
                            Save Project
                        </Button>
                    )}
                </Flex>



                <Box w={"90%"}>
                    <Grid
                        templateColumns={["1fr", "repeat(3, 1fr)"]}
                        gap={4}
                        width={["100%", "100%"]}
                        justifyContent={["center", "center"]}
                        alignItems="center"
                    >
                        <Box>
                            <FormControl color={"gray.500"}>
                                <FormLabel>Reason</FormLabel>
                                <Select
                                    placeholder="Select option"
                                    name="Reason"
                                    onChange={handleChange}
                                    size="lg"
                                    color={"gray.700"}
                                >
                                    <option value="Business">Business</option>
                                    <option value="Dealership">Dealership</option>
                                    <option value="Transport">Transport</option>
                                </Select>
                            </FormControl>
                        </Box>


                        <Box>
                            <FormControl color={"gray.500"}>
                                <FormLabel>Type</FormLabel>
                                <Select
                                    placeholder="Select option"
                                    name="Type"
                                    onChange={handleChange}
                                    size="lg"
                                    color={"gray.700"}
                                >
                                    <option value="Internal">Internal</option>
                                    <option value="External">External</option>
                                    <option value="Vendor">Vendor</option>
                                </Select>
                            </FormControl>
                        </Box>



                        <Box>
                            <FormControl color={"gray.500"}>
                                <FormLabel>Division</FormLabel>
                                <Select
                                    placeholder="Select option"
                                    name="Division"
                                    onChange={handleChange}
                                    size="lg"
                                    color={"gray.700"}
                                >
                                    <option value="Filters">Filters</option>
                                    <option value="Compressor">Compressor</option>
                                    <option value="Pumps">Pumps</option>
                                    <option value="Glass">Glass</option>
                                    <option value="Water Heater">Water Heater</option>
                                </Select>
                            </FormControl>
                        </Box>



                        <Box>
                            <FormControl color={"gray.500"}>
                                <FormLabel>Category</FormLabel>
                                <Select
                                    placeholder="Select option"
                                    name="Category"
                                    onChange={handleChange}
                                    size="lg"
                                    color={"gray.700"}
                                >
                                    <option value="Quality A">Quality A</option>
                                    <option value="Quality B">Quality B</option>
                                    <option value="Quality C">Quality C</option>
                                    <option value="Quality D">Quality D</option>
                                </Select>
                            </FormControl>
                        </Box>


                        <Box>
                            <FormControl color={"gray.500"}>
                                <FormLabel>Priority</FormLabel>
                                <Select
                                    placeholder="Select option"
                                    name="Priority"
                                    onChange={handleChange}
                                    size="lg"
                                    color={"gray.700"}
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </Select>
                            </FormControl>
                        </Box>


                        <Box>
                            <FormControl color={"gray.500"}>
                                <FormLabel>Department</FormLabel>
                                <Select
                                    placeholder="Select option"
                                    name="Department"
                                    onChange={handleChange}
                                    size="lg"
                                    color={"gray.700"}
                                >
                                    <option value="Finance">Finance</option>
                                    <option value="HR">HR</option>
                                    <option value="Stores">Stores</option>
                                    <option value="Strategy">Strategy</option>
                                    <option value="Quality">Quality</option>
                                    <option value="Maintenance">Maintenance</option>
                                </Select>
                            </FormControl>
                        </Box>



                        <Box>
                            <FormControl isRequired color={"gray.500"}>
                                <FormLabel>Start Date as per Project Plan</FormLabel>
                                <Input
                                    name="StartDate"
                                    onChange={handleChange}
                                    size="lg"
                                    type="date"
                                    color={"gray.700"}
                                />
                            </FormControl>
                        </Box>


                        <Box>
                            <FormControl isRequired color={"gray.500"}>
                                <FormLabel>End Date as per Project Plan</FormLabel>
                                <Input
                                    name="EndDate"
                                    onChange={handleChange}
                                    size="lg"
                                    type="date"
                                    color={"gray.700"}
                                />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl color={"gray.500"}>
                                <FormLabel>Location</FormLabel>
                                <Select
                                    placeholder="Select option"
                                    name="Location"
                                    onChange={handleChange}
                                    size="lg"
                                    color={"gray.700"}
                                >
                                    <option value="Chennai">Chennai</option>
                                    <option value="Bengaluru">Bengaluru</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Delhi">Delhi</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Text
                        color={"gray.700"}
                        mb={isVertical ? 5 : ""}
                        mt={15}
                        fontSize={"1xl"}
                        textAlign={!isVertical ? "right" : "left"}
                    >
                        Status:
                        <span

                            style={{
                                fontWeight: "bold",
                            }}
                        >
                            Registered
                        </span>
                    </Text>
                </Box>


                <Box textAlign={"center"}>
                    {isVertical && (
                        <Button

                            size={"sm"}
                            borderRadius={20}
                            colorScheme="blue"
                            margin={"auto"}
                            w={"100%"}
                            fontWeight={500}
                            onClick={handleSubmit}
                        >
                            Save the Project
                        </Button>
                    )}
                </Box>
            </Flex>

        </>
    )
}
