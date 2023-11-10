import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <Grid>
      <div className="">
        <div className="space-y-5 m-44">
          <Flex direction="column">
            <Heading size="5">Hello, I&apos;m</Heading>
            <Heading size="9">Zharfan</Heading>
            <Heading size="9" color="red">
              Hakim
            </Heading>
            <Flex direction="column" gap="2">
              <Text>I&apos;m a...</Text>
              <Heading size="4">Front End Developer</Heading>
            </Flex>
          </Flex>

          <Flex gap="3">
            <Button>
              <Link href="/about" className="mx-5 font-bold">
                Get Started{" "}
              </Link>
            </Button>
            <IconButton color="gray" variant="outline" radius="full">
              <Link href="https://github.com/NekoJar" target="_blank">
                <FaGithub />
              </Link>
            </IconButton>
          </Flex>
        </div>
      </div>
      <div className="bg-zinc-700"></div>
    </Grid>
  );
}
