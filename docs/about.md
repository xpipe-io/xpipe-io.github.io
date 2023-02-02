# What is X-Pipe?

### Next level remote data workflows for everyone

X-Pipe is a tool for working with remote connections and the data that can be accessed through them.
The focus lies on providing an easy remote connection handling workflow
and on top of that additional data intermediation capabilities
such that you can work with all kinds of data located on essentially any remote system with ease.
So if you are a data analyst/scientist, a system administrator, a software engineer, or generally
just work a lot with remote connections and data, then X-Pipe is designed for you!

The X-Pipe project is designed to be an open platform, both in terms of development from
a developer's perspective and the workflow from a user's perspective.
X-Pipe is open source on [GitHub](https://github.com/xpipe-io/xpipe) and is
designed to utilize and integrate well with other popular tools and workflows,
focusing on augmenting them rather than replacing them.

## Connection Explorer

The connection explorer allows you to connect to, manage, and interact with all kinds of remote systems.
It comes with the following main features:

#### Flexible Connector

- Can connect to standard servers, database servers, and more
- Supports established protocols (e.g. SSH and more) plus any custom connection methods that work through the command-line
- Is able to integrate any kind of proxies into the connection process, even ones with different protocols

#### Instant launch for remote shells and commands

- Automatically login into a shell in your favourite terminal with one click (no need to fill password prompts, etc.)
- Works for all kinds of shells. This includes command shells (e.g. bash, PowerShell, cmd, etc.) and database shells (e.g. PSQL Shell)
- Comes with integrations for all commonly used terminals in Windows and Linux
- Exclusively uses established CLI tools and therefore works out of the box on most systems and doesn't require any additional setup
- Allows you to customize the launched shell's init environment

#### Simple connection Management

- Easily create and manage all kinds of remote connections
- Securely stores all information exclusively on your computer and encrypts all secret information
- Allows you to share connection configurations to any other trusted party through shareable URLs

#### Demo

<iframe width="700" height="394" src="https://www.youtube.com/embed/pLcBiim_0As" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Data Explorer

Building on top of the connection explorer, the data explorer
allows you to manage and work with all kinds of data sources:

#### Work with your data on a higher level

- X-Pipe utilizes structures of data instead of the raw data itself, allowing for
  a higher level workflow that is independent of the underlying data format
- Save time when adding data sources by making use of the advanced
  auto detection feature of X-Pipe where you don't have to worry about encodings, format configurations, and more
- Easily convert between different data representations

#### Integrate X-Pipe with your favorite tools and workflows

- Easily import and export all kinds of data formats and technologies
- Access data sources from the command-line with the X-Pipe CLI or
  your favorite programming languages using the X-Pipe APIs
- Connect select third party applications directly to X-Pipe through extensions

#### Demo

<img src="https://user-images.githubusercontent.com/72509152/213240736-7a27fb3c-e8c3-4c92-bcea-2a782e53dc31.png" alt="drawing" height="450"/>
