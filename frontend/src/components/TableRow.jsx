import React from 'react'
import { Tr, Td, Button, Text, Heading } from "@chakra-ui/react";


export default function TableRow({
    id,
    ProjectName,
    StartDate,
    EndDate,
    Reason,
    Type,
    Division,
    Category,
    Priority,
    Department,
    Location,
    Status,
    handleUpdate,
}) {

    const monthNumberToWord = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString("en-US", { month: "short" });
    };




    return (

        <>
            <Tr>
                <Td w={"100px"}>
                    <Heading fontWeight={600} fontSize={"17px"} color={"gray.700"}>
                        {ProjectName}
                    </Heading>
                    <Text fontSize={"13px"} color={"gray.500"}>
                        {monthNumberToWord(StartDate.slice(6, 7))}
                        {StartDate.slice(7, 10)}, {StartDate.slice(0, 4)} to{" "}
                        {monthNumberToWord(EndDate.slice(6, 7))}
                        {EndDate.slice(7, 10)}, {EndDate.slice(0, 4)}
                    </Text>
                </Td>
                <Td>{Reason}</Td>
                <Td>{Type}</Td>
                <Td>{Division}</Td>
                <Td>{Category}</Td>
                <Td>{Priority}</Td>
                <Td>{Department}</Td>
                <Td>{Location}</Td>
                <Td fontWeight={"bold"}>{Status}</Td>
                <Td display={"flex"} gap={5}>
                    <Button
                        size={"sm"}
                        borderRadius={20}
                        colorScheme="blue"
                        variant={"solid"}
                        fontWeight={400}
                        w={"80px"}
                        onClick={() => handleUpdate("Running", id)}
                    >
                        START
                    </Button>
                    <Button
                        size={"sm"}
                        borderRadius={20}
                        colorScheme="blue"
                        variant={"outline"}
                        w={"80px"}
                        fontWeight={400}
                        onClick={() => handleUpdate("Closed", id)}
                    >
                        CLOSE
                    </Button>
                    <Button
                        size={"sm"}
                        borderRadius={20}
                        colorScheme="blue"
                        fontWeight={400}
                        // px={5}
                        w={"80px"}
                        variant={"outline"}
                        onClick={() => handleUpdate("Cancelled", id)}
                    >
                        END
                    </Button>
                </Td>
            </Tr>

        </>
    )
}