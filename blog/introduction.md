---
slug: introduction
title: An Introduction to X-Pipe
authors: [crschnick]
---

# An Introduction to X-Pipe

X-Pipe is a flexible tool written in Java for working with remote connections and their data.
The focus lies on providing:
- An easy remote connection setup and workflow
- Organization of all your connections in one place
- Tool integrations to automatically launch your remote connections
- Data intermediation capabilities to be able to work with and transfer more than just bytes and text
So if you are a data analyst/scientist, a system administrator, a software engineer, or generally
just work a lot with remote connections and data, then X-Pipe is designed for you!

The core idea is to utilize and integrate well with other popular tools and workflows,
focusing on augmenting them rather than replacing them.
X-Pipe is built around existing tools and tries to outsource tasks to them,
such that you can always use your favorite tools to work with X-Pipe, e.g.
text/code editors, terminals, shells, command-line tools and more.

X-Pipe is designed to be an open platform and is open source on [GitHub](https://github.com/xpipe-io/xpipe).
The platform is designed to be extensible, allowing anyone
to implement custom functionality through custom extensions with the help of an exhaustive API.

## Remote Connections at the forefront

The current workflow regarding remote connections is pretty established.
You just use a client that supports the connection protocol that you want to use.
For example, you would use an SSH client to connect via SSH,
or some sort of client that also supports protocols such as FTP, SFTP, or SCP for easier file transfers.
This approach works fine, but it has several problems:

- You are forced to use the software that is compatible with the used protocols.
  For example, you like the user experience of tool A, but are forced to use tool B as the protocol is not supported.
  Now this problem is somewhat mitigated by the fact that SSH has prevailed as the primary protocol and use for now.
- Any kind of proxy involved in the connection must support the protocol as well.
  For example, you can only proxy an SSH connection over another SSH connection, at least out of the box.
  You can of course login into a remote shell via tool/protocol A and from there
  manually login into another system via tool/protocol B, but that is cumbersome.
- There don't really exist proper connection types to nested local machines, such as
  Docker containers, Windows Subsystem for Linux instances, and virtual machines
  running on arbitrary hosts.
  Connections to those local machines are not supported by most tools out of the box,
  especially if these local machines are not exposed to the public itself. 
  Usually you're only able to connect to their parent machine from the outside.
- Most tools don't support programmatically interacting with the remote machine through remote shells.
  While you are able to open a terminal as a user,
  there is no API are way to execute remote commands programmatically.

The stated goal for X-Pipe is to allow users to easily connect to any remote system,
but these problems still hinder the idea of supporting the vast majority of connection methods.
Ideas like *just support ALL the protocols and ALL the features* are simply not feasible,
as they are too many protocols and features to implement.
So how can we still achieve all the goals through a reasonable effort?

### Shell-based remote connections

X-Pipe utilizes the concept of shell-based remote connections.
The idea of a shell-based remote connection is that it builds on existing tools,
e.g. an existing SSH command-line client, to establish a remote shell connection and interact
with the remote system through it, i.e. to delegate all underlying protocol handling to the external tool.
Essentially, X-Pipe logs in automatically into a remote shell via another tool, automatically detects
the current environment, and adapt its interactions with the remote shell accordingly.
These shell connections can then also be nested by first logging into the
first remote shell, then into another one from there, and so on ...

For this approach to work out, there are many challenges to be considered:

- Shells in general are very heterogeneous, especially between operating systems.
  While the differences between `sh` and `bash` are marginal, shells like `cmd` and `bash` behave in wildly different ways.
  We also need a reliable way to detect which shell we are currently in first.
- The available commands and programs wildly differ between different operating systems and shells with built-ins.
  We need to work with the least common denominator as we don't want to install any additional packages or applications.
  Especially bare docker containers are a challenge here.
- How to handle permissions, elevation, and passwords? Many shells and programs require at least at pty to be present to allow for a password prompt.
  X-Pipe must be able to fill passwords without any ptys or pseudo-consoles.
- As the shell processes are running on remote systems, it is way harder to detect the current state of a remote process:
  - Is the process still running?
  - What exactly is the state of stdin, stdout, stderr? Where exactly does the output of the first program end and the second one start?
  - How to handle errors? Like connection errors, command syntax errors, program execution errors.
- Can we also make these shell connections instantly available to the user?
  I.e. is it possible to open this shell connection in a new terminal window without requiring any explicit user input like passwords?
- Is it possible to chain/nest shell connections and introduce other shell connections as proxies into the process?

Well the good news is that all of these challenges have been successfully conquered!
Of course, the [implementation](https://github.com/xpipe-io/xpipe/tree/master/ext/proc/src/main/java/io/xpipe/ext/proc)
is still a little bit rough around the edges,
and it is planned to support more types of shell connections out of the box.
X-Pipe is in an early alpha after all.
But the current implementation already achieved the goal of supporting a wide range of remote connections.

As an experienced SSH user, you might ask whether X-Pipe is able to support
using your complex SSH configuration that you normally use.
Things like tunnels, configuration files, additional options, and more.
The answer is yes, you are able to utilize any command-line command
to establish remote shell connections.
Of course, you're still able to use the more user-friendly
built-in SSH connection wizard within X-Pipe as well.

You can try out the implementation in the X-Pipe connection explorer:

![connections](/img/stores.png)

#### Instant launch

In case you have ever wanted to easily start different
shell connections and configurations that you frequently use,
you can make use of the instant launch feature.
With it, you can automatically open any shell connection in your favorite terminal program,
skipping any required login process, such as password prompts, as it is automatically handled by X-Pipe.
Most popular terminals are supported out of the box,
but you are also able to add any custom terminal open command by yourself.
Furthermore, you are also able to create desktop shortcuts that can launch the connection in a terminal.

#### Proxy via relays

To fully route any traffic of any protocol using a remote shell connection as proxy,
we need another component that will relay any data received between the originator and destination.
Essentially, X-Pipe is able to install itself onto any remote system via the shell connection by the press of a button.
Therefore, you can perform a one time installation on a remote system that you want to use as a proxy
and then let X-Pipe automatically route the selected traffic through it.
This has the advantage of being able to proxy essentially everything if you so choose.

#### Remote commands

Once a shell connection is opened, you can of course execute arbitrary commands in it.
You can start processes and interact with the input and output of these remote
processes through X-Pipe just as you would with a local process.

From a developer's perspective, local and remote commands behave pretty much the same within X-Pipe.
Through the X-Pipe Java API it is therefore easy to interact with remote shells and commands.
It allows you to easily implement any custom functionality and integrate it into the X-Pipe application by yourself.

#### Remote file explorer

One of the more obvious ideas to implement is a remote file explorer that that works through shell-based connections.
Now obviously, this file explorer would work differently internally as it could only interact with the system
through the command-line, i.e. it would be working on a higher level than normal file managers.

This file explorer is currently work in progress!

## Next level data workflows

In addition to providing connection tools, X-Pipe also aims to integrate
these connections with some data intermediation capabilities.
Essentially, instead of just being able to transfer raw bytes over a connection,
we try to implement some smart piping capabilities into X-Pipe that
can perform some level of data intermediation automatically
(If so desired, of course you can just transfer raw bytes as well).

![sources](/img/sources.png)

#### Working with data on the higher level

Essentially, X-Pipe is able to work with categories of data, instead of the raw data itself.
For example, an Excel sheet or a table in a relational database both contain table data, though in wildly different formats.
They are then categorized as table data sources and handle the same within X-Pipe from a user's perspective.
The challenge here within lies in creating an abstraction that encompasses all types of possible underlying data formats
while ensuring that you can still use the data in any way you want.
The user should effectively not have to know in what format the underlying data is stored
as they all handle exactly the same from the user's perspective, at least in regard to basic data handling.
Now obviously, this approach has inherent limitations, especially when it comes to
preserving very format specific properties and idiosyncrasies of the underlying data.
X-Pipe tries its best to perform an intermediation that will preserve as much data accuracy as possible.

Of course, this approach is not suitable in some cases.
For example, when you plan to perform a database migration, maybe even across different database server types,
and you want to map specific SQL datatypes to minimize any loss of accuracy or data,
X-Pipe is probably not the tool of choice for you, at least not for now.
However, in practice, where you don't have such strict requirements most of the time, X-Pipe works fine.
The idea is that the vast majority of data handling operations are relatively
simple and don't require an extensive custom data type mapping, and can therefore be done quickly through X-Pipe.

#### Smart auto-detection

Data sources come in all kinds of types, many of which are non-uniform.
For example, there are all kinds of encodings even for simple text files
and many variants of `.csv` files out there in the real world.
X-Pipe is able to automatically detect the correct configuration most of the time
such that you can instantly get started with working with
your data sources and don't have to spend any time configuring it
(I guess you could market this as artificial intelligence nowadays).

#### Access from anywhere

To increase your productivity, you should have easy access to your data in any format from anywhere.
The idea is that you should be able to retrieve any data in any compatible format that you want,
regardless of the original data format.
This includes:
- From a GUI interface through the X-Pipe desktop application
- From the command line through the X-Pipe CLI
- From your favorite programming language through the X-Pipe APIs (currently work in progress)
- From commonly used third party applications through integrations (also work in progress)

## Implementation and Stack

X-Pipe is written in Java as it is still the best language when working with all kinds
of data due to the rich ecosystem where you can find a library for everything.
The explicit focus lies on utilizing modern Java functionality.
As a result, X-Pipe and all its extensions use Java 19 and are fully modularized.
Every extension module for X-Pipe is bundled as a jar separately, i.e. not included in the core application,
which allows you to easily develop and drop a custom extension into an existing X-Pipe installation.
The [ModuleLayer API](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/lang/ModuleLayer.html)
is used here for the dynamic loading of modules at runtime.
The distributable application image (without extensions) is built with the
[jpackage](https://docs.oracle.com/en/java/javase/19/docs/specs/man/jpackage.html) tool and the
included CLI application is created with the
[GraalVM native image](https://www.graalvm.org/22.0/reference-manual/native-image/) functionality.
The GUI is realized through JavaFX and various other JavaFX libraries.

If the project and stack sounds exciting to you,
feel free to take a look at [the repository](https://github.com/xpipe-io/xpipe) and maybe even play around with it by yourself!
It is very simple to get started and implement your own functionality.

## Conclusion

X-Pipe is a brand-new tool (at least at the time of this post) so there still a lot to do.
So stay tuned for updates and news.

