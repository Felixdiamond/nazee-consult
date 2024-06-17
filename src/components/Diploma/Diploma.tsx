import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  Collapse,
  Flex,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";

interface ModuleProps {
  number: number;
  title: string;
  topics: string[];
}

const Module: React.FC<ModuleProps> = ({ number, title, topics }) => {
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={4}
      bg={bgColor}
      _hover={{ bg: hoverBgColor }}
      transition="background-color 0.2s"
      cursor="pointer"
      onClick={onToggle}
    >
      <Flex justify="space-between" align="center">
        <HStack>
          <Badge colorScheme="orange" fontSize="sm" borderRadius="full" px={2}>
            {number}
          </Badge>
          <Text size={"xl"}>{title}</Text>
        </HStack>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <List spacing={3} mt={4}>
          {topics.map((topic, index) => (
            <ListItem key={index}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {topic}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export function Diploma() {
  const modules = [
    {
      number: 1,
      title: "Module One",
      topics: [
        "Introduction to Project Management",
        "Real-life Project Management solution scenarios",
        "Essential roles of Project managers",
        "Basic Project Management Tools",
        "Project Management Methodologies (Agile, Waterfall & Hybrid)",
        "Project Management Estimation (Duration, Cost and Resources)",
      ],
    },
    {
      number: 2,
      title: "Module Two",
      topics: [
        "Project Management Life-cycle",
        "Building WBS (Work Breakdown Structure)",
        "Creating a Project Management Schedule",
        "Project Management Documentation",
        "Extensive Agile Project Management",
      ],
    },
    {
      number: 3,
      title: "Module Three",
      topics: [
        "Team Building and Leadership",
        "Risk Assessment and Monitoring",
        "Communication and Stakeholder Engagement",
        "Budgeting and Finances in Project Management",
        "Stakeholder Management",
      ],
    },
    {
      number: 4,
      title: "Module Four",
      topics: [
        "Project Closing",
        "Customer Satisfaction and Lesson-Learned Register",
        "How to land entry roles in Project Management and Interview Prep",
        "Building a Project Management Portfolio",
        "Overview of Global Certifications & Requirements",
      ],
    },
  ];

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box bg={bgColor} minHeight="100vh" py={10}>
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" mb={4}>
            Diploma in Project Management
          </Heading>

          <Text fontSize="lg" color={textColor}>
            Welcome to our comprehensive 8 weeks live diploma in Project
            Management program, meticulously designed to equip you with the
            knowledge, skills, and practical experience needed to excel in the
            dynamic field of project management.
          </Text>

          {modules.map((module) => (
            <Module key={module.number} {...module} />
          ))}

          <Box borderWidth="1px" borderRadius="lg" p={6}>
            <Heading as="h3" size="lg" mb={4}>
              Extra Benefits
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Diploma certificate
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Social media positioning
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Freelance project management
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Internship opportunities
              </ListItem>
            </List>
          </Box>

          <Flex justifyContent="space-between" alignItems="center">
            <Button
              colorScheme="orange"
              size="lg"
              rightIcon={<ChevronDownIcon />}
              onClick={() => window.open('https://paystack.com/pay/Diplomainpm')}
            >
              Enroll Now
            </Button>
            <Badge colorScheme="blue" p={4} borderRadius="full" fontSize="2xl">
              $200
            </Badge>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
