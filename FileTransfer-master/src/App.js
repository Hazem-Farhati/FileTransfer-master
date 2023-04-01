import { Button, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";

const { useState } = require("react")

const FileTransfer = (props) => {
  const [file, setFile] = useState();

  function selectFile(e){
    setFile(e.target.files[0]);
  }

  function sendFile(e){
    console.log(file);
  }

  return (
    <Flex justifyContent="center" alignItems="center">
      <VStack>
      <Text fontWeight="bold">Select Your File to Share!</Text>
        <Input onChange={selectFile} type="file" pt={1}/>
        <Button onClick={sendFile}>Send File</Button>
      </VStack>
    </Flex>
  );

}

export default FileTransfer