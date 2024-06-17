import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  Heading,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import test1 from "../../assets/testimonial-1.jpg";
import test2 from "../../assets/testimonial-2.jpg";

const MotionBox = motion(Box);

const TestimonialCard = ({ name, role, image, testimonial, index }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <MotionBox
      bg={bgColor}
      p={8}
      borderRadius="xl"
      boxShadow="xl"
      height="100%"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      _hover={{
        boxShadow: "2xl",
      }}
    >
      <VStack spacing={6} align="start" height="100%">
        <Flex align="center" width="100%">
          <Box borderRadius="full" boxSize="80px" overflow="hidden" mr={4}>
            <Image
              src={image}
              alt={name}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="xl">
              {name}
            </Text>
            <Text color="orange.500" fontWeight="medium">
              {role}
            </Text>
          </VStack>
        </Flex>
        <Text flex="1" color={textColor} fontSize="md" lineHeight="tall">
          "{testimonial}"
        </Text>
      </VStack>
    </MotionBox>
  );
};

const ServiceTestimonial = () => {
  const testimonials = [
    {
      name: "Annastacia",
      role: "Project Manager",
      image: test1,
      testimonial:
        "I am genuinely impressed with my experience from start to finish. The process has been seamless, we had the opportunity to ask questions whenever we faced difficulties as our instructor was the most friendly. I started the program with no prior knowledge of project management, and now I am confident in my skills and on a clear path to becoming a professional project manager, thanks to Nazee Consult.",
    },
    {
      name: "Bushra",
      role: "Project Manager",
      image: test2,
      testimonial:
        "Nazee Consult truly pays attention to the needs of their students. They break down project management in a way that anyone, even without prior knowledge, can understand. My experience over the 8 weeks was fantastic, and the compulsory assessments really enhanced my learning. After completing the diploma program, I landed a role as a project manager within an EdTech company. I couldn't be happier with the outcome!",
    },
  ];

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} py={16}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="2xl" textAlign="center">
              What Our Clients Say
              <Text as="span" color="orange.500">
                .
              </Text>
            </Heading>
          </MotionBox>

          <Flex direction={{ base: "column", lg: "row" }} gap={8}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} flex="1">
                <TestimonialCard {...testimonial} index={index} />
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default ServiceTestimonial;
