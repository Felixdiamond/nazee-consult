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
} from "@chakra-ui/react";
import {
  CheckCircle,
  Users,
  BookOpen,
  PenTool,
  ClipboardList,
} from "lucide-react";
import "./CertProgram.css";

const IconWrapper = ({ children }) => (
  <Box color="green.500" mr={2}>
    {children}
  </Box>
);

export function CertProgram() {
  return (
    <Box className="cert-program-container" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={10} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4} className="gradient-text">
              Global Certification Prep
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Intensive preparation for global project management exams such as
              CAPM, PMP, PRINCE2, and PMI-ACP.
            </Text>
          </Box>

          <Box bg="white" borderRadius="lg" p={8} boxShadow="xl">
            <VStack spacing={6} align="stretch">
              <Text fontSize="lg">
                Our program is designed to provide you with comprehensive
                support and resources for your success.
              </Text>

              <Heading as="h2" size="lg" mb={4}>
                What We Offer:
              </Heading>

              <List spacing={4}>
                <ListItem>
                  <HStack>
                    <IconWrapper>
                      <CheckCircle size={24} />
                    </IconWrapper>
                    <Text fontWeight="bold">
                      Exclusive Access to Senior Advisors:
                    </Text>
                  </HStack>
                  <Text ml={10}>
                    Benefit from personalized guidance and insights from
                    industry-leading professionals.
                  </Text>
                </ListItem>

                <ListItem>
                  <HStack>
                    <IconWrapper>
                      <ClipboardList size={24} />
                    </IconWrapper>
                    <Text fontWeight="bold">
                      Guideline/Advisory for Application:
                    </Text>
                  </HStack>
                  <Text ml={10}>
                    Receive expert assistance with your certification
                    application process.
                  </Text>
                </ListItem>

                <ListItem>
                  <HStack>
                    <IconWrapper>
                      <BookOpen size={24} />
                    </IconWrapper>
                    <Text fontWeight="bold">
                      Tailored Speed Coaching and Study Materials:
                    </Text>
                  </HStack>
                  <Text ml={10}>
                    Access customized coaching sessions and high-quality study
                    materials.
                  </Text>
                </ListItem>

                <ListItem>
                  <HStack>
                    <IconWrapper>
                      <PenTool size={24} />
                    </IconWrapper>
                    <Text fontWeight="bold">Mock Exam Prep:</Text>
                  </HStack>
                  <Text ml={10}>
                    Prepare with realistic mock exams that mirror the format and
                    difficulty of actual tests.
                  </Text>
                </ListItem>

                <ListItem>
                  <HStack>
                    <IconWrapper>
                      <Users size={24} />
                    </IconWrapper>
                    <Text fontWeight="bold">Community Support:</Text>
                  </HStack>
                  <Text ml={10}>
                    Join a supportive community of peers and professionals who
                    share your goals.
                  </Text>
                </ListItem>
              </List>
            </VStack>
          </Box>

          <Box textAlign="center">
            <Text fontSize="xl" mb={6}>
              Join our Global Certification Prep program and equip yourself with
              the tools and knowledge to achieve certification success. Enhance
              your career with globally recognized credentials.
            </Text>
            <Button
              as="a"
              href="https://paystack.com/pay/43tbewks69"
              size="lg"
              colorScheme="teal"
              leftIcon={<CheckCircle size={24} />}
              className="hover-effect"
            >
              Start Your Journey Today
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
