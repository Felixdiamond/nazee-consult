import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Rocket, TrendingUp } from "lucide-react";
import "./MainServices.css";

export function MainServices() {
  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
          >
            <Box flex="1" pr={{ base: 0, md: 10 }} mb={{ base: 10, md: 0 }}>
              <Heading
                as="h1"
                size="3xl"
                lineHeight="shorter"
                mb={6}
                bgGradient="linear(to-r, #31BBDA, #4E17A8)"
                bgClip="text"
              >
                Elevate Your Project Management Career
              </Heading>
              <Text fontSize="xl" color="gray.600">
                At Nazee Consult, we're dedicated to nurturing the next
                generation of project management leaders.
              </Text>
            </Box>
            <Box
              flex="1"
              bg="white"
              p={10}
              borderRadius="lg"
              boxShadow="xl"
              bgGradient="linear(to-br, #31BBDA, #4E17A8)"
              color="white"
            >
              <VStack spacing={6} align="start">
                <HStack spacing={4}>
                  <Rocket size={40} />
                  <Text fontSize="2xl" fontWeight="bold">
                    Accelerate Your Growth
                  </Text>
                </HStack>
                <Text fontSize="lg">
                  Our tailored services are designed to equip you with the
                  skills, knowledge, and confidence needed to excel in this
                  dynamic field.
                </Text>
                <HStack spacing={4}>
                  <TrendingUp size={40} />
                  <Text fontSize="2xl" fontWeight="bold">
                    Achieve Your Potential
                  </Text>
                </HStack>
                <Text fontSize="lg">
                  With expert guidance and practical resources, we'll help you
                  navigate the complexities of project management and emerge as
                  a standout professional.
                </Text>
              </VStack>
            </Box>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <ServiceCard />
            {/* Add more ServiceCard components here for other services */}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

function ServiceCard() {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.800")}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      spacing={5}
      align="start"
      borderTop="4px solid"
      borderTopColor="#FF610F"
    >
      <Heading as="h3" size="lg" color="#4E17A8">
        Advisory Call
      </Heading>
      <Text fontWeight="medium" color="gray.500">
        30 minutes
      </Text>
      <Text>
        Personalized, one-on-one expert guidance to propel your project
        management career forward.
      </Text>

      <Heading as="h4" size="md" color="#31BBDA" mt={4}>
        How We Empower You:
      </Heading>
      <List spacing={3}>
        {[
          "Chart your transition into Project Management",
          "Strategize landing your first PM role",
          "Navigate exam and certification pathways",
          "Accelerate your career progression",
          "Master interview techniques and CV optimization",
          "Gain project-specific expertise (budgets, risk management, etc.)",
        ].map((item, index) => (
          <ListItem key={index}>
            <HStack align="start">
              <ListIcon as={CheckCircleIcon} color="#FF610F" mt={1} />
              <Text>{item}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>

      <Button
        colorScheme="orange"
        size="lg"
        mt={4}
        alignSelf="center"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      >
        Book Your Call
      </Button>
    </VStack>
  );
}
