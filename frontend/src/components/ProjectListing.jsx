import React, { useState } from 'react'
import { Box, useBreakpointValue, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Select, useDisclosure, List, ListItem, Icon, Flex, InputGroup, InputLeftElement, Input, Text, DrawerCloseButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ProjectTable from './ProjectTable.jsx'
import { useSearchParams } from "react-router-dom";
import CardComponent from './CardComponent.jsx'
import { BsFilterLeft } from "react-icons/bs";
import { getSort, getQuery } from '../sort/SortLogic.js'






export default function ProjectListing() {

  const isVertical = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState();
  const AllPage = Math.ceil(totalPages / 10);


  const handleSelectChange = (e) => {
    
  };

  const handleOptionSelect = (option) => {
    
  };



  const handleUpdate = () => {

  }





  return (
    <>
      <Flex
        pb={5}
        pt={3}
        pl={3}
        px={isVertical ? 2 : 8}
        justifyContent={"space-between"}
      >
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              variant="flushed"
            />
          </InputGroup>
        </Box>


        <Box>
          {!isVertical ? (
            <Flex
              flexDir={"row"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              gap={3}
            >
              <Text color={"gray.400"}> Sort By </Text>

              <Box>
                <Select
                  placeholder="Sort By"
                  value={sortBy}
                  onChange={handleSelectChange}
                  variant="unstyled"
                >
                  <option value="ProjectName">ProjectName</option>
                  <option value="Reason">Reason</option>
                  <option value="Type">Type</option>
                  <option value="Division">Division</option>
                  <option value="Category">Category</option>
                  <option value="Priority">Priority</option>
                  <option value="Department">Department</option>
                  <option value="Location">Location</option>
                  <option value="Status">Status</option>
                  <option value="StartDate">StartDate</option>
                  <option value="EndDate">EndDate</option>

                </Select>

              </Box>
            </Flex>
          ) : (

            <Box>
              <Box onClick={onOpen} cursor="pointer">
                <Icon boxSize={8} as={BsFilterLeft} />
              </Box>

              <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Sort Projects By</DrawerHeader>
                  <DrawerBody>
                    <List spacing={5}>


                      <ListItem
                        onClick={() => handleOptionSelect("ProjectName")}>
                        Project Name
                      </ListItem>


                      <ListItem onClick={() => handleOptionSelect("Priority")}>
                        Priority
                      </ListItem>


                      <ListItem onClick={() => handleOptionSelect("Status")}>
                        Status
                      </ListItem>


                      <ListItem onClick={() => handleOptionSelect("StartDate")}>
                        StartDate
                      </ListItem>


                      <ListItem onClick={() => handleOptionSelect("EndDate")}>
                        EndDate
                      </ListItem>


                    </List>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          )}
        </Box>
      </Flex>


      {isVertical ? (
        <Box w={"100%"}>

          {data.length >= 1 &&
            data.map((item) => {
              return (
                <CardComponent
                  key={item?._id}
                  ProjectName={item?.ProjectName}
                  Category={item?.Category}
                  Division={item?.Division}
                  Location={item?.Location}
                  StartDate={item.StartDate}
                  EndDate={item.EndDate}
                  Priority={item.Priority}
                  Status={item.Status}
                  Type={item.Type}
                  Reason={item.Reason}
                  Department={item.Department}
                  handleUpdate={handleUpdate}
                  id={item._id}
                />
              );
            })}
        </Box>


      ) : (



        <ProjectTable handleUpdate={handleUpdate} data={data} />
      )}



      {AllPage === 1 ? (
        ""
      ) : (

        <Box mb={2} p={2} borderRadius={5}>
          {/* Paging logic here */}
        </Box>
      )}

    </>
  )
};
