import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import socketIOClient from "socket.io-client";

export default function Home() {
  const socket = useRef();
  const [file, setFile] = useState();

  function selectFile(e) {
    setFile(e.target.files[0]);
  }

  function sendFile(e) {
    console.log(file);
    socket.current.emit("message", {
        File : file
      });
  }
  useEffect(() => {
    socket.current = socketIOClient("http://localhost:8000");
    socket.current.on("connect", () => {
      console.log("client connected");
    });
    socket.current.on("return", (msg) => {console.log("File shared ",msg.file)});
    return () => {
      socket.current.off("connect");
      socket.current.off("return");
    };
  }, []);

  return (
    <div>
      <Flex justifyContent="center" alignItems="center">
        <VStack>
          <Text fontWeight="bold">Select Your File to Share!</Text>
          <Input onChange={selectFile} type="file" pt={1} />
          <Button onClick={sendFile}>Send File</Button>
        </VStack>
      </Flex>
    </div>
  );
}
