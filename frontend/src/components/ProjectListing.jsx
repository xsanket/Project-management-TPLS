import React, { useState, useEffect } from 'react';
import { Box, useBreakpointValue, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Select, useDisclosure, List, ListItem, Icon, Flex, InputGroup, InputLeftElement, Input, Text, DrawerCloseButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ProjectTable from './ProjectTable.jsx';
import { useSearchParams } from "react-router-dom";
import CardComponent from './CardComponent.jsx';
import { BsFilterLeft } from "react-icons/bs";
import { getSort, getQuery } from '../sort/SortLogic.js';
import { fetchProjects } from '../apiCalls/projectApiCall.js';

function getPage(value) {
  value = Number(value);
  if (!value || value < 1) {
    value = 1;
  }
  return value;
}

export default function ProjectListing() {
  const isVertical = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = getPage(searchParams.get("page"));
  const initSort = getSort(searchParams.get("sortOrder"));
  const [totalPages, setTotalPages] = useState(0);
  const AllPage = Math.ceil(totalPages / 10);
  const initQuery = getQuery(searchParams.get("query"));
  const [page, setPage] = useState(initPage);
  const [query, setQuery] = useState(initQuery || "");
  const [sortBy, setSortBy] = useState(initSort);



  useEffect(() => {
    const getProjectsData = async () => {
      try {
        const response = await fetchProjects({ page, query, sortBy });
        //console.log("response =========>>",response.projects[0]);
        console.log("hello")
        
        if (response && response.projects) {
          console.log("response =========>>", response.projects[0]);
          setData(response.projects);
          console.log("hello")
          setTotalPages(response.totalCount);
        }
      } catch (error) {
        console.log("Error fetching projects: ", error);
      }
    };

    getProjectsData();
  }, [page, query, sortBy]);




  const handleSelectChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOptionSelect = (option) => {
    setSortBy(option);
    onClose();
  };







  // for updating the status
  const handleUpdate = () => {
    console.log("handleUpdate");
  };



  useEffect(() => {
    if (query === "") {
      setSearchParams({ page, sortBy });
    } else {
      setSearchParams({ page, query, sortBy });
    }
  }, [setSearchParams, page, query, sortBy]);


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
            <Input
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
                      <ListItem onClick={() => handleOptionSelect("ProjectName")}>Project Name</ListItem>
                      <ListItem onClick={() => handleOptionSelect("Priority")}>Priority</ListItem>
                      <ListItem onClick={() => handleOptionSelect("Status")}>Status</ListItem>
                      <ListItem onClick={() => handleOptionSelect("StartDate")}>StartDate</ListItem>
                      <ListItem onClick={() => handleOptionSelect("EndDate")}>EndDate</ListItem>
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
            data.map((item) => (
              <CardComponent
                key={item._id}
                ProjectName={item.ProjectName}
                Category={item.Category}
                Division={item.Division}
                Location={item.Location}
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
            ))}
        </Box>
      ) : (
        <ProjectTable handleUpdate={handleUpdate} data={data} />
      )}

      {AllPage === 1 ? (
        ""
      ) : (
        <Box mb={2} p={2} borderRadius={5}>
          {/* Pagination Controls Here */}
        </Box>
      )}
    </>
  );
}
