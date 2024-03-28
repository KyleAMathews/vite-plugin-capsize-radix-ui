import React, { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"
import {
  Heading,
  Flex,
  Text,
  Blockquote,
  Link,
  Strong,
  Em,
  Code,
  Quote,
} from "@radix-ui/themes"

const ThemeSelector = ({ themes }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const currentTheme = themes[selectedIndex]
    const link = document.getElementById(`theme-style`)
    if (!link) {
      const newLink = document.createElement(`link`)
      newLink.id = `theme-style`
      newLink.rel = `stylesheet`
      newLink.href = currentTheme.file
      document.head.appendChild(newLink)
    } else {
      link.href = currentTheme.file
    }
  }, [selectedIndex])

  const handleKeyDown = (event) => {
    console.log({ selectedIndex })
    // Determine the direction of navigation
    if (event.key === `ArrowUp`) {
      setSelectedIndex((prevIndex) => {
        console.log({ prevIndex })
        console.log(Math.max(0, prevIndex - 1))
        return Math.max(0, prevIndex - 1)
      })
    } else if (event.key === `ArrowDown`) {
      setSelectedIndex((prevIndex) =>
        Math.min(themes.length - 1, prevIndex + 1)
      )
    }
  }

  const handleChange = (event) => {
    setSelectedIndex(
      themes.findIndex((theme) => theme.file === event.target.value)
    )
  }

  // Update the selected theme based on selectedIndex
  const selectedTheme = themes[selectedIndex].file

  // onKeyDown={handleKeyDown}
  return (
    <select
      value={selectedTheme}
      onChange={handleChange}
      size={themes.length} // Optional: Display all options if you want a more open list
      style={{ padding: 8, paddingTop: 12 }}
    >
      {themes.map((theme, index) => (
        <option key={theme.name} value={theme.file}>
          {theme.name}
        </option>
      ))}
    </select>
  )
}

function TypographyShowcase() {
  // Generate a bunch of typography options and then people can switch between them. There's a unique parent class for each
  // theme?
  return (
    <Flex
      direction="column"
      gap="6"
      my="5"
      px="2"
      style={{
        width: `100%`,
        maxWidth: 660,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <Heading>
        vite-plugin-capsize-radix-ui{` `}
        <a
          style={{ color: `inherit` }}
          href="https://github.com/kyleamathews/vite-plugin-capsize-radix-ui/"
        >
          <FaGithub style={{ height: 18, width: 18 }} />
        </a>
      </Heading>
      <Flex direction="column" gap="5">
        <Text as="p">
          Generate bulletproof typography css for{` `}
          <Link href="https://www.radix-ui.com/">@radix-ui/themes</Link>
        </Text>
        <Text as="p">Now changing fonts is as easy as changing colors.</Text>
      </Flex>
      <Flex direction="column" gap="2">
        <Text as="label">
          <Em>Pick font(s)</Em>
        </Text>
        <ThemeSelector
          themes={[
            { name: `System`, file: `/system.css` },
            { name: `Inter`, file: `/inter-typography.css` },
            {
              name: `Work Sans/Quattrocento Sans`,
              file: `/work-sans-typography.css`,
            },
            { name: `Josefin Sans`, file: `/josefin-typography.css` },
            { name: `Source Serif/Source Sans`, file: `/source-serif.css` },
            { name: `Rosario/Crimson Text`, file: `/rosario-crimson.css` },
            { name: `Montserrat/Arvo`, file: `/montserrat-arvo.css` },
            { name: `Alegreya Sans/Alegreya`, file: `/alegreya.css` },
            { name: `Playfair Display/Fira Sans`, file: `/playfair.css` },
            { name: `Raleway/Libre Baskerville`, file: `/raleway.css` },
            { name: `Lato`, file: `/lato.css` },
            { name: `Oswald/PT Sans`, file: `/ptsans.css` },
            { name: `Merriweather`, file: `/merriweather.css` },
          ]}
        />
      </Flex>
      <Heading size="6">
        Size 6 - The Quantum Leap Across Time and Space
      </Heading>
      <Text as="p">
        In the world of quantum computing, <Strong>entanglement</Strong> and
        {` `}
        <em>superposition</em> lead to possibilities beyond classical
        comprehension. This sentence, much like a qubit, can be <u>bold</u>,
        {` `}
        <Em>italic</Em>, or{` `}
        <Strong>
          <Em>both.</Em>
        </Strong>
      </Text>

      <Heading as="h2" size="5">
        Size 5 - Relativity's Fabric is Both Fragile and Easily Broken Apiece
      </Heading>
      <Text as="p">
        Imagine spacetime as a <Link href="#">fabric</Link> stretched across the
        cosmos. The mass of objects bends this fabric, causing what we perceive
        as gravity—an elegant explanation from Einstein's general theory of
        relativity <Code>E = mc²</Code>.
      </Text>

      <Heading as="h3" size="4">
        Size 4 - The Genetic Code is Both Complex and Beautiful in its Modular
        Simplicity
      </Heading>
      <Text as="p">
        Life's complexity is encoded in the{` `}
        <abbr title="Deoxyribonucleic Acid">DNA</abbr>, a molecule that carries
        the genetic instructions used in the growth, development, functioning,
        and reproduction of all known living organisms and many viruses.
      </Text>

      <Heading as="h4" size="3">
        Size 3 - The Internet of Things (IoT) — Overhyped or Everpresent?
      </Heading>
      <Text as="p">
        In the Internet of Things, everyday objects become interconnected,
        communicating data seamlessly across the network, creating a smart world
        where efficiency and convenience are continually enhanced.
      </Text>

      <Heading as="h5" size="2">
        Size 2 - Artificial Intelligence
      </Heading>
      <Text as="p">
        AI is like a phoenix in the tech world, continuously evolving from its
        ashes with new capabilities. It learns and adapts, creating a symbiosis
        between humans and machines, pushing the boundaries of what's possible.
      </Text>

      <Heading as="h6" size="1">
        Size 1 - The Blockchain Revolution
      </Heading>
      <Text as="p">
        Blockchain technology offers a decentralized ledger, a chain of blocks,
        ensuring transparency and security in transactions. Like the strands of
        DNA, it's the backbone of cryptocurrencies, ensuring trust in a
        trustless world.
      </Text>

      <Blockquote>
        "To be, or not to be, that is the question:" <br />- William
        Shakespeare, Hamlet
      </Blockquote>

      <Text as="p">
        This showcase spans the cosmos, from the <small>microscopic</small>
        {` `}
        strands of DNA to the vast, <Quote>interstellar</Quote> fabric of
        spacetime, illustrating the beauty and power of typography in conveying
        complex ideas.
      </Text>
    </Flex>
  )
}

export default TypographyShowcase
