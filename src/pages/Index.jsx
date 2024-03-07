import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaMobileAlt, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Hero Section */}
      <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }} wrap="wrap" minH="70vh" px={8} mb={16}>
        <Stack spacing={5} w={{ base: "100%", md: "40%" }} align="flex-start">
          <Heading as="h1" size="xl" fontWeight="bold">
            Your Next Generation SaaS Platform
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
            Elevate your business with our cutting-edge cloud solution. Experience the best in class features to boost your productivity.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Stack>
        <Box w={{ base: "100%", md: "50%" }} mt={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTYWFTJTIwcGxhdGZvcm18ZW58MHx8fHwxNzA5ODIyODI4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS platform" />
        </Box>
      </Flex>

      {/* Features Section */}
      <VStack spacing={10} py={10} borderBottomWidth={2} borderColor={useColorModeValue("gray.100", "gray.700")}>
        <Heading as="h2" size="lg" fontWeight="semibold">
          Everything you need in one place
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" wrap="wrap">
          <FeatureCard icon={FaCloud} title="Cloud Storage" description="Securely store and share files in the cloud with easy access from anywhere." />
          <FeatureCard icon={FaMobileAlt} title="Mobile Friendly" description="Stay connected with our fully responsive platform, accessible on any device." />
          <FeatureCard icon={FaRocket} title="Fast Performance" description="Lightning-fast load times and smooth interactions for the best user experience." />
        </Flex>
      </VStack>

      {/* Call to action section */}
      <Flex py={16} align="center" justify="center" direction="column" bg={useColorModeValue("blue.50", "blue.900")}>
        <Heading mb={4} fontWeight="bold" color={useColorModeValue("blue.800", "blue.100")}>
          Ready to get started?
        </Heading>
        <Button size="lg" colorScheme="blue" rightIcon={<FaArrowRight />}>
          Create Free Account
        </Button>
      </Flex>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <Box p={5} textAlign="center" w={{ base: "80%", md: "33%" }} mb={{ base: 5, md: 0 }}>
      <IconComponent size="40px" mb={3} />
      <Heading as="h3" size="md" fontWeight="medium" mb={2}>
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.200")}>{description}</Text>
    </Box>
  );
};

export default Index;
