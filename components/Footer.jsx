import Image from "next/image";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (props) => {
  return (
    <Image src="/logo-footer.svg" alt="footer logo" height={32} width={160} />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Container>
          <Text textAlign={"center"} color="gray.400">
            © {new Date().getFullYear()} සිප් අරණ. සියලුම හිමිකම් ඇවිරිණි
          </Text>
          <Text textAlign={"center"} color="gray.400">
            © {new Date().getFullYear()} සිප් අරණ. සියලුම හිමිකම් ඇවිරිණි
          </Text>
          <Text textAlign={"center"} color="gray.400">
            © {new Date().getFullYear()} සිප් අරණ. සියලුම හිමිකම් ඇවිරිණි
          </Text>
        </Container>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Facebook"}
            href={"https://facebook.com/ZEOAmpara/?_rdc=1&_rdr"}
          >
            <Image alt="Facebook" width={20} height={20} src="/facebook.svg" />
          </SocialButton>
          <SocialButton label={"Gmail"} href={"mailto:amp@edudept.ep.gov.lk"}>
            <Image alt="Gmail" width={20} height={20} src="/gmail.svg" />
          </SocialButton>
          <SocialButton label={"Telephone"} href={"tel:+94632222139"}>
            <Image
              alt="Telephone"
              width={20}
              height={20}
              src="/telephone.svg"
            />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
